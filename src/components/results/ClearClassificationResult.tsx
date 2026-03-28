import { Activity, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Props {
  conditionName: string;
  description: string;
  steps: string;
  onSendToKry: () => void;
  onDone: () => void;
}

const ClearClassificationResult = ({ conditionName, description, steps, onSendToKry, onDone }: Props) => (
  <div className="flex flex-col items-center gap-6 text-center animate-in fade-in duration-500">
    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-warning/15">
      <Activity className="h-12 w-12 text-warning" />
    </div>
    <h2 className="font-display text-2xl font-bold text-foreground">{conditionName}</h2>
    <p className="text-muted-foreground">{description}</p>
    <Card className="w-full border-0">
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground"><strong className="text-foreground">Recommended next steps:</strong> {steps}</p>
      </CardContent>
    </Card>
    <Button size="lg" variant="outline" className="w-full rounded-full font-semibold" onClick={onSendToKry}>
      <Send className="mr-2 h-4 w-4" /> Send to Kry
    </Button>
    <Button size="lg" className="w-full rounded-full font-semibold" onClick={onDone}>
      Back to Home
    </Button>
  </div>
);

export default ClearClassificationResult;
