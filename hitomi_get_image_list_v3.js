// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 962:
case 2290:
case 225:
case 1895:
case 1632:
case 2721:
case 3103:
case 13:
case 2377:
case 1253:
case 2696:
case 1080:
case 602:
case 3166:
case 2430:
case 157:
case 580:
case 2049:
case 1441:
case 1237:
case 2587:
case 463:
case 839:
case 882:
case 3014:
case 1862:
case 3820:
case 3390:
case 376:
case 2638:
case 3050:
case 309:
case 3371:
case 3240:
case 492:
case 3078:
case 3386:
case 1331:
case 3213:
case 3808:
case 1389:
case 1649:
case 1551:
case 3727:
case 3452:
case 3693:
case 44:
case 448:
case 2517:
case 3769:
case 1054:
case 2592:
case 131:
case 3099:
case 752:
case 1394:
case 1824:
case 3960:
case 1766:
case 3359:
case 1010:
case 896:
case 993:
case 1482:
case 2286:
case 3581:
case 2032:
case 2271:
case 1579:
case 204:
case 4057:
case 2313:
case 3468:
case 1227:
case 2756:
case 271:
case 3177:
case 2794:
case 352:
case 2064:
case 2366:
case 1740:
case 986:
case 1000:
case 3183:
case 1870:
case 2980:
case 866:
case 215:
case 2507:
case 58:
case 2731:
case 3818:
case 1269:
case 3266:
case 1144:
case 1555:
case 1153:
case 3363:
case 753:
case 3972:
case 2408:
case 3888:
case 3004:
case 3306:
case 992:
case 1932:
case 1834:
case 440:
case 2996:
case 776:
case 3529:
case 2910:
case 2954:
case 2719:
case 493:
case 3140:
case 4023:
case 546:
case 1783:
case 1028:
case 1891:
case 3113:
case 3515:
case 1847:
case 278:
case 27:
case 1777:
case 2206:
case 1664:
case 3501:
case 533:
case 857:
case 2044:
case 2280:
case 2346:
case 1885:
case 105:
case 1090:
case 1760:
case 1314:
case 3722:
case 977:
case 1350:
case 3903:
case 182:
case 2512:
case 864:
case 3025:
case 3640:
case 1518:
case 3613:
case 650:
case 1249:
case 2037:
case 3293:
case 2975:
case 308:
case 4052:
case 3380:
case 301:
case 2498:
case 1829:
case 3343:
case 3056:
case 1637:
case 1417:
case 3354:
case 3310:
case 1059:
case 3764:
case 831:
case 3094:
case 3677:
case 3396:
case 700:
case 449:
case 2906:
case 2372:
case 3683:
case 2690:
case 1086:
case 265:
case 1071:
case 1232:
case 3160:
case 1801:
case 124:
case 3338:
case 3031:
case 3089:
case 3272:
case 2254:
case 2243:
case 3558:
case 1653:
case 3591:
case 1644:
case 2778:
case 1805:
case 3977:
case 2848:
case 2027:
case 1149:
case 2663:
case 3146:
case 2857:
case 1520:
case 2833:
case 2069:
case 532:
case 295:
case 701:
case 2180:
case 1842:
case 1944:
case 1953:
case 3300:
case 387:
case 300:
case 1772:
case 1132:
case 3851:
case 1222:
case 826:
case 912:
case 3898:
case 651:
case 1669:
case 2154:
case 3666:
case 2110:
case 2986:
case 2971:
case 1876:
case 3913:
case 1627:
case 1063:
case 1881:
case 3749:
case 2502:
case 4068:
case 894:
case 1304:
case 3879:
case 422:
case 2360:
case 2228:
case 2750:
case 2675:
case 1247:
case 797:
case 1572:
case 2806:
case 3486:
case 464:
case 354:
case 3092:
case 1929:
case 3108:
case 4080:
case 1642:
case 1915:
case 1494:
case 3459:
case 3017:
case 521:
case 1456:
case 1967:
case 2584:
case 1901:
case 2413:
case 3288:
case 1124:
case 192:
case 1869:
case 2514:
case 994:
case 1425:
case 3724:
case 1593:
case 3651:
case 2477:
case 1985:
case 2702:
case 3549:
case 148:
case 52:
case 14:
case 3087:
case 2005:
case 1162:
case 2875:
case 3:
case 1676:
case 3955:
case 2318:
case 849:
case 3636:
case 3679:
case 2886:
case 1345:
case 2871:
case 3463:
case 162:
case 2001:
case 2741:
case 1409:
case 511:
case 2797:
case 4000:
case 3174:
case 745:
case 3998:
case 3951:
case 430:
case 2015:
case 93:
case 604:
case 2029:
case 3522:
case 1147:
case 2859:
case 575:
case 2712:
case 3979:
case 1158:
case 1730:
case 1976:
case 3813:
case 3655:
case 2504:
case 1981:
case 916:
case 822:
case 2466:
case 1262:
case 494:
case 3791:
case 767:
case 3061:
case 2403:
case 2948:
case 1629:
case 1837:
case 2782:
case 1905:
case 3877:
case 3626:
case 1774:
case 3475:
case 1788:
case 1023:
case 754:
case 1667:
case 3118:
case 3734:
case 1615:
case 1844:
case 2085:
case 4028:
case 2320:
case 2816:
case 518:
case 51:
case 2268:
case 2058:
case 2351:
case 966:
case 863:
case 841:
case 2761:
case 2398:
case 2828:
case 717:
case 3454:
case 1755:
case 3908:
case 1281:
case 1239:
case 4090:
case 3236:
case 2589:
case 606:
case 3279:
case 439:
case 482:
case 3618:
case 3438:
case 1484:
case 2034:
case 1115:
case 3251:
case 1822:
case 886:
case 251:
case 983:
case 2594:
case 568:
case 2446:
case 496:
case 543:
case 2652:
case 2493:
case 3041:
case 112:
case 3348:
case 3701:
case 3767:
case 149:
case 3674:
case 2968:
case 3097:
case 2123:
case 529:
case 1583:
case 1995:
case 1634:
case 3715:
case 3333:
case 4086:
case 3012:
case 892:
case 1726:
case 2257:
case 1373:
case 424:
case 3920:
case 1864:
case 1962:
case 1658:
case 2800:
case 2070:
case 2248:
case 3544:
case 1691:
case 3553:
case 3155:
case 2952:
case 2843:
case 591:
case 665:
case 466:
case 2326:
case 982:
case 177:
case 3002:
case 3151:
case 1832:
case 1695:
case 184:
case 373:
case 3988:
case 3974:
case 2668:
case 3045:
case 862:
case 3620:
case 727:
case 1139:
case 560:
case 1229:
case 3711:
case 3179:
case 1958:
case 483:
case 2521:
case 3136:
case 2460:
case 1849:
case 3739:
case 3776:
case 2157:
case 996:
case 893:
case 250:
case 1736:
case 2792:
case 3569:
case 772:
case 1503:
case 2062:
case 3255:
case 3608:
case 2148:
case 4063:
case 2095:
case 1751:
case 122:
case 4006:
case 1798:
case 3918:
case 1361:
case 542:
case 1068:
case 2717:
case 2223:
case 519:
case 2535:
case 598:
case 1624:
case 2880:
case 3400:
case 840:
case 1285:
case 3697:
case 1034:
case 3804:
case 3265:
case 2392:
case 2822:
case 2101:
case 447:
case 3217:
case 3292:
case 2365:
case 1091:
case 4053:
case 2317:
case 1761:
case 1828:
case 3586:
case 2239:
case 344:
case 2281:
case 2276:
case 1047:
case 3432:
case 3945:
case 3590:
case 3107:
case 2864:
case 2962:
case 1257:
case 2726:
case 3342:
case 1800:
case 906:
case 137:
case 2691:
case 1248:
case 2387:
case 15:
case 3305:
case 508:
case 3287:
case 3449:
case 1493:
case 50:
case 1233:
case 3311:
case 1968:
case 3018:
case 2450:
case 2185:
case 3884:
case 3982:
case 3878:
case 4069:
case 3301:
case 3748:
case 3367:
case 947:
case 1460:
case 2958:
case 3329:
case 3899:
case 1843:
case 1952:
case 3733:
case 2215:
case 1773:
case 1326:
case 2695:
case 2934:
case 4027:
case 277:
case 733:
case 3563:
case 3117:
case 3506:
case 2201:
case 284:
case 2142:
case 2751:
case 1765:
case 2798:
case 2361:
case 3187:
case 965:
case 213:
case 2307:
case 605:
case 744:
case 2285:
case 682:
case 479:
case 3173:
case 2624:
case 3207:
case 500:
case 2736:
case 3385:
case 2105:
case 3645:
case 3814:
case 3912:
case 802:
case 2566:
case 3850:
case 332:
case 389:
case 3261:
case 2494:
case 3051:
case 241:
case 2967:
case 2456:
case 3347:
case 1413:
case 2901:
case 1578:
case 1584:
case 788:
case 3673:
case 2234:
case 78:
case 1081:
case 425:
case 1863:
case 1039:
case 2611:
case 1374:
case 3809:
case 2247:
case 1806:
case 1657:
case 3334:
case 626:
case 2572:
case 3145:
case 1599:
case 2258:
case 2291:
case 1648:
case 1745:
case 3692:
case 3580:
case 2341:
case 2708:
case 85:
case 3907:
case 2048:
case 1318:
case 2676:
case 2827:
case 2397:
case 97:
case 630:
case 978:
case 470:
case 2057:
case 2033:
case 1514:
case 509:
case 576:
case 2425:
case 2985:
case 1330:
case 1702:
case 1042:
case 2593:
case 103:
case 3370:
case 24:
case 3617:
case 3437:
case 3241:
case 1168:
case 248:
case 380:
case 2560:
case 2421:
case 3856:
case 2147:
case 381:
case 3607:
case 415:
case 1029:
case 616:
case 3894:
case 3026:
case 2302:
case 2730:
case 2981:
case 2939:
case 1504:
case 3661:
case 2191:
case 631:
case 1741:
case 262:
case 1001:
case 4064:
case 2718:
case 346:
case 1623:
case 3528:
case 1015:
case 2224:
case 293:
case 2667:
case 2788:
case 3197:
case 1085:
case 664:
case 2844:
case 970:
case 63:
case 3362:
case 47:
case 3427:
case 3752:
case 3819:
case 2601:
case 102:
case 3825:
case 1957:
case 3395:
case 2837:
case 388:
case 2518:
case 1597:
case 760:
case 3214:
case 2473:
case 3728:
case 3083:
case 825:
case 1975:
case 343:
case 3807:
case 451:
case 3694:
case 3935:
case 3442:
case 3077:
case 147:
case 4058:
case 3349:
case 2530:
case 390:
case 1393:
case 1044:
case 4047:
case 1671:
case 2760:
case 2016:
case 2090:
case 791:
case 205:
case 1686:
case 3631:
case 282:
case 2232:
case 2122:
case 79:
case 2384:
case 1690:
case 1582:
case 3619:
case 3481:
case 437:
case 3299:
case 1254:
case 742:
case 684:
case 2644:
case 2653:
case 2492:
case 2417:
case 2637:
case 296:
case 572:
case 950:
case 368:
case 1498:
case 45:
case 1451:
case 3552:
case 3040:
case 2574:
case 2588:
case 1128:
case 1372:
case 3743:
case 1833:
case 2461:
case 3919:
case 871:
case 1916:
case 76:
case 623:
case 3364:
case 195:
case 734:
case 649:
case 2953:
case 2842:
case 3887:
case 3621:
case 3485:
case 2805:
case 4024:
case 266:
case 319:
case 39:
case 2811:
case 2264:
case 517:
case 3568:
case 2063:
case 2881:
case 2793:
case 2876:
case 4095:
case 573:
case 2304:
case 3994:
case 1714:
case 3892:
case 3415:
case 3178:
case 106:
case 3956:
case 1138:
case 1750:
case 937:
case 1228:
case 179:
case 1426:
case 2132:
case 214:
case 95:
case 3817:
case 1545:
case 1143:
case 3931:
case 2669:
case 4062:
case 1971:
case 2508:
case 1986:
case 3093:
case 2127:
case 257:
case 3353:
case 1587:
case 2964:
case 2862:
case 640:
case 3225:
case 1638:
case 1418:
case 775:
case 1573:
case 1175:
case 2497:
case 4076:
case 545:
case 4081:
case 125:
case 693:
case 1721:
case 1868:
case 3557:
case 5:
case 1383:
case 3470:
case 1654:
case 1430:
case 2080:
case 1377:
case 1696:
case 2703:
case 231:
case 2054:
case 1592:
case 2356:
case 2043:
case 2010:
case 3458:
case 2096:
case 718:
case 1680:
case 2922:
case 3802:
case 3231:
case 170:
case 3447:
case 3289:
case 985:
case 3845:
case 3434:
case 1735:
case 459:
case 369:
case 1488:
case 2389:
case 2331:
case 4042:
case 321:
case 3294:
case 1517:
case 1106:
case 2598:
case 769:
case 1507:
case 1190:
case 692:
case 4029:
case 2335:
case 1980:
case 3771:
case 1116:
case 1731:
case 1789:
case 2269:
case 3327:
case 2555:
case 2153:
case 1420:
case 3604:
case 399:
case 1303:
case 2227:
case 1756:
case 3759:
case 1064:
case 3914:
case 3812:
case 3495:
case 3523:
case 2000:
case 4067:
case 2740:
case 4015:
case 230:
case 1275:
case 1628:
case 1600:
case 1725:
case 710:
case 3424:
case 226:
case 2891:
case 2028:
case 2783:
case 1938:
case 1263:
case 311:
case 3209:
case 178:
case 2664:
case 1159:
case 402:
case 3882:
case 2777:
case 1408:
case 294:
case 2932:
case 2834:
case 72:
case 375:
case 3790:
case 3060:
case 3716:
case 879:
case 336:
case 1954:
case 3189:
case 2526:
case 1943:
case 2017:
case 1391:
case 1821:
case 3252:
case 42:
case 2065:
case 267:
case 4093:
case 2795:
case 844:
case 3440:
case 1538:
case 3633:
case 2288:
case 1347:
case 3584:
case 1079:
case 999:
case 2486:
case 3806:
case 918:
case 1334:
case 3657:
case 410:
case 3039:
case 3863:
case 3081:
case 3388:
case 1809:
case 2352:
case 2108:
case 1543:
case 1145:
case 2926:
case 1554:
case 1580:
case 2120:
case 3005:
case 2490:
case 911:
case 245:
case 4072:
case 2416:
case 2:
case 469:
case 2866:
case 1297:
case 3514:
case 2803:
case 1370:
case 2087:
case 180:
case 1241:
case 3923:
case 1617:
case 557:
case 107:
case 3477:
case 2651:
case 420:
case 1026:
case 1894:
case 1324:
case 1182:
case 92:
case 181:
case 594:
case 2208:
case 2979:
case 2840:
case 703:
case 2936:
case 1245:
case 1889:
case 3308:
case 3001:
case 2463:
case 910:
case 418:
case 3886:
case 1202:
case 41:
case 1965:
case 2951:
case 1917:
case 146:
case 3623:
case 2188:
case 2174:
case 3085:
case 2118:
case 1987:
case 1500:
case 3268:
case 1141:
case 3933:
case 1819:
case 832:
case 3816:
case 3890:
case 385:
case 3403:
case 2368:
case 3466:
case 1395:
case 1825:
case 1112:
case 676:
case 436:
case 2626:
case 2877:
case 3782:
case 921:
case 609:
case 2747:
case 4060:
case 2007:
case 3034:
case 1804:
case 1697:
case 750:
case 1074:
case 2438:
case 1381:
case 596:
case 4077:
case 443:
case 1265:
case 3556:
case 2251:
case 3828:
case 3398:
case 99:
case 919:
case 3058:
case 2410:
case 2630:
case 942:
case 0:
case 1945:
case 1432:
case 3589:
case 3707:
case 1571:
case 2908:
case 3047:
case 3519:
case 2012:
case 3257:
case 155:
case 1590:
case 539:
case 1516:
case 2333:
case 807:
case 2553:
case 3248:
case 2480:
case 337:
case 1449:
case 2701:
case 1305:
case 227:
case 468:
case 358:
case 2715:
case 1273:
case 2357:
case 600:
case 434:
case 3968:
case 2674:
case 3525:
case 2097:
case 75:
case 3838:
case 1748:
case 4066:
case 758:
case 1982:
case 1884:
case 2705:
case 1192:
case 3521:
case 2136:
case 1757:
case 1422:
case 846:
case 2179:
case 1367:
case 419:
case 3326:
case 881:
case 3854:
case 2988:
case 3668:
case 2974:
case 737:
case 2742:
case 3509:
case 1165:
case 1563:
case 2002:
case 1997:
case 1187:
case 3095:
case 2527:
case 491:
case 888:
case 3880:
case 1575:
case 3133:
case 1941:
case 460:
case 968:
case 350:
case 1385:
case 2930:
case 2776:
case 2781:
case 2739:
case 1261:
case 189:
case 132:
case 1850:
case 2255:
case 2608:
case 60:
case 3062:
case 1814:
case 1645:
case 2569:
case 1344:
case 2277:
case 3900:
case 1706:
case 981:
case 3587:
case 3709:
case 1093:
case 4051:
case 12:
case 1763:
case 3638:
case 2283:
case 3573:
case 592:
case 235:
case 2820:
case 1225:
case 1135:
case 2014:
case 110:
case 3721:
case 3383:
case 2511:
case 829:
case 3430:
case 77:
case 3696:
case 778:
case 861:
case 1699:
case 2103:
case 2505:
case 1470:
case 3654:
case 1337:
case 3643:
case 3680:
case 86:
case 2960:
case 586:
case 3592:
case 1447:
case 1289:
case 1231:
case 304:
case 3032:
case 3286:
case 1904:
case 3340:
case 2581:
case 169:
case 1650:
case 1775:
case 2808:
case 2240:
case 2386:
case 2078:
case 3735:
case 1614:
case 1434:
case 1845:
case 3517:
case 2646:
case 98:
case 3259:
case 563:
case 2693:
case 1109:
case 3928:
case 121:
case 540:
case 4026:
case 1841:
case 315:
case 3507:
case 2660:
case 89:
case 2266:
case 1462:
case 1604:
case 3420:
case 3561:
case 1327:
case 1897:
case 2203:
case 3064:
case 252:
case 3366:
case 1759:
case 1914:
case 3303:
case 11:
case 3756:
case 1369:
case 2468:
case 118:
case 3275:
case 593:
case 2585:
case 2183:
case 645:
case 6:
case 1235:
case 446:
case 770:
case 704:
case 2113:
case 725:
case 1424:
case 3725:
case 3600:
case 1984:
case 1194:
case 111:
case 3263:
case 1209:
case 4055:
case 2004:
case 2874:
case 2363:
case 667:
case 907:
case 1189:
case 48:
case 1790:
case 3186:
case 488:
case 3022:
case 891:
case 3171:
case 980:
case 1716:
case 1060:
case 129:
case 1250:
case 2855:
case 2433:
case 2613:
case 549:
case 2640:
case 4088:
case 2025:
case 3597:
case 1694:
case 3659:
case 523:
case 512:
case 3975:
case 1656:
case 1807:
case 2570:
case 828:
case 3280:
case 3044:
case 3053:
case 3346:
case 617:
case 3823:
case 3393:
case 190:
case 1631:
case 2903:
case 706:
case 2457:
case 2722:
case 2966:
case 779:
case 2031:
case 2272:
case 1481:
case 869:
case 2547:
case 365:
case 433:
case 3210:
case 3296:
case 821:
case 2591:
case 1299:
case 4030:
case 2558:
case 3254:
case 1921:
case 3451:
case 2396:
case 2826:
case 2343:
case 2354:
case 201:
case 16:
case 795:
case 3963:
case 2683:
case 134:
case 2534:
case 1278:
case 4018:
case 1040:
case 1284:
case 3906:
case 1700:
case 1332:
case 1625:
case 3916:
case 4008:
case 1873:
case 1364:
case 3990:
case 1710:
case 1066:
case 1754:
case 1743:
case 1003:
case 3799:
case 1621:
case 200:
case 2300:
case 1150:
case 19:
case 119:
case 2977:
case 3784:
case 1485:
case 1925:
case 142:
case 522:
case 2193:
case 1609:
case 3027:
case 513:
case 2940:
case 955:
case 577:
case 2749:
case 1401:
case 2009:
case 2913:
case 584:
case 306:
case 379:
case 191:
case 3750:
case 3138:
case 1892:
case 1322:
case 3360:
case 1184:
case 3959:
case 933:
case 1178:
case 836:
case 2898:
case 2328:
case 2021:
case 1865:
case 811:
case 3196:
case 2666:
case 672:
case 1204:
case 3143:
case 1989:
case 1199:
case 2603:
case 537:
case 3885:
case 1570:
case 956:
case 1448:
case 2349:
case 339:
case 1903:
case 1019:
case 3969:
case 835:
case 305:
case 809:
case 1722:
case 3314:
case 1855:
case 3927:
case 1433:
case 2250:
case 2728:
case 229:
case 1025:
case 3473:
case 3518:
case 472:
case 689:
case 632:
case 3164:
case 2935:
case 2442:
case 1246:
case 10:
case 243:
case 261:
case 3487:
case 108:
case 1293:
case 2656:
case 3465:
case 3059:
case 1396:
case 551:
case 4041:
case 3417:
case 396:
case 3637:
case 3574:
case 2700:
case 2625:
case 2284:
case 2278:
case 2439:
case 2619:
case 3801:
case 1089:
case 1160:
case 3232:
case 3071:
case 3815:
case 2921:
case 1558:
case 29:
case 2738:
case 2150:
case 3075:
case 456:
case 2485:
case 655:
case 1035:
case 1977:
case 1146:
case 473:
case 3811:
case 1595:
case 3149:
case 1983:
case 2364:
case 2796:
case 796:
case 2873:
case 1562:
case 3461:
case 3772:
case 383:
case 3407:
case 174:
case 1300:
case 3953:
case 3944:
case 3842:
case 972:
case 260:
case 1172:
case 1021:
case 2429:
case 1260:
case 3132:
case 2865:
case 2780:
case 1603:
case 2989:
case 3669:
case 2931:
case 1836:
case 3746:
case 3006:
case 1009:
case 1913:
case 3793:
case 3839:
case 1749:
case 2401:
case 3881:
case 3063:
case 2467:
case 644:
case 739:
case 2415:
case 2892:
case 2219:
case 3325:
case 726:
case 3895:
case 3632:
case 80:
case 3244:
case 3080:
case 2548:
case 4092:
case 3169:
case 338:
case 2337:
case 2699:
case 2706:
case 2046:
case 1277:
case 2763:
case 467:
case 22:
case 4065:
case 503:
case 3237:
case 3441:
case 2093:
case 228:
case 176:
case 109:
case 3319:
case 1014:
case 2533:
case 2225:
case 559:
case 1390:
case 1820:
case 135:
case 3964:
case 68:
case 2678:
case 1808:
case 4073:
case 316:
case 1213:
case 3331:
case 3038:
case 2650:
case 269:
case 2845:
case 1386:
case 1078:
case 1646:
case 1693:
case 1452:
case 1960:
case 3824:
case 3010:
case 1769:
case 2491:
case 997:
case 1099:
case 3579:
case 2231:
case 3536:
case 2121:
case 2072:
case 1581:
case 3482:
case 1576:
case 730:
case 4:
case 2495:
case 2812:
case 2914:
case 585:
case 1177:
case 2759:
case 3227:
case 502:
case 21:
case 330:
case 887:
case 3713:
case 1830:
case 800:
case 3000:
case 2523:
case 2125:
case 874:
case 2119:
case 967:
case 1266:
case 3153:
case 3555:
case 607:
case 2327:
case 4061:
case 1004:
case 1744:
case 3834:
case 3932:
case 394:
case 1363:
case 1888:
case 3309:
case 1874:
case 1972:
case 2221:
case 2189:
case 236:
case 2999:
case 2790:
case 1113:
case 3891:
case 326:
case 764:
case 1140:
case 9:
case 1501:
case 3664:
case 2978:
case 3402:
case 2882:
case 73:
case 2984:
case 1737:
case 2209:
case 2156:
case 211:
case 3670:
case 3499:
case 1443:
case 3755:
case 1454:
case 713:
case 3365:
case 1236:
case 1126:
case 2945:
case 565:
case 1082:
case 691:
case 3239:
case 2804:
case 1785:
case 3478:
case 660:
case 3167:
case 3540:
case 2339:
case 2074:
case 4025:
case 2697:
case 2217:
case 3052:
case 172:
case 1298:
case 3822:
case 408:
case 3924:
case 974:
case 1041:
case 3577:
case 2449:
case 1701:
case 312:
case 1348:
case 547:
case 1537:
case 4056:
case 127:
case 2305:
case 3583:
case 1715:
case 3414:
case 1357:
case 2018:
case 349:
case 1767:
case 2311:
case 4089:
case 3373:
case 3962:
case 3864:
case 1920:
case 3211:
case 2516:
case 3647:
case 2107:
case 1729:
case 2590:
case 255:
case 2161:
case 777:
case 1155:
case 3691:
case 2030:
case 1480:
case 156:
case 3215:
case 579:
case 2733:
case 3267:
case 2329:
case 1428:
case 506:
case 2506:
case 173:
case 384:
case 2563:
case 3934:
case 1742:
case 3947:
case 2748:
case 2192:
case 668:
case 2884:
case 712:
case 3404:
case 1705:
case 723:
case 66:
case 2878:
case 90:
case 2315:
case 908:
case 3139:
case 3991:
case 3176:
case 3779:
case 901:
case 629:
case 3736:
case 1846:
case 1739:
case 3849:
case 3970:
case 1776:
case 1893:
case 897:
case 3111:
case 3566:
case 289:
case 232:
case 2645:
case 595:
case 1569:
case 2912:
case 3361:
case 3798:
case 322:
case 3068:
case 2602:
case 3751:
case 4009:
case 3142:
case 1527:
case 2575:
case 2173:
case 1400:
case 3624:
case 3285:
case 2036:
case 3572:
case 793:
case 2282:
case 1486:
case 3431:
case 504:
case 3489:
case 2809:
case 952:
case 3929:
case 2510:
case 3291:
case 3258:
case 611:
case 1092:
case 2145:
case 2543:
case 341:
case 453:
case 2098:
case 2051:
case 409:
case 4050:
case 740:
case 3124:
case 476:
case 675:
case 2347:
case 1866:
case 1724:
case 3312:
case 3425:
case 1803:
case 4078:
case 4084:
case 2297:
case 2437:
case 280:
case 1698:
case 2370:
case 1549:
case 3985:
case 207:
case 3270:
case 2907:
case 3708:
case 3341:
case 2580:
case 3162:
case 1230:
case 1120:
case 2444:
case 2692:
case 2453:
case 2212:
case 1416:
case 3057:
case 525:
case 1679:
case 1490:
case 1955:
case 3827:
case 1:
case 1463:
case 362:
case 452:
case 2831:
case 57:
case 1406:
case 2202:
case 2528:
case 2965:
case 1174:
case 2917:
case 246:
case 1188:
case 2182:
case 669:
case 2026:
case 856:
case 281:
case 2607:
case 2856:
case 3421:
case 3560:
case 3191:
case 1208:
case 935:
case 3981:
case 2661:
case 3939:
case 976:
case 1936:
case 3730:
case 621:
case 3158:
case 1979:
case 2055:
case 1883:
case 2395:
case 763:
case 3262:
case 62:
case 1877:
case 2112:
case 3629:
case 1007:
case 28:
case 3837:
case 288:
case 3844:
case 610:
case 3615:
case 3853:
case 2500:
case 3788:
case 2819:
case 1564:
case 2141:
case 2427:
case 2362:
case 3295:
case 2973:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1750129201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,];
var gg_b = "1750129201/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
