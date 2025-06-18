import { useLocalSearchParams } from "expo-router/build/hooks";

export default function PaymentDetailScreen() {
  const { paymentDetail } = useLocalSearchParams<{ paymentDetail: string }>();

  return null;
}
