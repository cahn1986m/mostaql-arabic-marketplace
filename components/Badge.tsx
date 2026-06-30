interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return <span className="rounded-full bg-badge px-3 py-1 text-sm font-medium text-primary">{label}</span>;
}
