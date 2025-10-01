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
case 1783:
case 792:
case 3319:
case 1176:
case 663:
case 1229:
case 3473:
case 473:
case 2963:
case 2326:
case 3575:
case 2959:
case 1909:
case 143:
case 3583:
case 720:
case 3485:
case 4049:
case 2780:
case 1791:
case 2335:
case 2217:
case 1323:
case 676:
case 466:
case 2786:
case 1762:
case 1960:
case 997:
case 2173:
case 412:
case 4009:
case 3562:
case 1949:
case 767:
case 17:
case 321:
case 528:
case 3726:
case 2805:
case 3922:
case 3720:
case 3318:
case 4048:
case 2430:
case 1520:
case 1144:
case 3454:
case 2994:
case 296:
case 2032:
case 347:
case 52:
case 3380:
case 3735:
case 178:
case 457:
case 3130:
case 1948:
case 551:
case 3672:
case 2425:
case 1535:
case 1433:
case 2523:
case 4008:
case 3242:
case 2198:
case 3136:
case 1104:
case 1961:
case 3069:
case 699:
case 2142:
case 2236:
case 3298:
case 3402:
case 1848:
case 3612:
case 832:
case 975:
case 451:
case 3040:
case 1195:
case 3590:
case 4055:
case 286:
case 3053:
case 341:
case 1189:
case 2538:
case 1428:
case 360:
case 2945:
case 1808:
case 3442:
case 2894:
case 3797:
case 428:
case 878:
case 2102:
case 3378:
case 54:
case 3006:
case 1034:
case 3822:
case 3000:
case 1047:
case 211:
case 1597:
case 740:
case 3074:
case 1429:
case 3650:
case 4084:
case 991:
case 2647:
case 1860:
case 512:
case 2277:
case 843:
case 1866:
case 1715:
case 573:
case 2397:
case 2859:
case 1809:
case 3603:
case 2863:
case 1657:
case 2778:
case 1521:
case 2607:
case 1116:
case 3867:
case 3379:
case 2417:
case 3505:
case 4081:
case 3147:
case 3613:
case 2028:
case 2150:
case 3403:
case 1106:
case 2143:
case 2156:
case 2617:
case 994:
case 876:
case 2631:
case 1457:
case 3052:
case 2755:
case 4093:
case 2792:
case 1146:
case 2103:
case 3450:
case 739:
case 1140:
case 623:
case 2434:
case 863:
case 435:
case 2827:
case 1745:
case 3724:
case 760:
case 1169:
case 288:
case 922:
case 344:
case 2915:
case 3010:
case 409:
case 2029:
case 115:
case 1818:
case 3251:
case 3642:
case 382:
case 1978:
case 705:
case 3887:
case 3939:
case 1031:
case 3265:
case 3361:
case 3088:
case 1174:
case 4078:
case 2891:
case 3412:
case 2862:
case 3602:
case 550:
case 91:
case 1633:
case 2962:
case 2625:
case 3472:
case 1141:
case 4018:
case 2991:
case 1980:
case 2749:
case 189:
case 3348:
case 324:
case 2165:
case 2172:
case 2630:
case 632:
case 3559:
case 4086:
case 1918:
case 1864:
case 554:
case 4080:
case 918:
case 2151:
case 1878:
case 1101:
case 2567:
case 320:
case 3070:
case 1759:
case 3465:
case 3923:
case 298:
case 2927:
case 356:
case 980:
case 3349:
case 2890:
case 1881:
case 446:
case 2748:
case 3203:
case 3037:
case 1367:
case 3699:
case 3011:
case 2033:
case 3685:
case 1025:
case 721:
case 163:
case 29:
case 3309:
case 2234:
case 1794:
case 984:
case 2708:
case 3243:
case 2677:
case 75:
case 2522:
case 3250:
case 3704:
case 2807:
case 3667:
case 1736:
case 2296:
case 333:
case 3803:
case 1932:
case 2290:
case 1730:
case 318:
case 1419:
case 2659:
case 1609:
case 1373:
case 2598:
case 716:
case 3711:
case 257:
case 3737:
case 3850:
case 496:
case 3744:
case 1293:
case 967:
case 4032:
case 586:
case 3525:
case 2008:
case 1120:
case 1094:
case 1279:
case 3423:
case 781:
case 1511:
case 1537:
case 129:
case 3577:
case 2304:
case 3965:
case 3239:
case 831:
case 3622:
case 3162:
case 452:
case 2483:
case 1777:
case 342:
case 2658:
case 1608:
case 2694:
case 849:
case 266:
case 3333:
case 1063:
case 380:
case 2311:
case 956:
case 2337:
case 3770:
case 1486:
case 2491:
case 1278:
case 3776:
case 3951:
case 1264:
case 212:
case 2283:
case 322:
case 3851:
case 669:
case 3287:
case 2371:
case 2352:
case 2084:
case 2645:
case 1121:
case 1478:
case 2395:
case 1731:
case 1464:
case 1717:
case 1286:
case 2262:
case 2389:
case 2415:
case 837:
case 1342:
case 2605:
case 1655:
case 394:
case 2139:
case 2513:
case 3531:
case 3329:
case 791:
case 1571:
case 787:
case 3752:
case 3950:
case 961:
case 2947:
case 1197:
case 4057:
case 3943:
case 3956:
case 2934:
case 2388:
case 2092:
case 3795:
case 2061:
case 3223:
case 3190:
case 1832:
case 1493:
case 1045:
case 1957:
case 2907:
case 2138:
case 944:
case 3913:
case 927:
case 4029:
case 1266:
case 3774:
case 2877:
case 2282:
case 2931:
case 1568:
case 1249:
case 2346:
case 794:
case 3357:
case 3021:
case 941:
case 1929:
case 250:
case 2696:
case 893:
case 790:
case 375:
case 939:
case 1356:
case 1343:
case 2306:
case 2078:
case 1096:
case 80:
case 1455:
case 2503:
case 2374:
case 4028:
case 1090:
case 3145:
case 226:
case 3898:
case 134:
case 3942:
case 1707:
case 1678:
case 48:
case 3746:
case 3753:
case 631:
case 1500:
case 2445:
case 598:
case 1928:
case 169:
case 2543:
case 1506:
case 2079:
case 2258:
case 1208:
case 130:
case 1833:
case 235:
case 3902:
case 2925:
case 1686:
case 3802:
case 10:
case 498:
case 3158:
case 2691:
case 1680:
case 588:
case 834:
case 1372:
case 246:
case 2301:
case 637:
case 1027:
case 1292:
case 733:
case 1618:
case 3998:
case 2936:
case 2494:
case 362:
case 2458:
case 1365:
case 3954:
case 3035:
case 2341:
case 316:
case 3422:
case 2314:
case 718:
case 830:
case 3623:
case 2018:
case 3159:
case 1501:
case 1449:
case 780:
case 403:
case 1466:
case 3701:
case 1284:
case 784:
case 1409:
case 2459:
case 3999:
case 2080:
case 3332:
case 855:
case 193:
case 3714:
case 3182:
case 3741:
case 3813:
case 921:
case 2565:
case 3405:
case 3503:
case 2769:
case 1995:
case 1989:
case 3081:
case 2507:
case 326:
case 2898:
case 3836:
case 2942:
case 2740:
case 1804:
case 2854:
case 3830:
case 2746:
case 2753:
case 1192:
case 2222:
case 2097:
case 3550:
case 2639:
case 4095:
case 2105:
case 1155:
case 1424:
case 2534:
case 4089:
case 3556:
case 72:
case 291:
case 1756:
case 751:
case 2706:
case 335:
case 1844:
case 556:
case 979:
case 2700:
case 802:
case 4010:
case 309:
case 2768:
case 1697:
case 3917:
case 4016:
case 444:
case 3877:
case 2885:
case 3353:
case 1307:
case 482:
case 440:
case 1712:
case 1184:
case 1910:
case 1870:
case 2638:
case 3696:
case 2267:
case 1876:
case 170:
case 1347:
case 3512:
case 3064:
case 1334:
case 3306:
case 3018:
case 540:
case 102:
case 2159:
case 3627:
case 766:
case 712:
case 1751:
case 1976:
case 677:
case 3482:
case 996:
case 2163:
case 3459:
case 492:
case 3080:
case 544:
case 2332:
case 773:
case 1149:
case 2182:
case 3817:
case 2467:
case 4076:
case 1166:
case 3977:
case 3831:
case 2741:
case 2813:
case 3463:
case 582:
case 3565:
case 2973:
case 4070:
case 3662:
case 3925:
case 1871:
case 1937:
case 757:
case 685:
case 2194:
case 346:
case 3301:
case 3732:
case 1148:
case 952:
case 4044:
case 3936:
case 3494:
case 4011:
case 262:
case 1904:
case 2954:
case 3683:
case 3245:
case 653:
case 3675:
case 3314:
case 76:
case 2577:
case 3060:
case 1785:
case 1330:
case 2965:
case 1799:
case 3066:
case 3475:
case 2487:
case 3599:
case 1186:
case 3483:
case 895:
case 242:
case 1874:
case 153:
case 3658:
case 2191:
case 3585:
case 4001:
case 366:
case 1221:
case 3344:
case 1325:
case 185:
case 2333:
case 3311:
case 2175:
case 3337:
case 2770:
case 3462:
case 3187:
case 312:
case 998:
case 1754:
case 871:
case 1798:
case 421:
case 45:
case 218:
case 1377:
case 3123:
case 3659:
case 3554:
case 3598:
case 1426:
case 564:
case 3682:
case 539:
case 2711:
case 2856:
case 3834:
case 1800:
case 3847:
case 447:
case 1435:
case 2525:
case 3376:
case 2423:
case 1119:
case 3370:
case 21:
case 3427:
case 2329:
case 3310:
case 3502:
case 2752:
case 1702:
case 441:
case 4040:
case 1906:
case 1528:
case 3496:
case 558:
case 3542:
case 3092:
case 2789:
case 3227:
case 2795:
case 1317:
case 328:
case 1946:
case 674:
case 1181:
case 4000:
case 910:
case 4006:
case 3907:
case 877:
case 3138:
case 1497:
case 222:
case 2851:
case 1178:
case 2716:
case 2872:
case 2710:
case 2115:
case 3371:
case 3352:
case 290:
case 3645:
case 3291:
case 885:
case 1974:
case 754:
case 1713:
case 3415:
case 3605:
case 3139:
case 3513:
case 294:
case 1421:
case 119:
case 405:
case 2517:
case 2016:
case 3875:
case 836:
case 1584:
case 1695:
case 3915:
case 1921:
case 3029:
case 1468:
case 2251:
case 1305:
case 1201:
case 3883:
case 2272:
case 3112:
case 314:
case 2265:
case 2361:
case 2088:
case 1214:
case 665:
case 475:
case 1241:
case 1345:
case 2412:
case 3862:
case 1555:
case 2613:
case 562:
case 1688:
case 2403:
case 1453:
case 1446:
case 3143:
case 3631:
case 711:
case 2384:
case 1820:
case 600:
case 1469:
case 2089:
case 487:
case 3792:
case 3990:
case 3447:
case 1616:
case 3996:
case 2938:
case 3434:
case 2107:
case 2443:
case 2456:
case 2095:
case 3761:
case 1561:
case 1592:
case 2823:
case 388:
case 1042:
case 2366:
case 912:
case 398:
case 1269:
case 591:
case 1382:
case 2004:
case 4026:
case 2360:
case 796:
case 3896:
case 2838:
case 613:
case 1676:
case 966:
case 3748:
case 1246:
case 2203:
case 1722:
case 2699:
case 462:
case 2594:
case 2685:
case 1926:
case 2044:
case 2558:
case 1359:
case 1897:
case 1206:
case 3708:
case 2256:
case 3677:
case 416:
case 3522:
case 3247:
case 2673:
case 1200:
case 2250:
case 3625:
case 2472:
case 136:
case 1549:
case 2451:
case 1611:
case 224:
case 3172:
case 2698:
case 1414:
case 1767:
case 3151:
case 125:
case 220:
case 1821:
case 2070:
case 2563:
case 2308:
case 1358:
case 2076:
case 221:
case 1383:
case 2665:
case 3805:
case 2720:
case 2318:
case 96:
case 3430:
case 1641:
case 865:
case 1614:
case 1375:
case 396:
case 2386:
case 3032:
case 2130:
case 2672:
case 3425:
case 41:
case 3198:
case 2242:
case 2651:
case 3477:
case 2319:
case 2967:
case 1216:
case 1787:
case 2575:
case 3326:
case 1051:
case 3959:
case 352:
case 1072:
case 1065:
case 1476:
case 3231:
case 3780:
case 2177:
case 522:
case 1288:
case 946:
case 1470:
case 480:
case 800:
case 590:
case 2014:
case 3199:
case 3185:
case 379:
case 2381:
case 2299:
case 714:
case 1739:
case 2074:
case 83:
case 1600:
case 3113:
case 3539:
case 1410:
case 1606:
case 2656:
case 2131:
case 1416:
case 104:
case 710:
case 2393:
case 584:
case 1564:
case 1669:
case 3397:
case 601:
case 2603:
case 926:
case 2515:
case 542:
case 3863:
case 205:
case 2413:
case 1276:
case 3607:
case 813:
case 1640:
case 2867:
case 494:
case 3764:
case 1204:
case 645:
case 2069:
case 2298:
case 1452:
case 2402:
case 3781:
case 2612:
case 2040:
case 788:
case 2590:
case 386:
case 2053:
case 165:
case 260:
case 3945:
case 1211:
case 533:
case 1674:
case 3894:
case 1668:
case 1244:
case 3225:
case 3321:
case 3102:
case 3793:
case 1043:
case 1056:
case 2364:
case 2822:
case 264:
case 1593:
case 518:
case 1128:
case 311:
case 640:
case 1069:
case 3961:
case 2471:
case 1298:
case 2738:
case 821:
case 3848:
case 139:
case 3790:
case 1612:
case 955:
case 2003:
case 1053:
case 3428:
case 265:
case 847:
case 3171:
case 1442:
case 3808:
case 2668:
case 2237:
case 2244:
case 2579:
case 3152:
case 858:
case 2056:
case 2043:
case 1006:
case 2593:
case 3034:
case 2128:
case 127:
case 2739:
case 3338:
case 1068:
case 1273:
case 2600:
case 3429:
case 1650:
case 495:
case 3188:
case 2410:
case 1656:
case 259:
case 2416:
case 204:
case 1721:
case 2564:
case 2012:
case 2669:
case 3715:
case 3809:
case 2488:
case 1515:
case 3984:
case 2646:
case 1603:
case 1413:
case 105:
case 1379:
case 3783:
case 3176:
case 3884:
case 2210:
case 1575:
case 1499:
case 908:
case 3775:
case 1001:
case 1583:
case 2518:
case 1485:
case 3791:
case 1177:
case 238:
case 2288:
case 485:
case 3762:
case 805:
case 2586:
case 1562:
case 1014:
case 595:
case 90:
case 1591:
case 213:
case 121:
case 37:
case 1726:
case 2383:
case 1665:
case 1318:
case 1720:
case 3855:
case 993:
case 2133:
case 3144:
case 2641:
case 3520:
case 620:
case 3908:
case 2404:
case 3137:
case 1498:
case 2271:
case 3526:
case 2375:
case 3111:
case 2614:
case 3727:
case 147:
case 2362:
case 571:
case 378:
case 4022:
case 1672:
case 864:
case 3535:
case 2444:
case 1130:
case 3948:
case 158:
case 3433:
case 3892:
case 1242:
case 1136:
case 3861:
case 667:
case 3104:
case 1651:
case 2437:
case 2601:
case 2085:
case 844:
case 3986:
case 2644:
case 3141:
case 2268:
case 2549:
case 3980:
case 2611:
case 3782:
case 2274:
case 2566:
case 1348:
case 1582:
case 570:
case 1839:
case 1559:
case 2441:
case 861:
case 621:
case 65:
case 225:
case 120:
case 574:
case 906:
case 3759:
case 2358:
case 2098:
case 1923:
case 2054:
case 2935:
case 2548:
case 2269:
case 937:
case 3030:
case 376:
case 1838:
case 2676:
case 2240:
case 156:
case 2246:
case 2132:
case 2253:
case 1203:
case 3879:
case 2920:
case 1011:
case 5:
case 1699:
case 732:
case 1685:
case 2363:
case 1594:
case 2508:
case 363:
case 1558:
case 1309:
case 2359:
case 2206:
case 1256:
case 1243:
case 3758:
case 3893:
case 207:
case 2200:
case 1250:
case 929:
case 1673:
case 3100:
case 2555:
case 1147:
case 4:
case 2446:
case 2997:
case 4038:
case 3106:
case 3457:
case 2826:
case 2002:
case 1384:
case 3705:
case 1071:
case 605:
case 2469:
case 3232:
case 3153:
case 3981:
case 2400:
case 3629:
case 1107:
case 1095:
case 1456:
case 1443:
case 2561:
case 3169:
case 2592:
case 2835:
case 2042:
case 1016:
case 144:
case 2695:
case 2584:
case 1010:
case 2689:
case 315:
case 2921:
case 1355:
case 2201:
case 474:
case 3964:
case 3818:
case 2468:
case 3978:
case 1642:
case 2474:
case 182:
case 1887:
case 664:
case 3031:
case 1361:
case 1265:
case 140:
case 2013:
case 892:
case 723:
case 502:
case 2214:
case 2671:
case 641:
case 3880:
case 820:
case 3168:
case 1412:
case 2241:
case 2652:
case 3661:
case 2164:
case 1716:
case 755:
case 2801:
case 1287:
case 331:
case 2529:
case 1439:
case 459:
case 513:
case 1115:
case 842:
case 3121:
case 3516:
case 295:
case 190:
case 2974:
case 3478:
case 53:
case 2968:
case 2814:
case 3717:
case 3286:
case 572:
case 2841:
case 3588:
case 1865:
case 1531:
case 783:
case 1329:
case 769:
case 3552:
case 2179:
case 2220:
case 999:
case 2900:
case 2193:
case 2702:
case 1950:
case 3481:
case 730:
case 675:
case 1943:
case 1438:
case 2528:
case 1789:
case 3313:
case 2331:
case 1795:
case 3479:
case 2317:
case 3595:
case 915:
case 3684:
case 1903:
case 2181:
case 3045:
case 1024:
case 3832:
case 3493:
case 4056:
case 734:
case 3399:
case 2846:
case 3932:
case 3281:
case 3385:
case 3419:
case 118:
case 3609:
case 1127:
case 2426:
case 1536:
case 2806:
case 1711:
case 1737:
case 2297:
case 989:
case 3725:
case 1850:
case 70:
case 3293:
case 3544:
case 1525:
case 2435:
case 1423:
case 3094:
case 3279:
case 3126:
case 277:
case 11:
case 43:
case 793:
case 1577:
case 2330:
case 662:
case 3082:
case 472:
case 1622:
case 3398:
case 184:
case 2773:
case 1487:
case 4072:
case 2874:
case 253:
case 3777:
case 616:
case 4051:
case 2868:
case 2180:
case 1191:
case 3576:
case 2325:
case 1333:
case 285:
case 3063:
case 1175:
case 3570:
case 2067:
case 559:
case 1972:
case 976:
case 894:
case 3648:
case 413:
case 1812:
case 2118:
case 3278:
case 681:
case 1183:
case 2901:
case 3264:
case 1026:
case 3933:
case 30:
case 3448:
case 1802:
case 3686:
case 2944:
case 2937:
case 2108:
case 1020:
case 2911:
case 1194:
case 4054:
case 3828:
case 3351:
case 3292:
case 2148:
case 706:
case 2023:
case 3365:
case 2904:
case 3261:
case 162:
case 642:
case 407:
case 1422:
case 2532:
case 545:
case 202:
case 1159:
case 2109:
case 3449:
case 3501:
case 4085:
case 3466:
case 978:
case 3075:
case 2816:
case 2976:
case 1163:
case 4073:
case 3829:
case 2970:
case 633:
case 3409:
case 3619:
case 1985:
case 1332:
case 2149:
case 1182:
case 1467:
case 932:
case 618:
case 2888:
case 3693:
case 3484:
case 1885:
case 3249:
case 3574:
case 1899:
case 2712:
case 3681:
case 2910:
case 445:
case 4013:
case 2870:
case 1021:
case 1267:
case 355:
case 2916:
case 536:
case 175:
case 3350:
case 2347:
case 3343:
case 3455:
case 3096:
case 2038:
case 1769:
case 2989:
case 1145:
case 2:
case 881:
case 2804:
case 1942:
case 2703:
case 3248:
case 1753:
case 3569:
case 694:
case 4002:
case 1222:
case 1547:
case 1105:
case 2155:
case 1639:
case 3312:
case 622:
case 187:
case 2424:
case 3506:
case 4042:
case 3461:
case 2743:
case 3208:
case 330:
case 1700:
case 3747:
case 2844:
case 168:
case 1018:
case 2083:
case 3635:
case 854:
case 1572:
case 2449:
case 1551:
case 657:
case 3751:
case 2075:
case 1167:
case 4077:
case 2460:
case 3810:
case 2284:
case 1080:
case 515:
case 2091:
case 2619:
case 2062:
case 293:
case 850:
case 1086:
case 1817:
case 64:
case 1463:
case 1565:
case 3888:
case 476:
case 1925:
case 3937:
case 666:
case 3871:
case 3108:
case 3911:
case 1691:
case 1019:
case 777:
case 612:
case 2372:
case 2255:
case 1122:
case 2292:
case 1732:
case 4025:
case 208:
case 1494:
case 3023:
case 1683:
case 1458:
case 1341:
case 3224:
case 1245:
case 3889:
case 93:
case 1314:
case 1675:
case 3532:
case 972:
case 3895:
case 2455:
case 1405:
case 3038:
case 563:
case 3995:
case 1503:
case 2553:
case 1081:
case 2090:
case 900:
case 3989:
case 2124:
case 3557:
case 3:
case 1836:
case 234:
case 3804:
case 3703:
case 1550:
case 2500:
case 1093:
case 1556:
case 269:
case 2506:
case 1079:
case 2734:
case 3971:
case 1258:
case 3743:
case 2208:
case 3844:
case 1825:
case 2693:
case 2260:
case 2484:
case 868:
case 415:
case 628:
case 3988:
case 1917:
case 2266:
case 3039:
case 1877:
case 719:
case 2249:
case 2303:
case 1353:
case 2574:
case 1346:
case 374:
case 3307:
case 3184:
case 1690:
case 965:
case 3870:
case 499:
case 1696:
case 255:
case 3916:
case 2015:
case 3876:
case 4031:
case 370:
case 1300:
case 3347:
case 1064:
case 1512:
case 2209:
case 1078:
case 589:
case 2356:
case 371:
case 1310:
case 578:
case 2552:
case 1502:
case 1316:
case 3220:
case 3193:
case 3702:
case 3906:
case 2197:
case 1055:
case 1934:
case 2005:
case 532:
case 1542:
case 1092:
case 2313:
case 3235:
case 57:
case 2479:
case 2595:
case 2684:
case 3953:
case 848:
case 3181:
case 2832:
case 2493:
case 3497:
case 2218:
case 3801:
case 423:
case 231:
case 1275:
case 2510:
case 1352:
case 2302:
case 249:
case 2121:
case 395:
case 3974:
case 2731:
case 1395:
case 2280:
case 3968:
case 2464:
case 2717:
case 1389:
case 3841:
case 1262:
case 2588:
case 543:
case 1513:
case 1605:
case 3421:
case 319:
case 173:
case 229:
case 1060:
case 3785:
case 3799:
case 2354:
case 1573:
case 1066:
case 3336:
case 443:
case 1599:
case 3186:
case 1658:
case 2608:
case 1483:
case 3868:
case 2418:
case 3914:
case 1694:
case 1344:
case 2576:
case 3221:
case 166:
case 2063:
case 702:
case 1311:
case 2570:
case 1337:
case 3067:
case 2486:
case 2648:
case 237:
case 1187:
case 3118:
case 1009:
case 646:
case 3901:
case 2264:
case 3754:
case 432:
case 66:
case 47:
case 3853:
case 1663:
case 2730:
case 1290:
case 2385:
case 2419:
case 1123:
case 2609:
case 1554:
case 2373:
case 3426:
case 1598:
case 3806:
case 478:
case 3022:
case 2666:
case 1834:
case 157:
case 668:
case 1847:
case 1376:
case 3435:
case 3119:
case 2279:
case 2511:
case 2126:
case 2649:
case 198:
case 3382:
case 3548:
case 2030:
case 40:
case 1207:
case 1890:
case 985:
case 3132:
case 1748:
case 2367:
case 3920:
case 3722:
case 4027:
case 3508:
case 2025:
case 3897:
case 1677:
case 1247:
case 977:
case 3085:
case 2633:
case 555:
case 103:
case 1625:
case 2986:
case 2141:
case 3401:
case 738:
case 3637:
case 3268:
case 3549:
case 1766:
case 696:
case 3611:
case 4083:
case 1749:
case 3566:
case 3073:
case 4075:
case 3560:
case 2077:
case 2763:
case 1172:
case 3441:
case 814:
case 4062:
case 3767:
case 2864:
case 1636:
case 2918:
case 2322:
case 3604:
case 1151:
case 1983:
case 2101:
case 2878:
case 772:
case 3394:
case 1975:
case 1709:
case 2759:
case 3358:
case 803:
case 1875:
case 593:
case 1915:
case 3584:
case 215:
case 3201:
case 2964:
case 3305:
case 2818:
case 611:
case 1112:
case 1784:
case 483:
case 455:
case 2031:
case 4015:
case 3013:
case 3214:
case 2174:
case 686:
case 704:
case 759:
case 1324:
case 3652:
case 971:
case 2993:
case 508:
case 919:
case 301:
case 3688:
case 1617:
case 2106:
case 1156:
case 1407:
case 1631:
case 3440:
case 3826:
case 18:
case 2979:
case 2705:
case 434:
case 3469:
case 2146:
case 1103:
case 3610:
case 2629:
case 3157:
case 89:
case 1434:
case 679:
case 1761:
case 765:
case 1827:
case 188:
case 2169:
case 179:
case 3390:
case 745:
case 2849:
case 688:
case 1539:
case 3600:
case 2429:
case 2188:
case 359:
case 1277:
case 304:
case 3416:
case 2866:
case 852:
case 1634:
case 3564:
case 3012:
case 3669:
case 2715:
case 529:
case 3488:
case 3653:
case 2521:
case 1431:
case 3276:
case 1607:
case 68:
case 1764:
case 1417:
case 2339:
case 3204:
case 3471:
case 1142:
case 2796:
case 3738:
case 3452:
case 1781:
case 1230:
case 2992:
case 614:
case 2007:
case 3003:
case 3924:
case 3674:
case 1858:
case 3211:
case 3315:
case 3668:
case 610:
case 3237:
case 1225:
case 3579:
case 2152:
case 2233:
case 3043:
case 3495:
case 1905:
case 1779:
case 2034:
case 3050:
case 3128:
case 3489:
case 2597:
case 111:
case 27:
case 2387:
case 2228:
case 232:
case 3383:
case 1805:
case 2855:
case 3252:
case 3133:
case 2144:
case 2137:
case 3271:
case 2111:
case 3614:
case 3289:
case 3362:
case 1032:
case 3391:
case 603:
case 2948:
case 1523:
case 2433:
case 2892:
case 1198:
case 2861:
case 811:
case 4094:
case 2104:
case 1154:
case 1477:
case 372:
case 69:
case 1320:
case 2176:
case 879:
case 2229:
case 1963:
case 1326:
case 1587:
case 1959:
case 2909:
case 2775:
case 3072:
case 725:
case 3518:
case 531:
case 2791:
case 1231:
case 1786:
case 3288:
case 4063:
case 3327:
case 2960:
case 549:
case 3586:
case 4059:
case 1185:
case 2949:
case 313:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759302001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,];
var gg_b = "1759302001/";

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
