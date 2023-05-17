export default function ToolTag({ name, color }: { name: string, color: string }) {
    return (
        <div className={`
            flex
            flex-row
            justify-center
            items-center
            rounded-[8px]
            text-sm
            p-2
            bg-fuchsia-600/20
            m-1
            text-fuchsia-200
        `}>
            <p>{name}</p>
        </div>
    )
}