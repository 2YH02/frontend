import Item from "../Item/index";
import * as Styled from "./ItemList.styles";
import { useRecoilState } from "recoil";
import { purchaseState } from "../../../store/purchaseAtom";
import formatNumber from "../../../utils/formatNumber";
import { useGetOrderList } from "../../../hooks/useGetOrderList";
import { OrderItem } from "./ItemList.types";

const ItemList = () => {
  const [purchaseList] = useRecoilState(purchaseState);
  const orderId = purchaseList.order_id;
  const { data } = useGetOrderList(orderId as number);
  const orderList: OrderItem[] = data?.data.order_datas;

  return (
    <Styled.PaymentItemWrapper>
      <Styled.Title>결제 항목 {orderList?.length}</Styled.Title>
      <Styled.ItemList>
        {orderList?.map((item) => (
          <Item
            key={item.room_basket_id}
            name={item.accommodation_name}
            type={item.room_name}
            checkIn={item.check_in_at}
            checkOut={item.check_out_at}
            guests={item.number_guests}
            price={item.price}
          />
        ))}
      </Styled.ItemList>
      <Styled.TotalPriceWrapper>
        <Styled.Title>총 결제 금액</Styled.Title>
        <Styled.ItemPriceWrapper>
          <span>₩</span>
          <Styled.ItemPrice>
            {formatNumber(purchaseList.totalPrice)}
          </Styled.ItemPrice>
        </Styled.ItemPriceWrapper>
      </Styled.TotalPriceWrapper>
    </Styled.PaymentItemWrapper>
  );
};

export default ItemList;
