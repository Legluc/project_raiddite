import { View } from "react-native";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function Index() {
  return (
    <View className="flex-1 gap-6 bg-background px-6 py-12">
      <View className="gap-2 rounded-lg border border-border bg-card p-6">
        <Text variant="h3" className="text-card-foreground">
          Theme tweakcn active
        </Text>
        <Text variant="muted">
          Les tokens viennent maintenant des variables CSS et sont exposes dans
          Tailwind/NativeWind.
        </Text>
      </View>

      <View className="gap-3">
        <Button>
          <Text>Primary action</Text>
        </Button>
        <Button variant="secondary">
          <Text>Secondary action</Text>
        </Button>
        <Button variant="outline">
          <Text>Outline action</Text>
        </Button>
        <Button variant="destructive">
          <Text>Delete action</Text>
        </Button>
      </View>

      <View className="gap-3 rounded-lg border border-sidebar-border bg-sidebar p-6">
        <Text className="text-sidebar-foreground">Sidebar tokens</Text>
        <View className="flex-row gap-3">
          <View className="h-10 flex-1 rounded-md bg-chart-1" />
          <View className="h-10 flex-1 rounded-md bg-chart-2" />
          <View className="h-10 flex-1 rounded-md bg-chart-3" />
        </View>
      </View>
    </View>
  );
}
