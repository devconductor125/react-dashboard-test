import { useState, useEffect } from "react";
import { WalletIcon, ArchiveBoxIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";

import avatar from "../assets/avatar.png";
import card1 from "../assets/card1.svg";
import card2 from "../assets/card2.svg";
import income from "../assets/income.svg";
import outcome from "../assets/outcome.svg";
import send from "../assets/send.svg";
import receive from "../assets/receive.svg";

export default function Dashboard() {
	const [transactions, setTransaction] = useState([]);
	useEffect(() => {
		setTransaction([
			{
				name: {
					avatar: "https://ui-avatars.com/api/?name=John+Doe&background=0D8ABC&color=fff",
					name: "Coffee Shop",
				},
				date: "2023-02-05",
				amount: 2456,
			},
			{
				name: {
					avatar: "https://ui-avatars.com/api/?name=William+Doe&background=0D8ABC&color=fff",
					name: "Coffee Shop",
				},
				date: "2023-2-5",
				amount: 10,
			},
			{
				name: {
					avatar: "https://ui-avatars.com/api/?name=Lunny+Ronald&background=0D8ABC&color=fff",
					name: "Coffee Shop",
				},
				date: "2023-2-5",
				amount: 20,
			},
			{
				name: {
					avatar: "https://ui-avatars.com/api/?name=Christian+Rodrigo&background=0D8ABC&color=fff",
					name: "Coffee Shop",
				},
				date: "2023-2-5",
				amount: 300,
			},
			{
				name: {
					avatar: "https://ui-avatars.com/api/?name=Jhon+Rambo&background=0D8ABC&color=fff",
					name: "Coffee Shop",
				},
				date: "2023-2-5",
				amount: 39,
			},
		]);
	}, []);

	return (
		<>
			<div className="w-100 flex justify-between ">
				<div className="text-3xl font-bold">Good morning, Amelia!</div>
				<div>
					<img src={avatar} className="rounded-3xl" width={50} height={50}></img>
				</div>
			</div>
			<div className="grid grid-cols-12 mt-3 gap-4 lg:gap-6 sm:gap-4 xl:gap-8">
				<div className="col-span-12 lg:col-span-7">
					<div className="text-left">
						<span className="text-2xl font-bold">
							Cards<span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">2</span>
						</span>
					</div>
					<div className="grid grid-cols-12 mt-2 gap-3">
						<div className="col-span-6">
							<img src={card1} alt="Card 1" className="w-full" />
						</div>
						<div className="col-span-6">
							<img src={card2} alt="Card 2"  className="w-full"/>
						</div>
					</div>
					<div>
						<div className="text-left mt-4 flex justify-between">
							<span className="text-2xl font-bold">Transactions</span>
							<div className="flex justify-end">
								<select
									id="status"
									className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								>
									<option>Status</option>
									<option value="active">Active</option>
									<option value="inactive">Inactive</option>
								</select>
								<select
									id="types"
									className="mx-2 pr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								>
									<option>Types</option>
									<option value="pending">Pending</option>
									<option value="approved">Approved</option>
									<option value="rejected">Rejected</option>
								</select>
								<div className="border border-gray-300 rounded-xl w-32 flex justify-center items-center text-center">
									<ArchiveBoxIcon className="h-4 w-4" />
								</div>
							</div>
						</div>
						<div className="mt-2">
							<div className="relative overflow-x-auto">
								<table className="w-full text-left">
									<thead className="">
										<tr>
											<th scope="col" className=" py-3 rounded-l-lg">
												Name
											</th>
											<th scope="col" className=" py-3" width="120">
												Date
											</th>
											<th scope="col" className=" py-3 rounded-r-lg" width="80">
												Amount
											</th>
										</tr>
									</thead>
									<tbody>
										{transactions.map((item, index) => {
											return (
												<tr key={index}>
													<td className="py-2">
														<div className="flex items-center">
															<img src={item.name.avatar} width={40} height={40} className="rounded-3xl" />
															<span className="font-bold ml-2">{item.name.name}</span>
														</div>
													</td>
													<td>{item.date}</td>
													<td className="text-right font-bold">${item.amount}</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-5">
					<div className="text-left w-full">
						<span className="text-2xl font-bold">Current Balance</span>
						<div className="mt-2 text-center w-full">
							<a className=" w-full block  p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
								<span className="my-3 text-base tracking-tight text-gray-900 dark:text-white">Actual Balance</span>
								<p className="text-gray-900 dark:text-white text-3xl font-bold justify-center flex text-center items-center mt-3">
									<WalletIcon className="h-5 w-5 mr-2 " />
									$242,456
								</p>
								<div className="grid grid-cols-2 mt-6 mb-2">
									<div className="flex justify-center">
										<img src={income} alt="Income" />
										Income: <span className="font-bold">$20,324</span>
									</div>
									<div className="flex justify-center">
										<img src={outcome} alt="Outcome" />
										Income: <span className="font-bold">$16,257</span>
									</div>
								</div>
							</a>
						</div>
					</div>
					<div className="mt-4">
						<div className="grid grid-cols-2 gap-4">
							<div>
								<div className="border border-gray-300 rounded-xl h-14 w-100 flex justify-between px-3 items-center text-center">
									<span>Send</span>
									<img src={send} />
								</div>
							</div>
							<div>
								<div className="border border-gray-300 rounded-xl h-14 w-100 flex justify-between px-3 items-center text-center">
									<span>Receive</span>
									<img src={receive} />
								</div>
							</div>
						</div>
					</div>
          <div className="w-full border border-gray-300 rounded-2xl mt-4 h-[calc(100vh-400px)] flex justify-center items-center flex-col lg:px-24 px-10">
            <CurrencyDollarIcon width={50} height={50} color="gray"/>
            <p className="mt-6 font-bold">You don’t have any loans now.</p>
            <p className="mt-3">If you like to take a loan, press the button to know more</p>
            <p className="mt-3 btn btn-blue">
              <button>Take a loan</button>
            </p>
          </div>
				</div>
			</div>
		</>
	);
}
