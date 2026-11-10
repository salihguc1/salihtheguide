/* ---- Edit these settings ---- */
const CONFIG = {
  whatsapp: "905510251687"
};

const TOURS = [
  {id:"oldcity", t:"Old City walk", d:"The big sights of Sultanahmet, explained properly.", h:["Hagia Sophia","Blue Mosque","Hippodrome","Basilica Cistern"], time:"3–4 h"},
  {id:"bazaar", t:"Grand Bazaar & hans", d:"How to shop, haggle and find the old workshops.", h:["Grand Bazaar","Mahmutpaşa","Tea break with a local"], time:"2–3 h"},
  {id:"taksim", t:"Taksim & Beyoğlu", d:"From Taksim Square down to Galata.", h:["İstiklal Avenue","Çiçek Pasajı","Galata Tower","Karaköy"], time:"3 h"}
];

const CATS = [
  {id:"cheap", label:"Cheap eats"},
  {id:"nice", label:"Nice dinners"},
  {id:"do", label:"Things to do"},
  {id:"night", label:"Nightlife"},
  {id:"photo", label:"Photo spots"},
  {id:"books", label:"Books to read"}
];

/* c = category · n = name · a = neighbourhood (author for books) · p = price 0–3 (0 = free, null = n/a) · fav = your personal favourite
   Use maps for a specific search or for an entry that covers several destinations. */
const RECS = [
  {c:"cheap", n:"Balık ekmek boats", a:"Eminönü", p:1, fav:true, maps:[{label:"Fish boats map", query:"Eminönü Balık Ekmek Tekneleri"}], t:"Grilled fish sandwich straight off the boats by the Galata Bridge. Add pickle juice from the stall next door."},
  {c:"cheap", n:"Dürümzade", a:"Beyoğlu", p:1, t:"Small, famous dürüm place off İstiklal. Order the Adana or the chicken wrap and eat standing up."},
  {c:"cheap", n:"Karaköy Güllüoğlu", a:"Karaköy", p:1, fav:true, t:"The baklava benchmark. Try the pistachio şöbiyet with a glass of tea."},
  {c:"cheap", n:"Vefa Bozacısı", a:"Fatih", p:1, t:"A tiny 1876 shop serving boza, a thick fermented winter drink. Go after Süleymaniye."},
  {c:"cheap", n:"Halil Lahmacun", a:"Kadıköy", p:1, t:"Thin, crisp lahmacun since 1963. Worth the ferry ride to the Asian side."},
  {c:"cheap", n:"Simit from a street cart", a:"Everywhere", p:1, maps:[{label:"Find simit near Sultanahmet", query:"simit near Sultanahmet tram stop"}], t:"Istanbul's sesame bread ring. Best in the morning, with a triangle of cheese."},
  {c:"nice", n:"Çiya Sofrası", a:"Kadıköy", p:2, fav:true, t:"Regional Anatolian dishes you won't find elsewhere. Point at what looks good at the counter."},
  {c:"nice", n:"Hamdi", a:"Eminönü", p:2, maps:[{label:"Hamdi Restaurant map", query:"Hamdi Restaurant, Eminönü"}], t:"Kebabs with a view over the Golden Horn. Ask for a window table upstairs."},
  {c:"nice", n:"Pandeli", a:"Eminönü", p:2, t:"Historic restaurant above the Spice Bazaar entrance, covered in blue tiles. Great for lunch."},
  {c:"nice", n:"Deraliye", a:"Sultanahmet", p:3, t:"Recipes from the Ottoman palace kitchens, a short walk from Hagia Sophia."},
  {c:"nice", n:"Mikla", a:"Beyoğlu", p:3, t:"Modern Turkish tasting menu on a rooftop with a full city view. Book well ahead."},
  {c:"do", n:"Bosphorus by public ferry", a:"Eminönü", p:1, fav:true, maps:[{label:"Eminönü ferry piers map", query:"Şehir Hatları Eminönü İskeleleri"}], t:"From Eminönü, adult İstanbulkart fares are about ₺59 to Üsküdar and ₺65 to Kadıköy (10 November 2026). Both crossings offer skyline views. The Long Bosphorus Tour goes farther north to Anadolu Kavağı."},
  {c:"do", n:"Hagia Sophia & Blue Mosque", a:"Sultanahmet", p:2, maps:[{label:"Hagia Sophia map", query:"Ayasofya-i Kebir Cami-i Şerifi, Sultanahmet"}, {label:"Blue Mosque map", query:"Sultanahmet Camii, Sultanahmet"}], t:"Go early in the morning and avoid prayer times. Dress modestly; scarves are provided."},
  {c:"do", n:"Basilica Cistern", a:"Sultanahmet", p:2, t:"The 6th-century underground water palace. Look for the two Medusa heads at the back."},
  {c:"do", n:"Topkapı Palace", a:"Sultanahmet", p:2, t:"Allow at least three hours. The standard combined ticket includes the palace, the Harem and Hagia Irene."},
  {c:"do", n:"Kılıç Ali Paşa Hamamı", a:"Karaköy", p:3, t:"Historic hamam in Tophane, Karaköy. Book ahead for a scrub and foam wash."},
  {c:"do", n:"Çemberlitaş Hamamı", a:"Old City", p:3, t:"A historic Old City bath. Ask about the scrub and foam wash."},
  {c:"do", n:"Kadıköy market streets", a:"Kadıköy", p:0, maps:[{label:"Kadıköy market map", query:"Kadıköy Çarşısı, Kadıköy"}], t:"Fish stalls, pickle shops and cafés. The Asian side's most fun afternoon."},
  {c:"do", n:"Princes' Islands", a:"Islands", p:1, maps:[{label:"Princes’ Islands map", query:"Adalar"}], t:"A car-free island day trip by ferry. Rent a bike and loop the island."},
  {c:"night", n:"Nardis Jazz Club", a:"Galata", p:2, t:"Small, serious jazz club by Galata Tower with live music most nights."},
  {c:"night", n:"Kadife Sokak (Bar Street)", a:"Kadıköy", p:1, maps:[{label:"Kadife Sokak map", query:"Kadife Sokak, Kadıköy"}], t:"A whole street of relaxed bars where Istanbul's students and locals go out."},
  {c:"night", n:"Nevizade & Asmalımescit", a:"Beyoğlu", p:2, fav:true, maps:[{label:"Nevizade map", query:"Nevizade Sokak, Beyoğlu"}, {label:"Asmalımescit map", query:"Asmalımescit, Beyoğlu"}], t:"Meyhane alleys for rakı, meze and long tables that get louder as the night goes on."},
  {c:"night", n:"Karaköy waterfront", a:"Karaköy", p:2, maps:[{label:"Karaköy waterfront map", query:"Karaköy İskelesi, Karaköy"}], t:"Cocktail bars and cafés by the water, busy on summer nights."},
  {c:"night", n:"Night walk on Galata Bridge", a:"Eminönü", p:0, maps:[{label:"Galata Bridge map", query:"Galata Köprüsü"}], t:"Free and lovely: fishermen above, lit-up mosques across the water."},
  {c:"photo", n:"Balat's colourful houses", a:"Balat", p:0, fav:true, maps:[{label:"Kiremit Caddesi map", query:"Kiremit Caddesi, Balat"}], t:"Painted wooden houses on steep streets. Kiremit Caddesi is the classic shot."},
  {c:"photo", n:"Süleymaniye terrace", a:"Fatih", p:0, maps:[{label:"Süleymaniye Mosque map", query:"Süleymaniye Camii, Fatih"}], t:"The garden behind the mosque looks over the Golden Horn. Best at sunset."},
  {c:"photo", n:"Ortaköy Mosque & bridge", a:"Ortaköy", p:0, maps:[{label:"Ortaköy Mosque map", query:"Büyük Mecidiye Camii, Ortaköy"}], t:"The mosque with the Bosphorus Bridge behind it. Come at blue hour."},
  {c:"photo", n:"Rüstem Paşa Mosque tiles", a:"Eminönü", p:0, maps:[{label:"Rüstem Paşa Mosque map", query:"Rüstem Paşa Camii, Eminönü"}], t:"Some of the finest İznik tiles in the city, hidden above the market stalls."},
  {c:"photo", n:"Pierre Loti Hill", a:"Eyüp", p:1, maps:[{label:"Pierre Loti Hill map", query:"Piyer Loti Tepesi, Eyüpsultan"}], t:"Take the cable car up for a wide view of the Golden Horn with your tea."},
  {c:"photo", n:"Kuzguncuk", a:"Üsküdar", p:0, t:"A quiet village feel on the Asian shore, with old wooden houses and plane trees."},
  {c:"books", n:"Istanbul: Memories and the City", a:"Orhan Pamuk", p:null, fav:true, t:"Pamuk's memoir of growing up in the city. The best book to read before you come."},
  {c:"books", n:"The Museum of Innocence", a:"Orhan Pamuk", p:null, t:"A love story set in 1970s Istanbul. You can visit the real museum in Çukurcuma."},
  {c:"books", n:"Istanbul: A Tale of Three Cities", a:"Bettany Hughes", p:null, t:"Byzantium, Constantinople and Istanbul in one readable history."},
  {c:"books", n:"A Mind at Peace", a:"Ahmet Hamdi Tanpınar", p:null, t:"A classic Turkish novel about love and the Bosphorus on the eve of the Second World War."},
  {c:"books", n:"The Bastard of Istanbul", a:"Elif Şafak", p:null, t:"Four generations of an Istanbul family, funny and moving."},
  {c:"books", n:"The Janissary Tree", a:"Jason Goodwin", p:null, t:"A murder mystery in the Ottoman city of 1836. Fun to read on the trip."}
];

const FAQ = [
  ["How much does a tour cost?","It depends on the tour, the group size and the day. Send me a message with your plans and I'll give you a clear price up front."],
  ["Where do we meet?","Usually at a landmark near the start of the route, such as the German Fountain in Sultanahmet. For private tours I can meet you at your hotel."],
  ["Are entrance tickets included?","Museum tickets are paid separately at the door. I'll tell you which ones you need and help you skip the confusing queues."],
  ["Can I cancel?","Yes. Let me know at least 24 hours before and there's no charge."],
  ["Is it OK for kids or slower walkers?","Of course. I adjust the pace and the route, and we take as many breaks as you like."]
];

const $ = (s)=>document.querySelector(s);
const esc = (s)=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fold = (s)=>String(s).toLocaleLowerCase("tr").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ı/g,"i");
const catLabel = Object.fromEntries(CATS.map(c=>[c.id,c.label]));
const catOrder = Object.fromEntries(CATS.map((c,i)=>[c.id,i]));

/* ---- theme ---- */
const root = document.documentElement;
const THEMES = ["light","dusk","dark"];
function currentTheme(){ const t=root.dataset.theme; return THEMES.includes(t) ? t : (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); }
function syncThemeBtn(){ const t=currentTheme(); document.querySelectorAll(".themes button").forEach(b=>b.setAttribute("aria-pressed", b.dataset.set===t)); }
try{ const s=localStorage.getItem("theme"); if(THEMES.includes(s)) root.dataset.theme=s; }catch(e){}
const themes = $(".themes");
themes.addEventListener("click",e=>{ const b=e.target.closest("[data-set]"); if(!b) return; root.dataset.theme=b.dataset.set; try{localStorage.setItem("theme",b.dataset.set)}catch(e){} syncThemeBtn(); });
matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change",syncThemeBtn);
new MutationObserver(syncThemeBtn).observe(root,{attributes:true,attributeFilter:["data-theme"]});
syncThemeBtn();

/* ---- phone menu ---- */
const menuBtn = $("#menu-btn"), header = document.querySelector("header");
if(menuBtn){
  const nav = $("#site-nav");
  const setMenu = (open)=>{ header.classList.toggle("open",open); menuBtn.setAttribute("aria-expanded",open); menuBtn.setAttribute("aria-label",open?"Close menu":"Open menu"); };
  const phoneMenu = matchMedia("(max-width:820px)");
  const arrangeMenu = ()=>{
    if(phoneMenu.matches){
      // The open links follow the disclosure button in the keyboard order.
      menuBtn.after(nav);
    } else if(menuBtn.nextElementSibling===nav){
      themes.before(nav);
      setMenu(false);
    }
  };
  arrangeMenu();
  phoneMenu.addEventListener?.("change",arrangeMenu);
  menuBtn.addEventListener("click",()=>setMenu(!header.classList.contains("open")));
  const closeOutside = e=>{ if(header.classList.contains("open") && !header.contains(e.target)) setMenu(false); };
  document.addEventListener("click",closeOutside);
  document.addEventListener("focusin",closeOutside);
  document.addEventListener("keydown",e=>{
    if(e.key==="Escape" && header.classList.contains("open")){
      setMenu(false);
      menuBtn.focus();
    }
  });
  nav.addEventListener("click",e=>{ if(e.target.closest("a")) setMenu(false); });
}

/* ---- tours ---- */
if($("#tour-list")){
  $("#tour-list").innerHTML = TOURS.map(t=>`<article class="tour"><span class="meta">${t.time}</span><h3>${esc(t.t)}</h3><p>${esc(t.d)}</p><ul>${t.h.map(h=>`<li>${esc(h)}</li>`).join("")}</ul><a href="booking.html?tour=${t.id}">Ask about this tour →</a></article>`).join("");
}

/* ---- homepage: favourite picks ---- */
if($("#home-picks")){
  const picks = RECS.filter(r=>r.fav && r.c!=="books").slice(0,6);
  $("#home-picks").innerHTML = picks.map(r=>`<li><span class="cat">${esc(catLabel[r.c])}</span><span class="name">${esc(r.n)}</span><span class="area">${esc(r.a)}</span><p class="tip">${esc(r.t)}</p></li>`).join("");
}

/* ---- guide ---- */
if($("#q")){
  const state = {q:"", cat:"all", area:"", price:"", sort:"cat", fav:false};
  const filterToggle = $("#filter-toggle");
  filterToggle?.addEventListener("click",()=>{
    filterToggle.setAttribute("aria-expanded",filterToggle.getAttribute("aria-expanded")!=="true");
  });
  const places = [...new Set(RECS.filter(r=>r.c!=="books").map(r=>r.a))].sort((a,b)=>a.localeCompare(b,"tr"));
  $("#f-area").innerHTML = `<option value="">All areas</option>` + places.map(a=>`<option>${esc(a)}</option>`).join("");

  function matches(r, ignoreCat){
    if(!ignoreCat && state.cat!=="all" && r.c!==state.cat) return false;
    if(state.area && r.a!==state.area) return false;
    if(state.price!=="" && r.p!==Number(state.price)) return false;
    if(state.fav && !r.fav) return false;
    if(state.q){ const hay=fold(`${r.n} ${r.a} ${r.t} ${catLabel[r.c]}`); if(!fold(state.q).split(/\s+/).filter(Boolean).every(w=>hay.includes(w))) return false; }
    return true;
  }
  function hl(text){
    let out = esc(text);
    const words = fold(state.q).trim().split(/\s+/).filter(w=>w.length>1);
    if(!words.length) return out;
    const f = fold(text);
    const ranges=[];
    for(const word of words){
      for(let i=f.indexOf(word); i!==-1; i=f.indexOf(word,i+word.length)){
        ranges.push([i,i+word.length]);
      }
    }
    if(!ranges.length || f.length!==text.length) return out;
    ranges.sort((a,b)=>a[0]-b[0]);
    let res="",last=0;
    ranges.forEach(([s,e])=>{ if(s<last) return; res+=esc(text.slice(last,s))+"<mark>"+esc(text.slice(s,e))+"</mark>"; last=e; });
    return res+esc(text.slice(last));
  }
  function mapLinks(r){
    if(r.c==="books") return "";
    const maps = r.maps ?? [{label:"Open map", query:`${r.n}, ${r.a}`}];
    const links = maps.map(({label,query})=>{
      const url = `https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(query + ", İstanbul")}`;
      const name = label==="Open map" ? `${label} for ${r.n}` : label;
      return `<a href="${url}" target="_blank" rel="noopener" aria-label="${esc(name)} (opens in a new tab)">${esc(label)}</a>`;
    });
    return `<div class="map-links">${links.join("")}</div>`;
  }
  function row(r, showCat){
    const price = r.p===null ? "" : r.p===0 ? "Free" : "₺".repeat(r.p);
    const where = r.c==="books" ? `by ${hl(r.a)}` : hl(r.a);
    return `<li><div><span class="name">${hl(r.n)}</span><span class="area">${where}</span>${r.fav?'<span class="fav">★ Favourite</span>':""}${showCat?`<span class="tag">${catLabel[r.c]}</span>`:""}</div><span class="price">${price}</span><p class="tip">${hl(r.t)}</p>${mapLinks(r)}</li>`;
  }
  function sorter(a,b){
    if(state.sort==="name") return a.n.localeCompare(b.n,"tr");
    if(state.sort==="area") return a.a.localeCompare(b.a,"tr") || a.n.localeCompare(b.n,"tr");
    if(state.sort==="price") return ((a.p??9)-(b.p??9)) || a.n.localeCompare(b.n,"tr");
    return (catOrder[a.c]-catOrder[b.c]) || (b.fav?1:0)-(a.fav?1:0);
  }
  const chips = $("#chips");
  chips.innerHTML = [{id:"all",label:"All"},...CATS].map(c=>`<button type="button" class="chip" data-cat="${c.id}">${c.label}<span class="n"></span></button>`).join("");
  function renderChips(){
    const base = RECS.filter(r=>matches(r,true));
    const counts = {all:base.length}; base.forEach(r=>counts[r.c]=(counts[r.c]||0)+1);
    for(const button of chips.children){
      const category = button.dataset.cat;
      button.setAttribute("aria-pressed",category===state.cat);
      button.querySelector(".n").textContent = counts[category]||0;
    }
  }
  function renderResults(){
    const list = RECS.filter(r=>matches(r)).sort(sorter);
    const filtered = state.q||state.cat!=="all"||state.area||state.price!==""||state.fav||state.sort!=="cat";
    $("#count").textContent = `${list.length} ${list.length===1?"place":"places"}`+(state.cat!=="all"?` in ${catLabel[state.cat]}`:"");
    $("#clear").hidden = !filtered;
    const grouped = state.cat==="all" && state.sort==="cat";
    $("#toggle-all").hidden = !list.length || !grouped;
    if(!list.length){ $("#results").innerHTML = `<div class="empty">Nothing matches yet. Try another word or <button type="button" class="linkish" data-clear>clear the filters</button>.</div>`; return; }
    if(grouped){
      const shown = CATS.filter(c=>list.some(r=>r.c===c.id));
      $("#results").innerHTML = `<div class="sections">`+shown.map(c=>{
        const g=list.filter(r=>r.c===c.id);
        const open = openCats.has(c.id);
        const preview = g.slice(0,3).map(r=>hl(r.n)).join(" · ")+(g.length>3?" …":"");
        return `<details class="cat-section" data-cat="${c.id}"${open?" open":""}><summary><span class="cat-head"><span class="cat-title">${c.label}</span><span class="cat-count">${g.length} ${g.length===1?"place":"places"}</span></span><span class="cat-preview">${preview}</span><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6l6 -6"/></svg></summary><ul class="list">${g.map(r=>row(r,false)).join("")}</ul></details>`;
      }).join("")+`</div>`;
      syncToggleAll();
    } else {
      $("#results").innerHTML = `<ul class="list">${list.map(r=>row(r,state.cat==="all")).join("")}</ul>`;
    }
  }
  const openCats = new Set();
  function syncToggleAll(){
    const all=[...document.querySelectorAll(".cat-section")];
    $("#toggle-all").textContent = all.length && all.every(d=>d.open) ? "Close all" : "Open all";
  }
  $("#results").addEventListener("toggle",e=>{
    const d=e.target; if(!d.classList?.contains("cat-section")) return;
    d.open ? openCats.add(d.dataset.cat) : openCats.delete(d.dataset.cat);
    syncToggleAll();
  },true);
  function render(){ renderChips(); renderResults(); }
  function clearAll(){ Object.assign(state,{q:"",cat:"all",area:"",price:"",sort:"cat",fav:false}); $("#q").value=""; $("#f-area").value=""; $("#f-price").value=""; $("#f-sort").value="cat"; $("#f-fav").checked=false; render(); }

  $("#q").addEventListener("input",e=>{state.q=e.target.value; render();});
  chips.addEventListener("click",e=>{const b=e.target.closest(".chip"); if(!b) return; state.cat=b.dataset.cat; render();});
  $("#f-area").addEventListener("change",e=>{state.area=e.target.value; render();});
  $("#f-price").addEventListener("change",e=>{state.price=e.target.value; render();});
  $("#f-sort").addEventListener("change",e=>{state.sort=e.target.value; render();});
  $("#f-fav").addEventListener("change",e=>{state.fav=e.target.checked; render();});
  $("#clear").addEventListener("click",clearAll);
  $("#toggle-all").addEventListener("click",()=>{
    const all=[...document.querySelectorAll(".cat-section")];
    const openThem = !all.every(d=>d.open);
    all.forEach(d=>{ d.open=openThem; openThem?openCats.add(d.dataset.cat):openCats.delete(d.dataset.cat); });
    syncToggleAll();
  });
  $("#results").addEventListener("click",e=>{ if(e.target.closest("[data-clear]")) clearAll(); });
  render();
}

/* ---- booking ---- */
if($("#book-form")){
  $("#f-tour").innerHTML = TOURS.map(t=>`<option value="${t.id}">${esc(t.t)}</option>`).join("") + `<option value="custom">Private / custom tour</option>`;
  const tour = new URLSearchParams(location.search).get("tour");
  const selectTour = $("#f-tour");
  if(tour && Array.from(selectTour.options).some(option=>option.value===tour)){
    selectTour.value = tour;
  }

  /* ---- FAQ ---- */
  $("#faq-list").innerHTML = FAQ.map(([q,a])=>`<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");

  /* ---- copy phone ---- */
  $("#copy-phone").addEventListener("click",()=>{
    const btn=$("#copy-phone");
    const done=()=>{btn.textContent="Copied";setTimeout(()=>btn.textContent="Copy",1600);};
    const select=()=>{const r=document.createRange();r.selectNodeContents($("#phone"));const s=getSelection();s.removeAllRanges();s.addRange(r);};
    try{ navigator.clipboard.writeText("+905510251687").then(done,select); }catch(e){ select(); }
  });

  /* ---- booking form -> WhatsApp ---- */
  const bookingDate = $("#f-date");
  const groupSize = $("#f-size");
  const fields = {name:$("#f-name"), date:bookingDate, size:groupSize};
  const todayInIstanbul = ()=>new Intl.DateTimeFormat("sv-SE",{timeZone:"Europe/Istanbul",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
  bookingDate.min = todayInIstanbul();
  function showError(key, message){
    $("#e-"+key).textContent = message;
    if(message) fields[key].setAttribute("aria-invalid","true");
    else fields[key].removeAttribute("aria-invalid");
  }
  for(const [key, field] of Object.entries(fields)){
    field.addEventListener("input",()=>showError(key,""));
  }
  $("#book-form").addEventListener("submit",e=>{
    e.preventDefault();
    const name=fields.name.value.trim(), date=bookingDate.value;
    const size=groupSize.valueAsNumber;
    bookingDate.min = todayInIstanbul();
    const badSize = !Number.isInteger(size) || groupSize.validity.rangeUnderflow || groupSize.validity.rangeOverflow;
    const errors = {
      name:name ? "" : "Enter your name.",
      date:!date ? "Pick a date." : bookingDate.validity.rangeUnderflow ? "Pick today or a future date." : "",
      size:badSize ? "Enter a whole number from 1 to 30." : ""
    };
    for(const [key, message] of Object.entries(errors)) showError(key,message);
    const firstError = Object.keys(errors).find(key=>errors[key]);
    if(firstError){
      fields[firstError].focus();
      return;
    }
    const sel=$("#f-tour"), note=$("#f-note").value.trim();
    const text=`Hello Salih! I'd like to book a tour.\nName: ${name}\nDate: ${date}\nTour: ${sel.options[sel.selectedIndex].text}\nGroup size: ${size}${note?`\nNotes: ${note}`:""}`;
    const a=document.createElement("a");
    a.href=`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`; a.target="_blank"; a.rel="noopener";
    document.body.appendChild(a); a.click(); a.remove();
  });
}
