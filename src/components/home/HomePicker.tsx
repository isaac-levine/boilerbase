import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const stylingOptions = [
  { value: "tailwind", label: "Tailwind CSS" },
  { value: "bootstrap", label: "Bootstrap" },
  { value: "shadcn", label: "ShadCN" },
];

const frameworkOptions = [
  { value: "nextjs", label: "Next.js" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
];

const ormOptions = [
  { value: "prisma", label: "Prisma" },
  { value: "drizzle", label: "Drizzle" },
  { value: "typeorm", label: "TypeORM" },
];

export function HomePicker({ dark = true }: { dark?: boolean }) {
  return (
    <Tabs defaultValue="buy" className="w-[650px]">
      <TabsList
        className={cn(
          "grid w-full grid-cols-2 bg-transparent",
          `${
            dark
              ? "text-slate-50 bg-gradient-to-r from-slate-50/0 to-slate-300/30"
              : "text-gray-950 bg-gradient-to-r from-gray-50/0 to-gray-300/30 border-gray-500"
          }`
        )}
      >
        <TabsTrigger value="buy">Buy</TabsTrigger>
        <TabsTrigger value="sell">Sell</TabsTrigger>
      </TabsList>
      <TabsContent value="buy">
        <Card
          className={cn(
            "px-2 py-2 capitalize bg-transparent",
            `${
              dark
                ? "text-slate-50  bg-gradient-to-r from-slate-50/0 to-slate-300/30  border-slate-500"
                : "text-gray-950  bg-gradient-to-r from-gray-50/0 to-gray-300/30 border-gray-500"
            }`
          )}
        >
          <CardHeader>
            <CardTitle>Buy a Boilerplate</CardTitle>
            {/* <CardDescription>Description</CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="styleSelector">Styling</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Tailwind CSS" />
                </SelectTrigger>
                <SelectContent id="styleSelector">
                  {stylingOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="frameworkSelector">Framework</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Next.js" />
                </SelectTrigger>
                <SelectContent id="frameworkSelector">
                  {frameworkOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="ormSelector">ORM</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Prisma" />
                </SelectTrigger>
                <SelectContent id="ormSelector">
                  {ormOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className={cn(
                "mx-1 px-6 py-2 rounded-full capitalize text-sm",
                `${
                  dark
                    ? "text-slate-50  bg-gradient-to-r from-slate-50/0 to-slate-300/30 border-slate-500 border-[1px]"
                    : "text-gray-950  bg-gradient-to-r from-gray-50/0 to-gray-300/30 border-gray-500 border-[1px]"
                }`
              )}
              type="submit"
            >
              Search
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="sell">
        <Card
          className={cn(
            "px-2 py-2 capitalize bg-transparent",
            `${
              dark
                ? "text-slate-50  bg-gradient-to-r from-slate-50/0 to-slate-300/30 border-slate-500"
                : "text-gray-950  bg-gradient-to-r from-gray-50/0 to-gray-300/30 border-gray-500"
            }`
          )}
        >
          <CardHeader>
            <CardTitle>
              Get your boilerplate listed in less than 1 minute
            </CardTitle>
            {/* <CardDescription>Description</CardDescription> */}
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="title">Project title</Label>
              <Input id="title" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="price">Price (in USD)</Label>
              <Input id="new" type="number" />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className={cn(
                "mx-1 px-6 py-2 rounded-full capitalize text-sm",
                `${
                  dark
                    ? "text-slate-50  bg-gradient-to-r from-slate-50/0 to-slate-300/30 border-slate-500 border-[1px]"
                    : "text-gray-950  bg-gradient-to-r from-gray-50/0 to-gray-300/30 border-gray-500 border-[1px]"
                }`
              )}
              type="submit"
            >
              Continue
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
