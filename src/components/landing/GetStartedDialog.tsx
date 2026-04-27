import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface GetStartedDialogProps {
  children: React.ReactNode;
}

export function GetStartedDialog({ children }: GetStartedDialogProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We will get back to you shortly.");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] glass-card border-primary/20 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display font-bold gradient-text mb-2">
            Scale Your Business
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base">
            Fill out the form below and our team will help you automate your financial tracking.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">Your Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your full name" 
                required 
                className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="+880 1XXX XXXXXX" 
                required 
                className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="business" className="text-sm font-medium">What type of business do you run?</Label>
              <Input 
                id="business" 
                placeholder="e.g. Retail, E-com, Agency" 
                required 
                className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wallets" className="text-sm font-medium">Which wallets does your business use?</Label>
              <Input 
                id="wallets" 
                placeholder="bKash, Nagad, Rocket, etc." 
                required 
                className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="transactions" className="text-sm font-medium">Monthly Transactions (Approx)</Label>
              <Input 
                id="transactions" 
                type="number" 
                placeholder="e.g. 500" 
                required 
                className="bg-secondary/50 border-border/50 focus:border-primary/50 transition-all"
              />
            </div>
          </div>
          <Button type="submit" className="w-full neon-glow font-display font-semibold text-lg py-6 mt-2">
            Get Started — It's Simple
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
