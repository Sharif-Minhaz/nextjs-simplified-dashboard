import Table from '@/app/ui/customers/table';
// import Pagination from '@/app/ui/invoices/pagination';
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
      {/* <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={6} />
      </div> */}
    </div>
  );
}
