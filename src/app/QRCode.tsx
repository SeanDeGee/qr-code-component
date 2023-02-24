import './QRCode.scss'
import Image from 'next/image'

const QRCode = () => {
	return (
		<div className="qrcode">
			<Image alt="QR Code" src="/image-qr-code.png" width="576" height="576" className="qrcode__image" />
			<h1 className='qrcode__heading'>Improve your front-end skills by building projects</h1>
			<p className='qrcode__description'>Scan the WR Code to visit Frontend Mentor and take your coding skills to the next level</p>
		</div>
	)
}

export default QRCode
