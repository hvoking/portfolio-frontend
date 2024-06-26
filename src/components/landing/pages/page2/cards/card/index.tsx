// App imports
import './styles.scss';

// Context imports
import { useScroll } from '../../../../context/scroll';

export const Card = ({ currentWork, setCurrentWork, path, work, src, description }: any) => {
	const { scrollToSection, currentSection } = useScroll();

	const onClick = () => {
		setCurrentWork(work)
		currentSection === "page1" && scrollToSection("page2")
	}

	const getOpacity = () => {
		if (currentSection === "page1") return "1"
		return currentWork === work ? "1" : "0.5"
	}
	return (
		<div className="card-wrapper" onClick={onClick}>
			<div style={{display: "flex", justifyContent: "space-between"}}>
				<div 
					className="pages-subtitle" 
					style={{opacity: getOpacity()}}
				>
					{work}
				</div>
				{currentWork === work && work !== "grass" && <img 
					src="static/components/landing/extra/redirect_white.svg" 
					width="15px" 
					alt="redirect"
					onClick={() => window.open(path)}
				/>}
			</div>
			<img 
				className="card-thumbnail" 
				src={src} 
				alt={work}
				style={{opacity: getOpacity()}}
			/>
			<div 
				className="pages-description" 
				style={{color: "rgba(255, 255, 255, 1)", opacity: getOpacity()}}
			>
				{description}
			</div>
			{currentWork === work && <div className="card-background"/>}
		</div>
	)
}

Card.displayName="Card";