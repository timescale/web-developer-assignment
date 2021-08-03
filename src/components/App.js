import React, { useEffect, useState } from 'react'
import logo from '../images/logo.svg';
import Card from './card'
import Model from './detailModel'
import { getData, searchData } from '../fetchSrevices'

function App() {
	const [page, setPage] = useState(1)
	const [data, setData] = useState([])
	const [model, setModel] = useState(false)
	const [detail, setDetail] = useState({})

	const handleModel = (item) => {
		setDetail(item)
		openOrClose()
	}
	const openOrClose = () => {
		setModel(!model)
	}
	const onSearch = async (e) => {
		let name = e.target.value
		if (name) {
			const data = await searchData(name)
			setData(data)
		}
		else api()
	}

	const api = async (pageNo) => {
		const data = await getData(pageNo)
		setData(data)
	}
	const handleOnClick = (value) => {
		let pageNo = page
		if (value === 'next') {
			setPage(pageNo + 1)
			pageNo = pageNo + 1
		}
		else if (value === 'pre') {
			if (pageNo > 1) {
				setPage(pageNo - 1)
				pageNo = pageNo - 1
			}
		}
		else {
			pageNo = page
		}
		api(pageNo)
	}

	useEffect(() => {
		api()
	}, [])
	return (
		<>
			<div className={`${model ? "blur" : ""}`}>
				<div className="header">
					<div className="container header-inner">
						<img src={logo} alt="Timescale" />
						<div style={{ display: 'flex', alignItems: 'center' }}><input className="input" type="text" name="search" placeholder="Search.." onChange={(e) => onSearch(e)} /></div>
					</div>
				</div>
				{data.length > 0 ? (
					<div className="center">
						<div className="container">
							<div className="gridlayout">
								{data.map((item, index) => {
									return (
										<Card key={index} data={item} onClick={() => handleModel(item)} />
									)
								})}
							</div>
							<div style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '50px', paddingRight: '50px', paddingBottom: '25px' }}>
								<div><button className="button" onClick={() => handleOnClick('pre')}>Pre.</button></div>
								<div><button className="button" onClick={() => handleOnClick('next')}>Next</button></div>
							</div>
						</div>
					</div>
				) :
					(<div className="noData"><p>No Record Found</p></div>)
				}
			</div>
			{model && <div className="alignModel"><Model data={detail} onClick={() => openOrClose()} /></div>}

		</>

	)
}
export default App;
