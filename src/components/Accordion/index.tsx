interface AccordionProps {
  data: {
    label: string
    value: string
  }[]
}

const Accordion = ({ data }: AccordionProps) => {
  return (
    <div className="flex flex-col gap-2">
      {data.map(({ label, value }, index) => (
        <div
          key={index}
          className="collapse collapse-arrow bg-base-200 text-primary-content"
        >
          <input type="checkbox" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">{label}</div>
          <div className="collapse-content">
            <p>{value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion
