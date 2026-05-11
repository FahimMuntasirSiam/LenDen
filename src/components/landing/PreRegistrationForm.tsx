import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguageStore } from "@/lib/i18n";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import { ChevronRight, ChevronLeft, CheckCircle2 } from "lucide-react";

const steps = [
  { id: "basic", title: { en: "Basic Information", bn: "প্রাথমিক তথ্য" } },
  { id: "usage", title: { en: "Business Scale", bn: "ব্যবসায়ের পরিধি" } },
  { id: "services", title: { en: "Services Used", bn: "ব্যবহৃত সেবা" } },
];

const PRE_DEFINED_SERVICES = [
  "bKash", "Nagad", "Rocket", "Upay", 
  "Islami Bank", "BRAC Bank", "City Bank", 
  "NCC Bank", "Dutch-Bangla Bank", "Sonali Bank"
];

export function PreRegistrationForm({ onSuccess }: { onSuccess: () => void }) {
  const { language } = useLanguageStore();
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    monthly_transactions: "",
    devices: "",
    services: [] as string[],
    other_service: "",
  });

  const t = (en: string, bn: string) => (language === "bn" ? bn : en);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 2));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('Waitlist')
        .insert([
          {
            name: formData.name,
            phone: formData.phone,
            business_type: `Location: ${formData.location}`,
            wallets: [...formData.services, formData.other_service].filter(Boolean).join(", "),
            monthly_transactions: parseInt(formData.monthly_transactions.replace(/[^0-9]/g, "")) || 0,
          },
        ]);

      if (error) throw error;
      toast.success(t("Success! We'll contact you soon.", "সফল হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।"));
      onSuccess();
    } catch (error) {
      console.error('Submission error:', error);
      const errorMessage = error instanceof Error ? error.message : "Error submitting form";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const isStepValid = () => {
    if (currentStep === 0) return formData.name && formData.phone && formData.location;
    if (currentStep === 1) return formData.monthly_transactions && formData.devices;
    if (currentStep === 2) return formData.services.length > 0 || formData.other_service;
    return false;
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Progress Bar */}
      <div className="flex justify-between mb-8 relative">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
        <motion.div 
          className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-0"
          initial={{ width: "0%" }}
          animate={{ width: `${(currentStep / 2) * 100}%` }}
        />
        {steps.map((step, idx) => (
          <div 
            key={step.id} 
            className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
              idx <= currentStep ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground border border-border"
            }`}
          >
            {idx < currentStep ? <CheckCircle2 size={16} /> : idx + 1}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6 min-h-[350px]"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-display font-bold text-foreground">
              {t(steps[currentStep].title.en, steps[currentStep].title.bn)}
            </h2>
          </div>

          {currentStep === 0 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>{t("Full Name", "আপনার নাম")}</Label>
                <Input 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  placeholder={t("John Doe", "আপনার পুরো নাম লিখুন")}
                  className="bg-secondary/50"
                />
              </div>
              <div className="space-y-2">
                <Label>{t("Mobile Number", "মোবাইল নম্বর")}</Label>
                <Input 
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  placeholder="+880 1XXX XXXXXX"
                  className="bg-secondary/50"
                />
              </div>
              <div className="space-y-2">
                <Label>{t("Location", "আপনার এলাকা/ঠিকানা")}</Label>
                <Input 
                  value={formData.location}
                  onChange={e => setFormData({...formData, location: e.target.value})}
                  placeholder={t("e.g. Gulshan, Dhaka", "যেমনঃ গুলশান, ঢাকা")}
                  className="bg-secondary/50"
                />
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="space-y-3">
                <Label>{t("Monthly Transaction Volume", "মাসে আনুমানিক কতগুলো লেনদেন হয়?")}</Label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { en: "< 500", bn: "৫০০ এর কম" },
                    { en: "500 - 2,000", bn: "৫০০ - ২,০০০" },
                    { en: "2,000 - 5,000", bn: "২,০০০ - ৫,০০০" },
                    { en: "5,000+", bn: "৫,০০০ এর বেশি" }
                  ].map(opt => (
                    <button
                      key={opt.en}
                      onClick={() => setFormData({...formData, monthly_transactions: opt.en})}
                      className={`p-3 text-sm rounded-lg border transition-all ${
                        formData.monthly_transactions === opt.en 
                          ? "bg-primary/10 border-primary text-primary" 
                          : "bg-secondary/30 border-border hover:border-primary/50"
                      }`}
                    >
                      {t(opt.en, opt.bn)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <Label>{t("How many devices do you use?", "আপনি কয়টি ডিভাইস ব্যবহার করেন?")}</Label>
                <Input 
                  type="number"
                  value={formData.devices}
                  onChange={e => setFormData({...formData, devices: e.target.value})}
                  placeholder="e.g. 2"
                  className="bg-secondary/50"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <Label className="block mb-2">{t("Select all services you use:", "আপনি কোন সেবাগুলো ব্যবহার করেন (সবগুলো সিলেক্ট করুন):")}</Label>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
                {PRE_DEFINED_SERVICES.map(service => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox 
                      id={service} 
                      checked={formData.services.includes(service)}
                      onCheckedChange={() => handleServiceToggle(service)}
                    />
                    <label htmlFor={service} className="text-sm font-medium leading-none cursor-pointer">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-border mt-4">
                <Label>{t("Other Services", "অন্যান্য সেবা")}</Label>
                <Input 
                  value={formData.other_service}
                  onChange={e => setFormData({...formData, other_service: e.target.value})}
                  placeholder={t("e.g. Bank Asia, Rocket etc.", "যেমনঃ ব্যাংক এশিয়া, রকেট ইত্যাদি")}
                  className="bg-secondary/50 mt-2"
                />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8 pt-6 border-t border-border">
        {currentStep > 0 && (
          <Button 
            variant="outline" 
            onClick={prevStep}
            className="flex-1 gap-2"
            disabled={loading}
          >
            <ChevronLeft size={18} /> {t("Back", "পিছনে")}
          </Button>
        )}
        {currentStep < 2 ? (
          <Button 
            onClick={nextStep} 
            className="flex-1 gap-2 neon-glow"
            disabled={!isStepValid()}
          >
            {t("Next", "পরবর্তী")} <ChevronRight size={18} />
          </Button>
        ) : (
          <Button 
            onClick={handleSubmit} 
            className="flex-1 gap-2 neon-glow bg-primary"
            disabled={!isStepValid() || loading}
          >
            {loading ? t("Submitting...", "সাবমিট হচ্ছে...") : t("Complete Registration", "রেজিস্ট্রেশন সম্পন্ন করুন")}
          </Button>
        )}
      </div>
    </div>
  );
}
