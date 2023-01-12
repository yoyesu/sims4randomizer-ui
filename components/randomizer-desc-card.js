export default function RandomizerDescCard({randomizer}) {

    const {id,randomizerName, description, btnName, href} = randomizer;
    return (
        <div className="random-desc-card d-flex flex-column" key={id}>
            <h3>{randomizerName}</h3>
            <p className="">{description}</p>
            <a className="btn mt-auto" href={href}>{btnName}</a>
        </div>
    )
  }