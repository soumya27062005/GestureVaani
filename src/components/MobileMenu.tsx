import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "#features", label: "Features" },
    { href: "#learning", label: "Learning" },
    { href: "#about", label: "About" },
  ];

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px]">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" size="lg" className="mt-4">
              Get Started
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
