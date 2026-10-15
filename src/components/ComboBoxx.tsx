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
  value: string
  onChange: (value: string) => void
}

export function ComboBoxx({
  items,
  placholdertext,
  value,
  onChange,
}: ComboboxParams) {
  return (
    <Combobox
      items={items}
      value={value || null}
      onValueChange={(v) => onChange((v as string | null) ?? "")}
    >
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
