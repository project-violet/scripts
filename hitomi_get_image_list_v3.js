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
var o = 1;
switch (g) {
case 1394:
case 871:
case 2682:
case 1074:
case 149:
case 1470:
case 3679:
case 305:
case 2315:
case 2673:
case 2343:
case 641:
case 974:
case 1212:
case 2195:
case 2616:
case 4067:
case 2749:
case 1448:
case 2300:
case 1871:
case 1230:
case 2990:
case 3921:
case 2966:
case 1521:
case 200:
case 1114:
case 3197:
case 3406:
case 39:
case 2717:
case 1319:
case 1874:
case 3924:
case 665:
case 96:
case 385:
case 1524:
case 2138:
case 148:
case 1901:
case 2456:
case 1296:
case 2936:
case 570:
case 3501:
case 1199:
case 4037:
case 3418:
case 1260:
case 1745:
case 1713:
case 535:
case 3242:
case 2593:
case 2357:
case 3944:
case 3599:
case 1101:
case 2938:
case 1298:
case 45:
case 3233:
case 947:
case 0:
case 1634:
case 2239:
case 1544:
case 1778:
case 2479:
case 3124:
case 1661:
case 3307:
case 923:
case 281:
case 1867:
case 2180:
case 1703:
case 2362:
case 3997:
case 3482:
case 1597:
case 3222:
case 3757:
case 571:
case 3839:
case 2190:
case 3121:
case 2618:
case 2269:
case 2305:
case 1446:
case 449:
case 3263:
case 2995:
case 735:
case 2968:
case 972:
case 2166:
case 2323:
case 473:
case 1327:
case 1288:
case 2822:
case 3355:
case 3941:
case 2729:
case 1837:
case 926:
case 1475:
case 1989:
case 2606:
case 321:
case 3705:
case 2332:
case 1541:
case 1249:
case 2819:
case 2534:
case 3548:
case 3638:
case 2374:
case 2081:
case 3813:
case 247:
case 2712:
case 868:
case 2466:
case 1015:
case 2490:
case 3281:
case 419:
case 1146:
case 359:
case 2697:
case 784:
case 1175:
case 2884:
case 2891:
case 1970:
case 3247:
case 4010:
case 130:
case 981:
case 3876:
case 199:
case 1926:
case 3330:
case 3774:
case 1404:
case 3695:
case 272:
case 557:
case 2881:
case 2796:
case 3045:
case 3918:
case 2956:
case 582:
case 2213:
case 198:
case 2564:
case 3668:
case 2158:
case 1401:
case 1800:
case 2641:
case 2531:
case 4062:
case 2084:
case 2371:
case 1506:
case 3020:
case 2091:
case 2276:
case 663:
case 654:
case 769:
case 1672:
case 306:
case 3291:
case 3076:
case 3424:
case 901:
case 3284:
case 3396:
case 2480:
case 3906:
case 274:
case 3737:
case 1573:
case 1508:
case 3025:
case 1057:
case 1411:
case 3973:
case 925:
case 3497:
case 3078:
case 62:
case 2225:
case 2979:
case 1582:
case 2485:
case 498:
case 3118:
case 702:
case 836:
case 2259:
case 1654:
case 1499:
case 900:
case 2798:
case 1062:
case 3253:
case 802:
case 736:
case 652:
case 1322:
case 997:
case 3040:
case 3916:
case 2958:
case 2240:
case 1739:
case 367:
case 2337:
case 2156:
case 2765:
case 687:
case 3528:
case 1651:
case 1005:
case 1170:
case 1975:
case 2788:
case 26:
case 1857:
case 1023:
case 3441:
case 2809:
case 2702:
case 1363:
case 3575:
case 3767:
case 4000:
case 131:
case 3636:
case 2027:
case 3840:
case 1769:
case 1946:
case 1010:
case 430:
case 1255:
case 639:
case 1592:
case 3388:
case 833:
case 3859:
case 607:
case 3969:
case 1899:
case 2287:
case 2328:
case 3295:
case 2963:
case 777:
case 1410:
case 3268:
case 2095:
case 1569:
case 2375:
case 2613:
case 2535:
case 1432:
case 2645:
case 4004:
case 266:
case 315:
case 1272:
case 623:
case 2676:
case 3775:
case 1423:
case 1967:
case 544:
case 3684:
case 3728:
case 2620:
case 2885:
case 3691:
case 1174:
case 1283:
case 742:
case 1099:
case 828:
case 2565:
case 2777:
case 1462:
case 1379:
case 1539:
case 1649:
case 83:
case 1293:
case 2933:
case 3044:
case 672:
case 2895:
case 2038:
case 2453:
case 1171:
case 2598:
case 1782:
case 3425:
case 1937:
case 2297:
case 1457:
case 3403:
case 254:
case 3537:
case 2922:
case 1356:
case 744:
case 3280:
case 2484:
case 1137:
case 238:
case 3420:
case 1251:
case 844:
case 1706:
case 3476:
case 1804:
case 3364:
case 3571:
case 1718:
case 2419:
case 3413:
case 3236:
case 3445:
case 4011:
case 3821:
case 378:
case 1971:
case 2890:
case 3627:
case 1001:
case 252:
case 2133:
case 577:
case 3574:
case 3609:
case 2678:
case 2603:
case 343:
case 4014:
case 2586:
case 3824:
case 1974:
case 3726:
case 2625:
case 66:
case 2880:
case 965:
case 155:
case 1004:
case 290:
case 239:
case 2481:
case 2326:
case 2163:
case 207:
case 2221:
case 2494:
case 1254:
case 2659:
case 3169:
case 2090:
case 1152:
case 1443:
case 2734:
case 1801:
case 3361:
case 3748:
case 2530:
case 2879:
case 3808:
case 1741:
case 2314:
case 3873:
case 241:
case 1923:
case 1467:
case 1028:
case 594:
case 3882:
case 2783:
case 3523:
case 2555:
case 1452:
case 1143:
case 952:
case 453:
case 750:
case 3383:
case 1910:
case 850:
case 4026:
case 600:
case 2181:
case 3532:
case 2463:
case 4070:
case 3372:
case 3816:
case 1660:
case 3714:
case 3092:
case 3510:
case 2194:
case 3557:
case 3176:
case 2422:
case 265:
case 2909:
case 3073:
case 1828:
case 3978:
case 2399:
case 2184:
case 1437:
case 1875:
case 1503:
case 1957:
case 1578:
case 3711:
case 2191:
case 3279:
case 3120:
case 1630:
case 1540:
case 3959:
case 2311:
case 360:
case 1846:
case 47:
case 2216:
case 2953:
case 1277:
case 1612:
case 2507:
case 3799:
case 892:
case 1385:
case 2119:
case 3016:
case 3258:
case 907:
case 3892:
case 939:
case 792:
case 2793:
case 1962:
case 2153:
case 3663:
case 2442:
case 1513:
case 2056:
case 1848:
case 2218:
case 1380:
case 3913:
case 3018:
case 712:
case 3945:
case 2919:
case 812:
case 2109:
case 17:
case 396:
case 1826:
case 991:
case 189:
case 3976:
case 1870:
case 1231:
case 894:
case 1576:
case 361:
case 2206:
case 1157:
case 2984:
case 3125:
case 1336:
case 156:
case 966:
case 1602:
case 1721:
case 188:
case 2550:
case 1110:
case 1915:
case 617:
case 2856:
case 1234:
case 2994:
case 3818:
case 240:
case 1665:
case 2127:
case 2981:
case 514:
case 137:
case 164:
case 1366:
case 963:
case 1026:
case 393:
case 1105:
case 751:
case 851:
case 323:
case 55:
case 1817:
case 286:
case 1200:
case 2570:
case 3561:
case 2774:
case 3697:
case 259:
case 1961:
case 4055:
case 3047:
case 203:
case 3786:
case 2820:
case 3490:
case 1049:
case 135:
case 3081:
case 2548:
case 3534:
case 3819:
case 2192:
case 170:
case 1215:
case 522:
case 3466:
case 3712:
case 347:
case 2813:
case 1243:
case 3220:
case 2424:
case 1931:
case 3179:
case 2291:
case 2076:
case 1017:
case 2108:
case 1451:
case 2906:
case 3480:
case 3084:
case 2182:
case 2360:
case 4007:
case 326:
case 921:
case 3091:
case 283:
case 2020:
case 3213:
case 3436:
case 3158:
case 1849:
case 1614:
case 3760:
case 3564:
case 2771:
case 2116:
case 258:
case 1964:
case 2045:
case 3894:
case 3687:
case 3438:
case 822:
case 3958:
case 4017:
case 3240:
case 748:
case 3577:
case 2059:
case 2666:
case 848:
case 267:
case 1262:
case 1558:
case 3798:
case 1164:
case 1855:
case 2253:
case 1977:
case 776:
case 2078:
case 2497:
case 3009:
case 2106:
case 1722:
case 1257:
case 2973:
case 2908:
case 876:
case 1829:
case 2003:
case 3979:
case 2398:
case 3203:
case 2737:
case 2365:
case 9:
case 1579:
case 1339:
case 60:
case 2752:
case 2388:
case 2487:
case 1134:
case 2636:
case 3735:
case 1807:
case 627:
case 1210:
case 1601:
case 3468:
case 3027:
case 849:
case 2441:
case 3809:
case 1369:
case 2575:
case 2767:
case 643:
case 1029:
case 3702:
case 873:
case 3624:
case 1223:
case 679:
case 36:
case 3788:
case 985:
case 3352:
case 3966:
case 484:
case 1030:
case 397:
case 1896:
case 1781:
case 731:
case 1012:
case 3554:
case 3168:
case 831:
case 3750:
case 300:
case 220:
case 3616:
case 3842:
case 1566:
case 133:
case 3990:
case 3300:
case 3749:
case 1860:
case 205:
case 3343:
case 3673:
case 1172:
case 2418:
case 1096:
case 2501:
case 102:
case 660:
case 2242:
case 1536:
case 1646:
case 2317:
case 1193:
case 718:
case 1320:
case 3138:
case 3456:
case 1060:
case 285:
case 3551:
case 1791:
case 1886:
case 1628:
case 1345:
case 29:
case 2197:
case 1313:
case 575:
case 2924:
case 3185:
case 1431:
case 1951:
case 104:
case 1359:
case 1585:
case 169:
case 696:
case 2222:
case 1709:
case 1340:
case 2408:
case 3479:
case 1670:
case 2511:
case 661:
case 2997:
case 986:
case 21:
case 381:
case 3707:
case 2416:
case 1993:
case 1098:
case 2869:
case 1648:
case 1538:
case 3593:
case 531:
case 2039:
case 3136:
case 3938:
case 798:
case 2599:
case 2944:
case 983:
case 221:
case 2705:
case 3606:
case 1267:
case 3572:
case 4030:
case 775:
case 4012:
case 875:
case 1983:
case 799:
case 932:
case 2723:
case 2589:
case 1972:
case 730:
case 94:
case 645:
case 1002:
case 3583:
case 899:
case 830:
case 2941:
case 3968:
case 1898:
case 958:
case 2329:
case 317:
case 1252:
case 1727:
case 2069:
case 3323:
case 2710:
case 3618:
case 1154:
case 2121:
case 2514:
case 3995:
case 1865:
case 3833:
case 2732:
case 2816:
case 1246:
case 2372:
case 429:
case 3181:
case 1671:
case 2510:
case 2469:
case 2092:
case 1150:
case 3292:
case 1795:
case 3858:
case 978:
case 1149:
case 2383:
case 3783:
case 1488:
case 2789:
case 3147:
case 855:
case 1929:
case 2505:
case 946:
case 6:
case 3772:
case 341:
case 2873:
case 2016:
case 1498:
case 3793:
case 2892:
case 3311:
case 2959:
case 2439:
case 3507:
case 3953:
case 3433:
case 1465:
case 4064:
case 943:
case 2082:
case 442:
case 69:
case 2925:
case 428:
case 1509:
case 2120:
case 2279:
case 979:
case 1117:
case 2393:
case 2978:
case 3282:
case 2073:
case 3301:
case 2920:
case 3991:
case 4077:
case 2125:
case 1667:
case 261:
case 1591:
case 3751:
case 3109:
case 2006:
case 2178:
case 1031:
case 1780:
case 2103:
case 2945:
case 13:
case 1496:
case 2913:
case 142:
case 1324:
case 3153:
case 1834:
case 2159:
case 3218:
case 3056:
case 2701:
case 1460:
case 3947:
case 245:
case 2622:
case 1226:
case 1321:
case 1486:
case 2354:
case 2806:
case 1831:
case 1270:
case 1129:
case 2500:
case 2704:
case 1864:
case 3994:
case 3549:
case 2515:
case 1412:
case 3127:
case 3981:
case 1155:
case 2633:
case 1949:
case 1594:
case 1790:
case 3856:
case 996:
case 1289:
case 450:
case 2684:
case 809:
case 753:
case 764:
case 659:
case 391:
case 3588:
case 4054:
case 737:
case 853:
case 1072:
case 603:
case 709:
case 2691:
case 837:
case 1429:
case 2728:
case 2775:
case 1988:
case 961:
case 1083:
case 215:
case 3241:
case 3095:
case 1214:
case 2268:
case 1563:
case 3287:
case 1130:
case 1455:
case 2552:
case 1935:
case 3963:
case 2295:
case 3427:
case 1112:
case 889:
case 1779:
case 2097:
case 3409:
case 1211:
case 1600:
case 2647:
case 789:
case 354:
case 363:
case 3085:
case 606:
case 1883:
case 756:
case 194:
case 945:
case 64:
case 3142:
case 3038:
case 3895:
case 2044:
case 4051:
case 3598:
case 1160:
case 2939:
case 808:
case 2694:
case 1299:
case 2887:
case 112:
case 3565:
case 1196:
case 562:
case 1373:
case 2440:
case 3868:
case 2238:
case 3036:
case 278:
case 1854:
case 1960:
case 1756:
case 3133:
case 352:
case 2627:
case 2331:
case 1198:
case 3419:
case 1610:
case 588:
case 1306:
case 494:
case 2445:
case 1542:
case 634:
case 2236:
case 2413:
case 2476:
case 1417:
case 246:
case 3122:
case 20:
case 3731:
case 2280:
case 564:
case 32:
case 537:
case 913:
case 114:
case 1623:
case 2420:
case 1662:
case 2021:
case 150:
case 2266:
case 1054:
case 762:
case 2748:
case 3530:
case 3640:
case 1449:
case 4072:
case 3370:
case 1135:
case 3163:
case 3326:
case 339:
case 1912:
case 508:
case 1450:
case 3659:
case 3221:
case 1851:
case 311:
case 1657:
case 28:
case 916:
case 3625:
case 3880:
case 2726:
case 2334:
case 3348:
case 2574:
case 589:
case 243:
case 57:
case 1188:
case 214:
case 1280:
case 3629:
case 1420:
case 3251:
case 2605:
case 3706:
case 146:
case 2318:
case 865:
case 1364:
case 10:
case 2201:
case 2610:
case 292:
case 2996:
case 1413:
case 1445:
case 2632:
case 1139:
case 540:
case 1627:
case 3001:
case 2204:
case 3400:
case 1574:
case 1770:
case 2986:
case 1334:
case 944:
case 143:
case 2188:
case 195:
case 2851:
case 3974:
case 1824:
case 179:
case 1726:
case 2102:
case 3167:
case 2657:
case 415:
case 2135:
case 1653:
case 2912:
case 2450:
case 3254:
case 1169:
case 2054:
case 3607:
case 3415:
case 4041:
case 3152:
case 3443:
case 127:
case 1021:
case 1748:
case 1361:
case 2449:
case 1969:
case 928:
case 93:
case 1295:
case 635:
case 443:
case 495:
case 942:
case 1552:
case 1844:
case 1268:
case 1746:
case 3617:
case 2083:
case 1567:
case 565:
case 2186:
case 3089:
case 3811:
case 1041:
case 1684:
case 2289:
case 1691:
case 1728:
case 2072:
case 2615:
case 2407:
case 3716:
case 977:
case 2643:
case 2533:
case 3379:
case 2093:
case 2308:
case 1440:
case 3649:
case 2965:
case 1939:
case 3171:
case 2382:
case 2160:
case 1459:
case 2883:
case 1285:
case 3937:
case 541:
case 1425:
case 294:
case 2211:
case 1841:
case 2600:
case 1097:
case 478:
case 1478:
case 1403:
case 2872:
case 1647:
case 1537:
case 3773:
case 3635:
case 416:
case 4073:
case 3264:
case 507:
case 2460:
case 2834:
case 1913:
case 2652:
case 4082:
case 2064:
case 2107:
case 1351:
case 228:
case 854:
case 604:
case 3724:
case 3520:
case 196:
case 2917:
case 2031:
case 3688:
case 1976:
case 2780:
case 3826:
case 2667:
case 3157:
case 161:
case 951:
case 356:
case 2790:
case 3698:
case 3721:
case 3110:
case 2949:
case 2594:
case 668:
case 3132:
case 3915:
case 2034:
case 2430:
case 3234:
case 810:
case 2248:
case 3665:
case 1633:
case 1543:
case 2412:
case 413:
case 552:
case 710:
case 52:
case 791:
case 684:
case 2547:
case 3366:
case 538:
case 1704:
case 2270:
case 309:
case 2129:
case 1500:
case 994:
case 193:
case 145:
case 2061:
case 3105:
case 4092:
case 1354:
case 866:
case 2321:
case 3467:
case 1505:
case 3028:
case 2275:
case 711:
case 2228:
case 3100:
case 563:
case 3395:
case 3696:
case 3143:
case 362:
case 2795:
case 3932:
case 682:
case 3115:
case 3046:
case 2149:
case 3910:
case 1383:
case 2877:
case 657:
case 1642:
case 1532:
case 2955:
case 739:
case 633:
case 2246:
case 445:
case 890:
case 1714:
case 2768:
case 2341:
case 2150:
case 2671:
case 839:
case 1176:
case 1903:
case 1557:
case 116:
case 1008:
case 1393:
case 1073:
case 1978:
case 3875:
case 591:
case 838:
case 3957:
case 4018:
case 244:
case 3503:
case 1711:
case 2509:
case 1120:
case 3338:
case 1279:
case 2738:
case 3630:
case 1439:
case 1959:
case 3744:
case 2465:
case 1562:
case 496:
case 752:
case 2077:
case 887:
case 1799:
case 1940:
case 1016:
case 787:
case 1145:
case 2553:
case 2907:
case 2397:
case 1113:
case 3962:
case 935:
case 3852:
case 2325:
case 642:
case 1599:
case 3759:
case 1944:
case 1762:
case 2477:
case 2835:
case 970:
case 772:
case 1416:
case 485:
case 2993:
case 2648:
case 2538:
case 3740:
case 3309:
case 3544:
case 1511:
case 3778:
case 1408:
case 1473:
case 1307:
case 56:
case 2802:
case 3703:
case 3037:
case 1482:
case 2585:
case 1757:
case 269:
case 3725:
case 726:
case 1121:
case 1987:
case 1514:
case 2154:
case 2865:
case 677:
case 1263:
case 3235:
case 2898:
case 268:
case 847:
case 1329:
case 2035:
case 3914:
case 747:
case 1656:
case 2595:
case 1492:
case 2727:
case 3288:
case 574:
case 1355:
case 629:
case 1723:
case 1589:
case 420:
case 2972:
case 1941:
case 823:
case 3989:
case 3837:
case 121:
case 1705:
case 2267:
case 3541:
case 2088:
case 3904:
case 1350:
case 2172:
case 526:
case 3426:
case 3381:
case 2274:
case 3470:
case 1349:
case 105:
case 86:
case 4069:
case 2086:
case 76:
case 373:
case 1743:
case 3212:
case 233:
case 120:
case 1715:
case 257:
case 2954:
case 1921:
case 1187:
case 2434:
case 3230:
case 3871:
case 2896:
case 2030:
case 421:
case 1658:
case 2794:
case 2012:
case 2675:
case 4039:
case 2313:
case 971:
case 2951:
case 3319:
case 1924:
case 2431:
case 2784:
case 35:
case 2580:
case 185:
case 3524:
case 3720:
case 2628:
case 2320:
case 1144:
case 2060:
case 322:
case 3071:
case 3384:
case 3296:
case 2830:
case 2096:
case 2271:
case 1501:
case 202:
case 3260:
case 2719:
case 1418:
case 2536:
case 2376:
case 3713:
case 3805:
case 3333:
case 3573:
case 1982:
case 1209:
case 458:
case 3411:
case 3057:
case 2722:
case 2257:
case 1398:
case 3582:
case 2007:
case 1118:
case 2164:
case 3654:
case 880:
case 1690:
case 3499:
case 4020:
case 1040:
case 1916:
case 2493:
case 3322:
case 406:
case 1444:
case 3810:
case 432:
case 167:
case 2262:
case 3516:
case 2733:
case 44:
case 692:
case 517:
case 933:
case 1666:
case 3005:
case 2161:
case 3651:
case 3229:
case 581:
case 1680:
case 3489:
case 2223:
case 1441:
case 825:
case 3928:
case 1335:
case 2029:
case 3363:
case 3126:
case 319:
case 271:
case 2205:
case 331:
case 1992:
case 459:
case 800:
case 1546:
case 936:
case 700:
case 403:
case 2210:
case 1840:
case 3414:
case 486:
case 3946:
case 1752:
case 3592:
case 1487:
case 1859:
case 3032:
case 3249:
case 1638:
case 817:
case 1548:
case 2243:
case 270:
case 717:
case 1845:
case 2215:
case 3015:
case 3250:
case 3948:
case 3043:
case 1421:
case 2699:
case 3693:
case 235:
case 375:
case 159:
case 3175:
case 103:
case 1820:
case 330:
case 1876:
case 1312:
case 3128:
case 2611:
case 4025:
case 158:
case 1045:
case 612:
case 500:
case 1771:
case 1668:
case 1219:
case 2614:
case 3401:
case 2849:
case 1360:
case 525:
case 3342:
case 984:
case 183:
case 3506:
case 1020:
case 3672:
case 2017:
case 1108:
case 881:
case 1424:
case 2931:
case 1291:
case 1396:
case 2689:
case 1906:
case 434:
case 4059:
case 14:
case 3861:
case 1301:
case 2870:
case 2231:
case 58:
case 2602:
case 624:
case 579:
case 1206:
case 2157:
case 2520:
case 1751:
case 2724:
case 595:
case 3031:
case 4058:
case 527:
case 3107:
case 3064:
case 33:
case 2380:
case 342:
case 3652:
case 3496:
case 328:
case 3324:
case 465:
case 2635:
case 4079:
case 1442:
case 3736:
case 3519:
case 2848:
case 3061:
case 1947:
case 546:
case 715:
case 2390:
case 815:
case 2900:
case 2123:
case 2366:
case 3547:
case 2026:
case 578:
case 3950:
case 1304:
case 2234:
case 1994:
case 3430:
case 1127:
case 1981:
case 3766:
case 3155:
case 2665:
case 1754:
case 3594:
case 1550:
case 2943:
case 1856:
case 2132:
case 3955:
case 1927:
case 1181:
case 3435:
case 3877:
case 3671:
case 1194:
case 3341:
case 2115:
case 3527:
case 2932:
case 1555:
case 3795:
case 2143:
case 2696:
case 827:
case 3149:
case 2910:
case 895:
case 1529:
case 1783:
case 843:
case 2075:
case 3228:
case 2395:
case 795:
case 2905:
case 649:
case 440:
case 88:
case 2741:
case 2368:
case 3929:
case 1879:
case 879:
case 3275:
case 673:
case 779:
case 141:
case 1772:
case 2923:
case 1119:
case 2559:
case 3397:
case 3907:
case 3553:
case 2630:
case 2540:
case 3738:
case 1953:
case 2277:
case 878:
case 1216:
case 1058:
case 3465:
case 344:
case 1273:
case 1184:
case 2875:
case 3674:
case 3344:
case 2578:
case 1208:
case 3117:
case 955:
case 65:
case 2797:
case 746:
case 3785:
case 2686:
case 1909:
case 4056:
case 860:
case 3960:
case 2001:
case 3165:
case 3756:
case 454:
case 3198:
case 1560:
case 3610:
case 1419:
case 3542:
case 1866:
case 392:
case 545:
case 4038:
case 1122:
case 593:
case 2804:
case 3318:
case 816:
case 1080:
case 2137:
case 2356:
case 12:
case 138:
case 2629:
case 1491:
case 3662:
case 2152:
case 491:
case 2607:
case 2801:
case 1640:
case 1734:
case 1370:
case 139:
case 1326:
case 1066:
case 3930:
case 107:
case 1221:
case 1494:
case 2974:
case 1586:
case 2004:
case 3657:
case 2167:
case 1880:
case 1625:
case 561:
case 255:
case 813:
case 3204:
case 410:
case 4068:
case 619:
case 3188:
case 4090:
case 675:
case 3902:
case 3289:
case 2423:
case 989:
case 3392:
case 191:
case 745:
case 516:
case 1346:
case 956:
case 166:
case 2272:
case 3083:
case 2405:
case 793:
case 699:
case 1241:
case 2811:
case 4066:
case 3186:
case 1095:
case 1838:
case 2410:
case 1535:
case 3563:
case 411:
case 1613:
case 2952:
case 3130:
case 1287:
case 1068:
case 2792:
case 2014:
case 3893:
case 3935:
case 1963:
case 560:
case 3779:
case 2708:
case 3600:
case 3211:
case 896:
case 909:
case 2773:
case 513:
case 3872:
case 3316:
case 163:
case 154:
case 2358:
case 394:
case 2011:
case 2457:
case 2889:
case 2937:
case 3522:
case 761:
case 1895:
case 1142:
case 1933:
case 2650:
case 3382:
case 1598:
case 2099:
case 3196:
case 1565:
case 1777:
case 2462:
case 3373:
case 3407:
case 1244:
case 698:
case 3093:
case 2379:
case 438:
case 218:
case 2739:
case 1438:
case 2810:
case 1240:
case 1156:
case 2832:
case 3733:
case 1765:
case 2516:
case 1337:
case 2499:
case 1621:
case 4084:
case 2062:
case 1798:
case 1259:
case 3164:
case 4091:
case 1827:
case 1225:
case 949:
case 89:
case 1979:
case 2582:
case 472:
case 2333:
case 2805:
case 174:
case 2057:
case 2411:
case 3604:
case 3579:
case 2508:
case 3339:
case 720:
case 1853:
case 2255:
case 2148:
case 948:
case 3134:
case 2862:
case 3807:
case 3232:
case 231:
case 2414:
case 3601:
case 1468:
case 3210:
case 1027:
case 3369:
case 371:
case 2363:
case 2126:
case 4081:
case 705:
case 1624:
case 2170:
case 3161:
case 3483:
case 95:
case 2857:
case 655:
case 7:
case 4094:
case 51:
case 2975:
case 447:
case 1352:
case 585:
case 123:
case 299:
case 2926:
case 2404:
case 1561:
case 721:
case 1786:
case 2970:
case 3699:
case 2146:
case 335:
case 3049:
case 1730:
case 1374:
case 2249:
case 1644:
case 1534:
case 370:
case 3243:
case 1094:
case 3931:
case 1179:
case 1220:
case 81:
case 3451:
case 5:
case 1371:
case 1084:
case 2800:
case 1531:
case 1847:
case 2506:
case 1276:
case 3742:
case 1436:
case 2843:
case 1213:
case 2815:
case 1760:
case 1158:
case 3614:
case 3849:
case 2401:
case 1564:
case 3177:
case 172:
case 1881:
case 3850:
case 3964:
case 1687:
case 3359:
case 2037:
case 67:
case 2725:
case 975:
case 2597:
case 689:
case 480:
case 2661:
case 3151:
case 3340:
case 84:
case 3709:
case 1022:
case 2778:
case 3670:
case 4042:
case 706:
case 832:
case 2703:
case 1180:
case 3237:
case 930:
case 999:
case 806:
case 224:
case 181:
case 732:
case 3993:
case 608:
case 1707:
case 858:
case 3835:
case 1863:
case 3477:
case 758:
case 2999:
case 2634:
case 1357:
case 3325:
case 2852:
case 1593:
case 1938:
case 2298:
case 3065:
case 1033:
case 1458:
case 3267:
case 384:
case 1332:
case 664:
case 759:
case 497:
case 2837:
case 2202:
case 653:
case 1572:
case 2989:
case 3088:
case 609:
case 703:
case 400:
case 859:
case 1310:
case 3972:
case 1822:
case 2288:
case 786:
case 1729:
case 2104:
case 688:
case 1063:
case 368:
case 534:
case 117:
case 3595:
case 1755:
case 1166:
case 1323:
case 567:
case 1618:
case 2664:
case 3568:
case 1190:
case 1995:
case 2235:
case 382:
case 3781:
case 3030:
case 197:
case 3012:
case 2521:
case 1750:
case 3590:
case 1168:
case 2114:
case 333:
case 1842:
case 1195:
case 2677:
case 1990:
case 3434:
case 918:
case 1749:
case 1608:
case 3461:
case 3183:
case 3274:
case 506:
case 417:
case 273:
case 3086:
case 3747:
case 532:
case 1682:
case 2904:
case 2074:
case 2381:
case 3172:
case 125:
case 2260:
case 3271:
case 3376:
case 180:
case 336:
case 3536:
case 4022:
case 2901:
case 1042:
case 867:
case 248:
case 3320:
case 2384:
case 2296:
case 2071:
case 1936:
case 734:
case 222:
case 1692:
case 3060:
case 3580:
case 3886:
case 1551:
case 3791:
case 2524:
case 2111:
case 276:
case 1980:
case 3951:
case 503:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760756401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,];
var gg_b = "1760756401/";

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
