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
case 1308:
case 2613:
case 1184:
case 59:
case 708:
case 2166:
case 3600:
case 3408:
case 3798:
case 1527:
case 974:
case 2424:
case 3540:
case 1700:
case 1793:
case 1553:
case 2310:
case 3303:
case 109:
case 3929:
case 2411:
case 3294:
case 3102:
case 3701:
case 1049:
case 863:
case 761:
case 1823:
case 1972:
case 2804:
case 3146:
case 1601:
case 3495:
case 868:
case 1571:
case 2247:
case 3654:
case 2707:
case 652:
case 1317:
case 3938:
case 3271:
case 1983:
case 3245:
case 3474:
case 3241:
case 3275:
case 3444:
case 2520:
case 1754:
case 464:
case 3062:
case 18:
case 2464:
case 2848:
case 567:
case 685:
case 545:
case 2261:
case 3253:
case 4048:
case 1486:
case 215:
case 3969:
case 920:
case 3227:
case 3839:
case 2265:
case 2850:
case 2126:
case 4078:
case 1567:
case 450:
case 1270:
case 2777:
case 223:
case 1188:
case 2714:
case 3133:
case 2895:
case 662:
case 3404:
case 3554:
case 2002:
case 2747:
case 1694:
case 2046:
case 2620:
case 3205:
case 3811:
case 2357:
case 4091:
case 1810:
case 924:
case 2725:
case 557:
case 3382:
case 454:
case 460:
case 2808:
case 2721:
case 732:
case 111:
case 1293:
case 1200:
case 3658:
case 1627:
case 3450:
case 2761:
case 736:
case 84:
case 2162:
case 2439:
case 3343:
case 3670:
case 3478:
case 23:
case 1473:
case 2765:
case 3864:
case 3448:
case 949:
case 3640:
case 970:
case 3727:
case 1758:
case 1598:
case 853:
case 3106:
case 2844:
case 1505:
case 1902:
case 1254:
case 2874:
case 1671:
case 3775:
case 1451:
case 3142:
case 1501:
case 3741:
case 3897:
case 666:
case 1009:
case 751:
case 4017:
case 1949:
case 3260:
case 2344:
case 2933:
case 1042:
case 962:
case 3607:
case 2594:
case 1520:
case 3109:
case 1006:
case 2374:
case 1707:
case 4063:
case 798:
case 2436:
case 891:
case 786:
case 3843:
case 2270:
case 1126:
case 199:
case 3029:
case 1464:
case 793:
case 3873:
case 3364:
case 2486:
case 40:
case 1310:
case 2553:
case 2490:
case 2698:
case 301:
case 3962:
case 3713:
case 3410:
case 1221:
case 2184:
case 1718:
case 1613:
case 2308:
case 3832:
case 2527:
case 3565:
case 2972:
case 363:
case 1415:
case 4023:
case 2079:
case 2575:
case 2391:
case 572:
case 1411:
case 3088:
case 2942:
case 1560:
case 1277:
case 2541:
case 368:
case 635:
case 3966:
case 1489:
case 2653:
case 1765:
case 1162:
case 2443:
case 2740:
case 2378:
case 2627:
case 3836:
case 2350:
case 677:
case 1874:
case 1363:
case 2671:
case 2254:
case 526:
case 2645:
case 3463:
case 747:
case 2455:
case 2641:
case 1660:
case 1468:
case 3368:
case 426:
case 1207:
case 1620:
case 952:
case 2694:
case 3677:
case 422:
case 2138:
case 3614:
case 1323:
case 1714:
case 123:
case 1076:
case 1002:
case 3647:
case 3720:
case 3149:
case 729:
case 3423:
case 522:
case 3625:
case 1808:
case 985:
case 541:
case 3213:
case 681:
case 3034:
case 2293:
case 441:
case 2810:
case 620:
case 3621:
case 1218:
case 2100:
case 3113:
case 2953:
case 3965:
case 2927:
case 280:
case 1766:
case 400:
case 610:
case 2238:
case 118:
case 2602:
case 2456:
case 3279:
case 602:
case 1830:
case 2572:
case 2945:
case 1880:
case 1412:
case 2392:
case 512:
case 719:
case 2646:
case 2020:
case 1094:
case 113:
case 3312:
case 2419:
case 1075:
case 246:
case 2994:
case 2533:
case 516:
case 2060:
case 3709:
case 3977:
case 1896:
case 2154:
case 3914:
case 74:
case 836:
case 416:
case 1107:
case 1579:
case 3947:
case 2887:
case 3925:
case 1027:
case 851:
case 347:
case 1053:
case 3522:
case 3626:
case 1262:
case 67:
case 2837:
case 3921:
case 159:
case 1892:
case 803:
case 1649:
case 992:
case 3907:
case 2683:
case 1177:
case 3359:
case 3749:
case 1509:
case 1459:
case 1001:
case 3093:
case 768:
case 2234:
case 861:
case 271:
case 1121:
case 2769:
case 3000:
case 2431:
case 340:
case 379:
case 169:
case 1266:
case 3526:
case 3622:
case 2170:
case 3437:
case 2158:
case 1337:
case 614:
case 3918:
case 125:
case 287:
case 1913:
case 62:
case 3487:
case 407:
case 2672:
case 2452:
case 2606:
case 3054:
case 9:
case 2396:
case 386:
case 2905:
case 988:
case 2609:
case 3272:
case 2107:
case 2045:
case 933:
case 3538:
case 3206:
case 2920:
case 2399:
case 3816:
case 2075:
case 146:
case 336:
case 2896:
case 1154:
case 938:
case 847:
case 865:
case 1229:
case 1837:
case 490:
case 1887:
case 237:
case 2726:
case 2118:
case 1784:
case 180:
case 1927:
case 1193:
case 92:
case 1734:
case 1953:
case 917:
case 3940:
case 121:
case 45:
case 3776:
case 683:
case 2960:
case 3077:
case 1392:
case 142:
case 3014:
case 332:
case 213:
case 3702:
case 1020:
case 3233:
case 3492:
case 3101:
case 543:
case 3746:
case 3047:
case 1238:
case 3859:
case 6:
case 1971:
case 443:
case 696:
case 1676:
case 3356:
case 1729:
case 2161:
case 187:
case 2913:
case 2762:
case 56:
case 3993:
case 3584:
case 1998:
case 2226:
case 184:
case 1170:
case 2337:
case 910:
case 3629:
case 3706:
case 3145:
case 3007:
case 1642:
case 1899:
case 1905:
case 3772:
case 3171:
case 1576:
case 886:
case 3175:
case 898:
case 3742:
case 1606:
case 2679:
case 2114:
case 1788:
case 3202:
case 3733:
case 2177:
case 3638:
case 2001:
case 303:
case 2649:
case 1380:
case 2005:
case 2892:
case 4092:
case 3812:
case 2266:
case 1435:
case 840:
case 269:
case 3018:
case 361:
case 2098:
case 3335:
case 3669:
case 171:
case 3385:
case 594:
case 1485:
case 1013:
case 1431:
case 1815:
case 1133:
case 828:
case 721:
case 3304:
case 1554:
case 1794:
case 2647:
case 2720:
case 2149:
case 672:
case 2457:
case 2507:
case 3694:
case 1183:
case 780:
case 2328:
case 3138:
case 2179:
case 2084:
case 4003:
case 1382:
case 449:
case 1824:
case 311:
case 689:
case 3169:
case 1332:
case 2213:
case 3667:
case 3200:
case 2034:
case 570:
case 3432:
case 3443:
case 2665:
case 524:
case 2339:
case 1934:
case 3129:
case 1500:
case 4036:
case 1658:
case 960:
case 3627:
case 957:
case 1670:
case 83:
case 2886:
case 2966:
case 424:
case 939:
case 3348:
case 2389:
case 954:
case 1448:
case 24:
case 2661:
case 258:
case 1745:
case 3455:
case 676:
case 1771:
case 1775:
case 3671:
case 3254:
case 253:
case 3501:
case 3451:
case 3184:
case 1798:
case 950:
case 1408:
case 1693:
case 520:
case 3403:
case 1540:
case 3700:
case 964:
case 3490:
case 481:
case 2324:
case 2713:
case 1390:
case 309:
case 2618:
case 2088:
case 2220:
case 2311:
case 771:
case 3541:
case 1102:
case 878:
case 3605:
case 1146:
case 3601:
case 1495:
case 3823:
case 3972:
case 622:
case 3906:
case 3079:
case 2038:
case 3395:
case 1271:
case 1938:
case 3863:
case 2851:
case 626:
case 1474:
case 1417:
case 2514:
case 4055:
case 2260:
case 2607:
case 2855:
case 1988:
case 2109:
case 535:
case 38:
case 2922:
case 191:
case 477:
case 1969:
case 574:
case 3436:
case 3258:
case 474:
case 3270:
case 577:
case 1336:
case 667:
case 3489:
case 4064:
case 3765:
case 2373:
case 2864:
case 650:
case 2448:
case 2026:
case 2984:
case 2727:
case 1389:
case 2658:
case 2500:
case 3761:
case 2934:
case 485:
case 2343:
case 2670:
case 1836:
case 3513:
case 3817:
case 3363:
case 3874:
case 552:
case 759:
case 775:
case 2351:
case 1463:
case 2741:
case 153:
case 452:
case 3660:
case 3468:
case 2172:
case 2355:
case 737:
case 922:
case 1368:
case 3891:
case 3747:
case 1507:
case 3428:
case 3620:
case 926:
case 3357:
case 2183:
case 1677:
case 323:
case 3076:
case 3909:
case 3323:
case 3714:
case 556:
case 2815:
case 2133:
case 1423:
case 1149:
case 3895:
case 2404:
case 2794:
case 1647:
case 69:
case 1213:
case 3808:
case 3721:
case 195:
case 713:
case 1034:
case 531:
case 1084:
case 4024:
case 3725:
case 2824:
case 1803:
case 2767:
case 1260:
case 1514:
case 4068:
case 1109:
case 2444:
case 2988:
case 3042:
case 466:
case 1607:
case 2654:
case 1547:
case 3707:
case 3006:
case 2417:
case 2245:
case 566:
case 2474:
case 1397:
case 2839:
case 3878:
case 2336:
case 1525:
case 3126:
case 4039:
case 88:
case 2386:
case 1521:
case 3848:
case 4089:
case 2253:
case 2969:
case 1922:
case 1364:
case 1873:
case 101:
case 1069:
case 2540:
case 1561:
case 3310:
case 1882:
case 2303:
case 1618:
case 2929:
case 90:
case 1962:
case 1713:
case 1832:
case 2570:
case 3718:
case 3225:
case 3166:
case 2408:
case 654:
case 2558:
case 976:
case 163:
case 2495:
case 378:
case 3083:
case 562:
case 769:
case 1220:
case 4028:
case 2102:
case 168:
case 2491:
case 2701:
case 3560:
case 373:
case 462:
case 1311:
case 3005:
case 208:
case 3147:
case 4:
case 3892:
case 643:
case 488:
case 1907:
case 182:
case 496:
case 3114:
case 648:
case 5:
case 2733:
case 2954:
case 2430:
case 596:
case 3001:
case 1120:
case 1856:
case 203:
case 3459:
case 1749:
case 3509:
case 1000:
case 330:
case 907:
case 65:
case 3266:
case 369:
case 778:
case 3125:
case 1622:
case 1526:
case 2669:
case 690:
case 1437:
case 3337:
case 887:
case 1566:
case 2629:
case 3387:
case 3161:
case 3762:
case 1487:
case 2900:
case 2352:
case 2175:
case 1160:
case 2141:
case 3416:
case 198:
case 186:
case 2529:
case 697:
case 1562:
case 1961:
case 1113:
case 1835:
case 3118:
case 1885:
case 1965:
case 2634:
case 2198:
case 2025:
case 3067:
case 3766:
case 2970:
case 2746:
case 2859:
case 916:
case 2283:
case 3830:
case 2356:
case 2776:
case 2077:
case 3880:
case 2014:
case 313:
case 2233:
case 2588:
case 3920:
case 3399:
case 3075:
case 3041:
case 3896:
case 2319:
case 1499:
case 1709:
case 3609:
case 2272:
case 912:
case 1852:
case 846:
case 73:
case 2206:
case 3579:
case 1070:
case 66:
case 165:
case 147:
case 3027:
case 900:
case 1626:
case 251:
case 2061:
case 334:
case 375:
case 1921:
case 144:
case 3262:
case 3140:
case 387:
case 3729:
case 47:
case 1900:
case 1534:
case 2437:
case 3998:
case 1584:
case 1629:
case 3158:
case 1127:
case 616:
case 2316:
case 1145:
case 1496:
case 1007:
case 3642:
case 4019:
case 3396:
case 2819:
case 1171:
case 286:
case 298:
case 1352:
case 1175:
case 3576:
case 3606:
case 1742:
case 2054:
case 1430:
case 502:
case 1638:
case 4056:
case 3683:
case 1954:
case 3788:
case 1202:
case 2120:
case 612:
case 402:
case 3380:
case 1480:
case 1812:
case 2907:
case 1783:
case 3738:
case 1335:
case 2526:
case 1669:
case 3284:
case 1167:
case 410:
case 1381:
case 830:
case 3234:
case 3769:
case 3431:
case 240:
case 279:
case 2852:
case 2947:
case 3583:
case 943:
case 4052:
case 346:
case 3994:
case 1588:
case 1816:
case 2709:
case 1061:
case 151:
case 2522:
case 244:
case 837:
case 859:
case 875:
case 52:
case 3887:
case 2925:
case 2070:
case 1065:
case 247:
case 1634:
case 3927:
case 990:
case 1958:
case 1970:
case 4085:
case 4081:
case 1529:
case 2666:
case 3193:
case 1684:
case 2881:
case 3269:
case 3734:
case 2961:
case 3941:
case 1776:
case 3646:
case 3020:
case 1492:
case 438:
case 1101:
case 3288:
case 1702:
case 3975:
case 1283:
case 1859:
case 1047:
case 3456:
case 2279:
case 1105:
case 1746:
case 1356:
case 3572:
case 538:
case 3608:
case 937:
case 1825:
case 3550:
case 85:
case 3493:
case 722:
case 529:
case 2710:
case 2085:
case 300:
case 1300:
case 2413:
case 2031:
case 2589:
case 934:
case 3398:
case 429:
case 671:
case 1603:
case 1690:
case 975:
case 959:
case 1821:
case 2624:
case 2568:
case 1405:
case 3156:
case 2916:
case 1795:
case 1555:
case 2257:
case 233:
case 1192:
case 848:
case 1847:
case 1059:
case 3930:
case 1744:
case 3504:
case 2697:
case 1016:
case 1717:
case 913:
case 1774:
case 1248:
case 3037:
case 22:
case 565:
case 4040:
case 687:
case 890:
case 1935:
case 2664:
case 465:
case 1278:
case 1985:
case 684:
case 4070:
case 3243:
case 2870:
case 214:
case 447:
case 3087:
case 3604:
case 2597:
case 183:
case 1180:
case 3517:
case 2347:
case 789:
case 1:
case 202:
case 1012:
case 1291:
case 2314:
case 196:
case 2377:
case 2628:
case 540:
case 3131:
case 3732:
case 772:
case 210:
case 3290:
case 4093:
case 925:
case 3782:
case 3813:
case 1632:
case 1536:
case 621:
case 1467:
case 440:
case 479:
case 2893:
case 3678:
case 3470:
case 2137:
case 2639:
case 27:
case 3236:
case 1643:
case 307:
case 3650:
case 1748:
case 3440:
case 2524:
case 1590:
case 1453:
case 2187:
case 1340:
case 3992:
case 3341:
case 1475:
case 2019:
case 3152:
case 3375:
case 2763:
case 3099:
case 646:
case 1196:
case 493:
case 2854:
case 3371:
case 1445:
case 70:
case 1217:
case 1471:
case 598:
case 3345:
case 1956:
case 3407:
case 3841:
case 1528:
case 1307:
case 2774:
case 3268:
case 816:
case 2717:
case 2016:
case 1263:
case 2744:
case 1697:
case 3845:
case 2985:
case 390:
case 3827:
case 2278:
case 3764:
case 2931:
case 2636:
case 4061:
case 1664:
case 117:
case 3289:
case 2935:
case 921:
case 1840:
case 3610:
case 1035:
case 1589:
case 2821:
case 2708:
case 1624:
case 2498:
case 2690:
case 3937:
case 2603:
case 35:
case 3987:
case 2300:
case 1413:
case 4025:
case 1085:
case 1710:
case 1539:
case 3030:
case 1223:
case 4047:
case 3112:
case 1615:
case 2204:
case 2952:
case 2791:
case 739:
case 2192:
case 2795:
case 2555:
case 2405:
case 4077:
case 348:
case 4014:
case 812:
case 3715:
case 1257:
case 2877:
case 36:
case 2503:
case 807:
case 637:
case 2750:
case 3264:
case 3510:
case 1365:
case 1137:
case 2358:
case 2748:
case 2427:
case 675:
case 17:
case 2196:
case 3663:
case 3768:
case 3116:
case 2956:
case 1019:
case 750:
case 2475:
case 106:
case 1460:
case 292:
case 2807:
case 1912:
case 1763:
case 102:
case 3320:
case 2:
case 2130:
case 3657:
case 1420:
case 503:
case 2494:
case 288:
case 1314:
case 3159:
case 1723:
case 2919:
case 508:
case 1056:
case 3447:
case 3728:
case 403:
case 79:
case 2180:
case 2536:
case 2208:
case 561:
case 2467:
case 3425:
case 1800:
case 3421:
case 3898:
case 1564:
case 2586:
case 2682:
case 3224:
case 39:
case 1366:
case 2384:
case 1989:
case 2108:
case 181:
case 2973:
case 2334:
case 3124:
case 3587:
case 889:
case 1110:
case 2943:
case 3963:
case 3111:
case 1838:
case 2402:
case 2792:
case 2552:
case 2230:
case 623:
case 2280:
case 1968:
case 1516:
case 1612:
case 872:
case 3842:
case 3197:
case 2068:
case 3699:
case 2117:
case 2174:
case 2619:
case 3923:
case 3309:
case 1409:
case 1051:
case 367:
case 1043:
case 135:
case 80:
case 63:
case 1287:
case 3050:
case 3078:
case 2039:
case 364:
case 2581:
case 2089:
case 2535:
case 1326:
case 3048:
case 1237:
case 2862:
case 177:
case 256:
case 2730:
case 2011:
case 2433:
case 3349:
case 2388:
case 3759:
case 1123:
case 1449:
case 2104:
case 3091:
case 1157:
case 75:
case 822:
case 3128:
case 3379:
case 1659:
case 1479:
case 3876:
case 2685:
case 2631:
case 2936:
case 748:
case 2866:
case 2986:
case 2635:
case 2369:
case 1322:
case 1964:
case 4066:
case 354:
case 170:
case 2150:
case 2826:
case 124:
case 2064:
case 2990:
case 1787:
case 1924:
case 3139:
case 2178:
case 4026:
case 1737:
case 3189:
case 1036:
case 127:
case 3687:
case 911:
case 11:
case 405:
case 615:
case 826:
case 2406:
case 2097:
case 1915:
case 2556:
case 2472:
case 252:
case 1616:
case 1163:
case 2442:
case 790:
case 3719:
case 376:
case 1144:
case 2409:
case 2559:
case 2799:
case 1068:
case 707:
case 166:
case 1619:
case 2928:
case 1296:
case 1117:
case 2326:
case 3136:
case 1089:
case 845:
case 850:
case 1862:
case 277:
case 2237:
case 30:
case 2829:
case 1585:
case 3231:
case 501:
case 1334:
case 1943:
case 2032:
case 2110:
case 3950:
case 2082:
case 611:
case 389:
case 999:
case 4069:
case 3281:
case 281:
case 1973:
case 2869:
case 915:
case 2989:
case 1280:
case 3692:
case 3849:
case 2612:
case 162:
case 1955:
case 3346:
case 3302:
case 2838:
case 3023:
case 1792:
case 1191:
case 1402:
case 3908:
case 2036:
case 68:
case 21:
case 3143:
case 1064:
case 1826:
case 1150:
case 1903:
case 1178:
case 2362:
case 44:
case 2086:
case 2924:
case 716:
case 1990:
case 2299:
case 3342:
case 2616:
case 2512:
case 326:
case 2911:
case 553:
case 3752:
case 3696:
case 2163:
case 3151:
case 2915:
case 1556:
case 1796:
case 1406:
case 1652:
case 923:
case 1472:
case 2157:
case 1338:
case 3438:
case 3256:
case 2479:
case 1780:
case 1015:
case 1433:
case 3944:
case 3680:
case 1519:
case 2449:
case 3333:
case 1388:
case 2123:
case 93:
case 1024:
case 4084:
case 1866:
case 2003:
case 860:
case 270:
case 3010:
case 3735:
case 2834:
case 854:
case 1685:
case 419:
case 2623:
case 993:
case 2447:
case 2801:
case 1574:
case 3295:
case 802:
case 3291:
case 4005:
case 2477:
case 3130:
case 2657:
case 1544:
case 3704:
case 3494:
case 388:
case 396:
case 2421:
case 294:
case 2898:
case 1290:
case 3586:
case 2224:
case 1732:
case 1131:
case 3536:
case 1135:
case 297:
case 1782:
case 1367:
case 1181:
case 651:
case 1773:
case 425:
case 2789:
case 1327:
case 1508:
case 3748:
case 955:
case 979:
case 940:
case 3427:
case 3370:
case 1650:
case 2465:
case 525:
case 3453:
case 26:
case 3590:
case 1440:
case 1648:
case 3673:
case 104:
case 2510:
case 3244:
case 1992:
case 1099:
case 3807:
case 982:
case 3441:
case 1375:
case 1595:
case 3217:
case 3196:
case 3445:
case 3274:
case 2116:
case 3471:
case 1345:
case 1703:
case 1550:
case 1790:
case 1608:
case 1400:
case 3300:
case 4067:
case 100:
case 3573:
case 1398:
case 3821:
case 3498:
case 944:
case 3690:
case 25:
case 833:
case 2228:
case 2715:
case 1996:
case 4094:
case 603:
case 1305:
case 2030:
case 838:
case 418:
case 1301:
case 2112:
case 112:
case 3952:
case 3059:
case 3551:
case 3791:
case 3401:
case 1251:
case 4045:
case 1674:
case 1504:
case 2845:
case 1454:
case 1930:
case 4075:
case 2407:
case 2841:
case 4041:
case 2875:
case 3717:
case 537:
case 434:
case 3686:
case 4053:
case 2853:
case 475:
case 3861:
case 2289:
case 3981:
case 3985:
case 534:
case 2827:
case 3865:
case 3278:
case 437:
case 2764:
case 3931:
case 3250:
case 575:
case 4027:
case 3532:
case 1243:
case 3636:
case 2286:
case 2743:
case 484:
case 1461:
case 16:
case 1739:
case 2353:
case 204:
case 3361:
case 961:
case 1264:
case 3689:
case 584:
case 1789:
case 2470:
case 2327:
case 3137:
case 2773:
case 3639:
case 37:
case 2650:
case 2508:
case 3854:
case 2371:
case 892:
case 2595:
case 2755:
case 1297:
case 3515:
case 1116:
case 908:
case 774:
case 306:
case 2375:
case 2099:
case 3668:
case 2394:
case 1999:
case 1414:
case 720:
case 1159:
case 1211:
case 1805:
case 3420:
case 3628:
case 1728:
case 3597:
case 3056:
case 1447:
case 2517:
case 2181:
case 2782:
case 2813:
case 2135:
case 471:
case 3325:
case 3800:
case 194:
case 1898:
case 3210:
case 1421:
case 2131:
case 3321:
case 1224:
case 3528:
case 1096:
case 446:
case 693:
case 4060:
case 727:
case 1268:
case 1875:
case 932:
case 3307:
case 2674:
case 2119:
case 2504:
case 698:
case 1764:
case 1239:
case 190:
case 2243:
case 3870:
case 314:
case 2087:
case 2736:
case 317:
case 1853:
case 3664:
case 3589:
case 2398:
case 580:
case 3035:
case 3081:
case 1610:
case 1418:
case 15:
case 3318:
case 679:
case 655:
case 3624:
case 2282:
case 1313:
case 1724:
case 2608:
case 2400:
case 2790:
case 480:
case 2232:
case 3085:
case 3413:
case 3031:
case 212:
case 770:
case 2301:
case 1030:
case 749:
case 2695:
case 682:
case 1563:
case 3568:
case 442:
case 2691:
case 3916:
case 2820:
case 4020:
case 1228:
case 1715:
case 2996:
case 1349:
case 2680:
case 222:
case 3449:
case 1379:
case 3659:
case 2974:
case 856:
case 1876:
case 2630:
case 3997:
case 3479:
case 411:
case 831:
case 3834:
case 738:
case 2781:
case 160:
case 905:
case 1422:
case 3090:
case 241:
case 2469:
case 511:
case 139:
case 3003:
case 154:
case 370:
case 2010:
case 733:
case 3322:
case 1462:
case 324:
case 3086:
case 3362:
case 3924:
case 885:
case 1139:
case 1189:
case 327:
case 717:
case 72:
case 852:
case 1017:
case 4009:
case 2995:
case 1074:
case 2342:
case 2219:
case 1044:
case 3911:
case 2696:
case 695:
case 3366:
case 2484:
case 1537:
case 2281:
case 381:
case 991:
case 409:
case 2978:
case 2285:
case 2190:
case 509:
case 2950:
case 1883:
case 710:
case 2302:
case 1259:
case 2879:
case 1111:
case 272:
case 862:
case 1963:
case 2023:
case 2376:
case 2756:
case 2596:
case 2057:
case 2692:
case 2849:
case 1115:
case 1833:
case 3968:
case 2346:
case 1699:
case 77:
case 1842:
case 2580:
case 1957:
case 658:
case 2904:
case 2530:
case 866:
case 3051:
case 3409:
case 58:
case 1164:
case 167:
case 374:
case 706:
case 2186:
case 1078:
case 3073:
case 20:
case 3829:
case 1426:
case 995:
case 1908:
case 2687:
case 1173:
case 919:
case 3148:
case 691:
case 824:
case 3826:
case 1429:
case 81:
case 2462:
case 1143:
case 3329:
case 3178:
case 827:
case 3903:
case 1991:
case 3442:
case 1592:
case 126:
case 1219:
case 2168:
case 1372:
case 3556:
case 3796:
case 3472:
case 2074:
case 2716:
case 2017:
case 3338:
case 423:
case 1974:
case 3015:
case 1256:
case 3780:
case 1438:
case 4002:
case 3483:
case 3519:
case 3730:
case 1944:
case 1488:
case 3292:
case 3433:
case 1333:
case 428:
case 2846:
case 2091:
case 239:
case 1469:
case 3635:
case 94:
case 1731:
case 1010:
case 3681:
case 254:
case 1182:
case 260:
case 3685:
case 3631:
case 2008:
case 257:
case 1530:
case 1719:
case 3144:
case 4072:
case 2216:
case 2699:
case 3117:
case 1580:
case 3296:
case 3619:
case 4042:
case 874:
case 1136:
case 3535:
case 605:
case 2426:
case 3862:
case 267:
case 792:
case 3932:
case 515:
case 2078:
case 245:
case 250:
case 3585:
case 881:
case 788:
case 2587:
case 7:
case 3943:
case 2537:
case 1484:
case 3384:
case 2466:
case 1235:
case 3108:
case 1281:
case 783:
case 3973:
case 4033:
case 3028:
case 1057:
case 1756:
case 1596:
case 3280:
case 2833:
case 3951:
case 2963:
case 2712:
case 1879:
case 2883:
case 1376:
case 4083:
case 3402:
case 3792:
case 573:
case 3230:
case 1023:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746180001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,];
var gg_b = "1746180001/";

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
