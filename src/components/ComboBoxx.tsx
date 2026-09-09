import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox"

const categories = [
  "Food",
  "Transport",
  "Household",
  "Clothes",
  "Education",
] as const

export function ComboBoxx() {
  return (
    <Combobox items={categories}>
      <ComboboxInput placeholder="Select a category" className="py-5" />
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
