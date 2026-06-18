export interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-lg border border-slate-700 bg-slate-800 p-4">
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-slate-300">{label}</p>
    </div>
  );
}
