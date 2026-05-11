import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PreRegistrationForm } from "./PreRegistrationForm";
import { useLanguageStore } from "@/lib/i18n";

interface GetStartedDialogProps {
  children: React.ReactNode;
}

export function GetStartedDialog({ children }: GetStartedDialogProps) {
  const [open, setOpen] = useState(false);
  const { language } = useLanguageStore();

  const t = (en: string, bn: string) => (language === "bn" ? bn : en);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[550px] glass-card border-primary/20 backdrop-blur-xl p-0 overflow-hidden">
        <div className="p-8">
          <DialogHeader className="mb-8">
            <DialogTitle className="text-3xl font-display font-bold gradient-text mb-2">
              {t("Scale Your Business", "আপনার ব্যবসা বড় করুন")}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base">
              {t(
                "Fill out the form below and our team will help you automate your financial tracking.",
                "নিচের ফর্মটি পূরণ করুন এবং আমাদের টিম আপনার ব্যবসার হিসাব স্বয়ংক্রিয় করতে সাহায্য করবে।"
              )}
            </DialogDescription>
          </DialogHeader>
          
          <PreRegistrationForm onSuccess={() => setOpen(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
