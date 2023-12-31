export default function Roadmap() {
  const title = "Roadmap";
  const subtle = "";

  const roadmapPrevious = [
    {
      title: "2020",
      description: `
                Koinos announced<br/>
                Bitcoin-style proof-of-work launch on Ethereum
                `,
      status: "done",
    },
    {
      title: "2021",
      description: `
                Test net V1<br/>
                CLI<br/>
                Protobuf integration<br/>
                Proof-of-Burn<br/>
                Kondor web wallet
                `,
      status: "done",
    },
    {
      title: "2022",
      description: `
                Decentralized Governance<br/>
                Mana system<br/>
                Main net live (November 5th)<br/>
                Main net decentralized (December 5th)<br/>
                MEXC listing
                `,
      status: "done",
    },
    {
      title: "Q1 2023",
      description: `
                First dApps go live<br/>
                BurnKoin<br/>
                Fogata<br/>
                Multiple NFT collections<br/>
                KoinosPro development
                `,
      status: "done",
    },
    {
      title: "Q2 2023",
      description: `
                KoinosPro MVP<br/>
                NFTNYC Hackathon<br/>
                Kollection NFT marketplace launch<br/>
                Koinos Account Protocol launch<br/>
                Smart Wallets<br/>
                KoinDX launch<br/>
                Koinos Polls launch<br/>
                `,
      status: "done",
    },
    {
      title: "Q3 2023",
      description: `
                Nicknames<br/>
                KoinDX V2
                `,
      status: "done",
    },
    {
      title: "Q4 2023",
      description: `
                Kollection No-Code NFTs<br/>
                Developer Program<br/>
                KAP Free Access
                `,
      status: "todo",
    },
  ];

  const roadmap2024 = [
    {
      title: "Game Development",
      description: `
                Unreal Engine Integration<br/>
                Unity Integration<br/>
                Splinterlands Collaboration       
            `,
      status: "todo",
    },
    {
      title: "Finance",
      description: `
                Crowdfunding dApp<br/>
                Treasury Management dApp<br/>
                Staking Pools<br/>
                Koincity Markets<br/>
                KoinDX V3
            `,
    },
    {
      title: "KoinosPro",
      description: `
                KoinosPro V1<br/>
                KoinosPro Mana Fountain<br/>
                KoinosPro Fusion       
            `,
      status: "todo",
    },
    {
      title: "dApp Module Toolkit",
      description: `
                State Manager<br/>
                Smart Locker<br/>
                Vault<br/>
                Authorization Engine<br/>
                DAO Tooling     
            `,
      status: "todo",
    },
    {
      title: "Wallets",
      description: `
                Hardware Wallet Support<br/>
                Metamask Smart Wallet Integration<br/>
                Fiat On/Off Ramp
            `,
      status: "todo",
    },
    {
      title: "Blockchain",
      description: `
                WASM VM Upgrade<br/>
                Live Snapshotting<br/>
                Koinos Token Stats & Graphs<br/>
                New KOIN and VHP contracts standard     
            `,
      status: "todo",
    },
    {
      title: "Exchanges",
      description: `
                Tier 2 Listings<br/>
                Tier 1 Listing
            `,
      status: "todo",
    },
    {
      title: "Ecosystem",
      description: `
                Marketing<br/>
                Ambassador Program<br/>
                Partnerships<br/>
                Foundation
            `,
      status: "todo",
    },
  ];

  return (
    <>
      <section id="roadmap" className="pt-100 ct-04 content-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-title mb-70">
                {/* Title */}
                <h2 className="s-50 w-700">{title}</h2>
                {/* Text */}
                <p className="s-21 color--grey">{subtle}</p>
              </div>
            </div>
          </div>
          {/* SECTION CONTENT (ROW) */}
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-12 order-last order-md-2">
              <div className="txt-block left-column wow fadeInRight">
                {roadmapPrevious.map((item, index) => (
                  <div key={index} className="cbox-2 process-step">
                    <div className="cbox-2-txt text-end me-4">
                      {index % 2 > 0 && (
                        <>
                          <h5 className="s-22 w-700">{item.title}</h5>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></p>
                        </>
                      )}
                    </div>
                    {/* Icon */}
                    <div className="ico-wrap">
                    {item.status === "done" && (
                        <img className="cbox-2-ico" src="images/rm-logo2.png" />
                      )}
                      {item.status !== "done" && (
                        <img className="cbox-2-ico" src="images/rm-logo1.png" />
                      )}
                      <span className="cbox-2-line" />
                    </div>
                    {/* Text */}
                    <div className="cbox-2-txt">
                      {index % 2 == 0 && (
                        <>
                          <h5 className="s-22 w-700">{item.title}</h5>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></p>
                        </>
                      )}
                    </div>
                  </div>
                ))}

                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="section-title mb-70">
                      {/* Title */}
                      <h2 className="s-50 w-700">2024 🚀</h2>
                    </div>
                  </div>
                </div>

                {roadmap2024.map((item, index) => (
                  <div key={index} className="cbox-2 process-step">
                    <div className="cbox-2-txt text-end me-4">
                      {index % 2 > 0 && (
                        <>
                          <h5 className="s-22 w-700">{item.title}</h5>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></p>
                        </>
                      )}
                    </div>
                    {/* Icon */}
                    <div className="ico-wrap">
                      {item.status === "done" && (
                        <img className="cbox-2-ico" src="images/rm-logo2.png" />
                      )}
                      {item.status !== "done" && (
                        <img className="cbox-2-ico" src="images/rm-logo1.png" />
                      )}
                      <span className="cbox-2-line" />
                    </div>
                    {/* Text */}
                    <div className="cbox-2-txt">
                      {index % 2 == 0 && (
                        <>
                          <h5 className="s-22 w-700">{item.title}</h5>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
          </div>{" "}
          {/* END SECTION CONTENT (ROW) */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
