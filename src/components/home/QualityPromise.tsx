import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useWindowSize } from "usehooks-ts";

export function QualityPromise() {
  const [open, setOpen] = React.useState(false);
  const { width = 0, height = 0 } = useWindowSize();
  const isDesktop = width >= 768;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary">Our quality promise &rarr;</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle className="mb-3">Our Promise to You</DialogTitle>
            <DialogDescription>
              Boilerbase is committed to providing you with the best quality web
              app boilerplates on the market. We guarantee that every asset on
              our platform is verified by our team to ensure our highest quality
              standards. Each boilerplate featured on the site has been through
              a rigorous review process to ensure that it meets our quality
              criteria. We are constantly working to improve our platform and
              provide you with the best possible experience. If you have any
              questions or concerns, please don&apos;t hesitate to contact us.
            </DialogDescription>
          </DialogHeader>
          {/* <ProfileForm /> */}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="secondary">Our quality promise &rarr;</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle className="mb-3">Our Promise to You</DrawerTitle>
          <DrawerDescription>
            Boilerbase is committed to providing you with the best quality web
            app boilerplates on the market. We guarantee that every asset on our
            platform is verified by our team to ensure our highest quality
            standards. Each boilerplate featured on the site has been through a
            rigorous review process to ensure that it meets our quality
            criteria. We are constantly working to improve our platform and
            provide you with the best possible experience. If you have any
            questions or concerns, please don&apos;t hesitate to contact us.
          </DrawerDescription>
        </DrawerHeader>
        {/* <ProfileForm className="px-4" /> */}
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
