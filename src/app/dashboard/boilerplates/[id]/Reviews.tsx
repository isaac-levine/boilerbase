// Reviews.tsx
"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ReviewUser {
  first_name: string | null;
  last_name: string | null;
  image: string | null;
  username: string | null;
}

interface Review {
  id: string;
  content: string;
  createdAt: string;
  user: ReviewUser;
}

export default function Reviews({ listingId }: { listingId: string }) {
  const { data: session } = useSession();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`/api/listings/${listingId}/reviews`);
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (listingId) {
      fetchReviews();
    }
  }, [listingId]);

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`/api/listings/${listingId}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ review: newReview }),
      });

      if (response.ok) {
        const review = await response.json();
        setReviews([review, ...reviews]);
        setNewReview("");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Reviews</h2>

      {session?.user ? (
        <form onSubmit={handleSubmitReview} className="mb-6">
          <Textarea
            placeholder="Share your thoughts about this boilerplate..."
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            className="mb-2"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            Post Review
          </Button>
        </form>
      ) : (
        <p className="text-muted-foreground mb-4">
          Please sign in to leave a review.
        </p>
      )}

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="flex gap-4 p-4 rounded-lg border">
            <Avatar>
              <AvatarImage src={review.user?.image || ""} alt="User avatar" />
              <AvatarFallback>
                {review.user?.first_name?.[0]?.toUpperCase() ||
                  review.user?.username?.[0]?.toUpperCase() ||
                  "?"}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold">
                  {review.user?.username ||
                    `${review.user?.first_name || ""} ${
                      review.user?.last_name || ""
                    }`.trim() ||
                    "Anonymous"}
                </p>
                <span className="text-muted-foreground text-sm">
                  {format(new Date(review.createdAt), "PPP")}
                </span>
              </div>
              <p className="mt-1">{review.content}</p>
            </div>
          </div>
        ))}
        {reviews.length === 0 && (
          <p className="text-muted-foreground">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}
