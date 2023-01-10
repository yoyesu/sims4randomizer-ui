export default function RandomizerDescCard({randomizer}) {

    const {id,randomizerName, description, btnName, href} = randomizer;
    return (
        <div className="random-desc-card" key={id}>
            <h3>{randomizerName}</h3>
            <p>{description}</p>
            <a class="btn" href={href}>{btnName}</a>
        </div>
    )
  }