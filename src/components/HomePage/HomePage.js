import './HomePage.css';
function HomePage() {
  return (
    <div className="HomePage">
      <div className='HomePageheader'>
        <h1>Best of the best <br/>community owned<br/> NFT Market place</h1>
     
      </div>

      <div className='detail'>
      <p>Create, sell or collect digital items secured  with Blockchain.</p>
      </div>

      <div class="carousal-img-container">
        <input type="radio" name="slider" id="item-1" checked/>
          <input type="radio" name="slider" id="item-2"/>
            <input type="radio" name="slider" id="item-3"/>
              <div class="cards">
                <label class="card" for="item-1" id="song-1">
                  <img src="https://pbs.twimg.com/profile_images/1634919741809721345/Ow2Krd3K_400x400.jpg" alt="nft"/>
                </label>
                <label class="card" for="item-2" id="song-2">
                  <img src="https://pbs.twimg.com/profile_images/1610104028205031424/ootpBBF2_400x400.png" alt="nft"/>
                </label>
                <label class="card" for="item-3" id="song-3">
                  <img src="https://s2.glbimg.com/EPCclUpcD8MwJ3gqsD5Nw1FsOgw=/0x0:595x599/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2021/c/8/vwEnBlQTOR5JMPV1qigw/captura-de-tela-2021-12-14-114837.jpg" alt="nft"/>
                </label>
              </div>

            </div>
    </div>
          );
}

          export default HomePage;

