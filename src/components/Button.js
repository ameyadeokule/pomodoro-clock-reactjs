export const Button = ({title, activeClass, _callback}) => {
	return (
		<div>
			<button className={activeClass} onClick={_callback}>{title}</button>
		</div>
	)
}
