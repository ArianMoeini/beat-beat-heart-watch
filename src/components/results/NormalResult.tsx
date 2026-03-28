import { Heart, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const NormalResult = ({ onDone }: { onDone: () => void }) => (
  <div className="flex flex-col items-center gap-6 text-center animate-in fade-in duration-500">
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-success/15">
      <Heart className="h-12 w-12 text-success" />
    </div>
    <h2 className="font-display text-2xl font-bold text-foreground">All Clear</h2>
    <p className="text-muted-foreground">Your heart rhythm appears normal. Everything looks good — keep it up!</p>
    <Card className="w-full border-0">
      <CardContent className="flex items-center gap-3 p-4">
        <Bell className="h-5 w-5 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">We recommend scanning again in <strong className="text-foreground">1 week</strong>.</p>
      </CardContent>
    </Card>
    <Button size="lg" className="w-full rounded-full font-semibold" onClick={onDone}>
      Back to Home
    </Button>
  </div>
);

export default NormalResult;
