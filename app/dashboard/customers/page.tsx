import Table from '@/app/ui/customers/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function CustomersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  return (
    <div className="w-full">
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <Table />
      </Suspense>
    </div>
  );
}
