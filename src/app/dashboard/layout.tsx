import PageLayout from "@/components/layout/PageLayout";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout>
      <Suspense>{children}</Suspense>
    </PageLayout>
  );
}
