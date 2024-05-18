import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { CallToActionButton } from "@/components/custom/call-to-action-button";
import SectionTitle from "@/components/custom/section-title";
import ContentContainer from "@/components/ui/content-container";
import { Textarea } from "@/components/ui/textarea";
import config from "@/lib/config";
import Link from "next/link";

export default function ContactSection() {
  return (
    <ContentContainer>
      <section className="w-full p-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionTitle color="#dc3d2f">
              {config.contact.sectionTitle}
            </SectionTitle>
            <p className="mt-8 max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {config.contact.introParagraph}
            </p>
            <form className="mt-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{config.contact.nameLabel}</Label>
                  <Input
                    className="rounded-xl text-base"
                    id="name"
                    placeholder={config.contact.namePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{config.contact.emailLabel}</Label>
                  <Input
                    className="rounded-xl text-base"
                    id="email"
                    placeholder={config.contact.emailPlaceholder}
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">{config.contact.messageLabel}</Label>
                <Textarea
                  className="rounded-xl min-h-36 text-base"
                  id="message"
                  placeholder={config.contact.messagePlaceholder}
                />
              </div>
              <CallToActionButton>
                {config.contact.submitButton}
              </CallToActionButton>
              {/* <Button className="w-full sm:w-auto" type="submit">
                </Button> */}
            </form>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                {config.contact.connectTitle}
              </h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                {config.contact.connectParagraph}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              {config.me.socialLinks.map((socialLink, index) => (
                <Link
                  key={socialLink.url}
                  className="text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  href={socialLink.url}
                >
                  {socialLink.icon}
                  <span className="sr-only">{socialLink.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ContentContainer>
  );
}
