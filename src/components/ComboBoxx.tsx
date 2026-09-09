import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

type ComboboxParams = {
  items: string[]
  placholdertext: string
}

export function ComboBoxx({ items, placholdertext }: ComboboxParams) {
  return (
    <Combobox items={items}>
      <ComboboxInput placeholder={placholdertext} className="py-4" />
      <ComboboxContent>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
