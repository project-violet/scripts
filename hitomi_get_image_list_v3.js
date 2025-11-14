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
case 1801:
case 1984:
case 2763:
case 1731:
case 317:
case 762:
case 2692:
case 894:
case 2935:
case 3343:
case 2255:
case 381:
case 3371:
case 2522:
case 2700:
case 759:
case 3865:
case 1862:
case 2830:
case 2388:
case 2502:
case 3277:
case 3903:
case 830:
case 1928:
case 3018:
case 1908:
case 2732:
case 902:
case 1691:
case 1562:
case 900:
case 928:
case 3:
case 3931:
case 418:
case 3464:
case 1279:
case 2819:
case 3251:
case 519:
case 467:
case 1833:
case 3076:
case 914:
case 2756:
case 4027:
case 1521:
case 3838:
case 1723:
case 4007:
case 1501:
case 3298:
case 1364:
case 1649:
case 2440:
case 3357:
case 2010:
case 424:
case 1658:
case 2193:
case 404:
case 1870:
case 557:
case 1842:
case 3845:
case 751:
case 1581:
case 3098:
case 1110:
case 3468:
case 3320:
case 3276:
case 2599:
case 3300:
case 1093:
case 2964:
case 2431:
case 2541:
case 412:
case 47:
case 3834:
case 2743:
case 2573:
case 3704:
case 3294:
case 1079:
case 410:
case 389:
case 703:
case 1368:
case 1975:
case 1420:
case 920:
case 630:
case 1400:
case 395:
case 1654:
case 2609:
case 3940:
case 2882:
case 922:
case 2757:
case 3077:
case 1213:
case 838:
case 3983:
case 2582:
case 2113:
case 2308:
case 426:
case 542:
case 2780:
case 1344:
case 540:
case 1669:
case 3775:
case 2055:
case 1772:
case 587:
case 175:
case 1139:
case 1570:
case 2948:
case 362:
case 2239:
case 2899:
case 717:
case 963:
case 3444:
case 3014:
case 1456:
case 768:
case 2959:
case 2403:
case 2354:
case 1309:
case 2668:
case 2085:
case 1329:
case 3119:
case 1747:
case 1577:
case 765:
case 1851:
case 20:
case 1312:
case 1125:
case 835:
case 1514:
case 2446:
case 1949:
case 2467:
case 2787:
case 2097:
case 3429:
case 1958:
case 3233:
case 3386:
case 257:
case 1415:
case 3042:
case 2138:
case 864:
case 433:
case 3947:
case 3221:
case 3966:
case 3660:
case 3593:
case 211:
case 3201:
case 3791:
case 3081:
case 1598:
case 1684:
case 398:
case 1174:
case 68:
case 1628:
case 3603:
case 2644:
case 827:
case 2369:
case 3623:
case 4080:
case 1608:
case 3262:
case 242:
case 1265:
case 2217:
case 2296:
case 3749:
case 3579:
case 2706:
case 1551:
case 3758:
case 2726:
case 1877:
case 3813:
case 1969:
case 2447:
case 3350:
case 1594:
case 1818:
case 2096:
case 1688:
case 3062:
case 4000:
case 1495:
case 153:
case 4020:
case 3683:
case 3141:
case 3387:
case 248:
case 807:
case 925:
case 3199:
case 635:
case 1624:
case 2648:
case 1604:
case 1450:
case 993:
case 1392:
case 3754:
case 2074:
case 415:
case 1746:
case 1767:
case 3326:
case 1245:
case 1116:
case 1197:
case 2358:
case 3242:
case 2664:
case 545:
case 2349:
case 2727:
case 2145:
case 813:
case 88:
case 3769:
case 1038:
case 22:
case 1894:
case 3711:
case 937:
case 1675:
case 3182:
case 2909:
case 3946:
case 2453:
case 866:
case 365:
case 4032:
case 2391:
case 2912:
case 2285:
case 2005:
case 11:
case 2025:
case 129:
case 2137:
case 3210:
case 2845:
case 883:
case 81:
case 870:
case 1176:
case 872:
case 2300:
case 3431:
case 536:
case 2276:
case 1957:
case 2788:
case 1237:
case 2098:
case 2468:
case 1897:
case 2704:
case 113:
case 1759:
case 18:
case 3743:
case 3573:
case 1615:
case 3541:
case 1748:
case 2646:
case 1885:
case 2363:
case 1331:
case 1194:
case 2972:
case 3629:
case 223:
case 1878:
case 3841:
case 1484:
case 2983:
case 4058:
case 2534:
case 4049:
case 3873:
case 15:
case 2218:
case 2435:
case 259:
case 1607:
case 3460:
case 3090:
case 1303:
case 1585:
case 1323:
case 3308:
case 3384:
case 853:
case 2545:
case 3055:
case 3959:
case 4091:
case 1360:
case 2332:
case 3403:
case 1943:
case 2444:
case 99:
case 260:
case 2014:
case 3899:
case 3423:
case 609:
case 262:
case 3948:
case 678:
case 646:
case 3239:
case 1488:
case 683:
case 3692:
case 1768:
case 1874:
case 939:
case 1695:
case 670:
case 3483:
case 3763:
case 2214:
case 672:
case 592:
case 2371:
case 1114:
case 3935:
case 590:
case 2343:
case 2960:
case 1505:
case 1177:
case 3720:
case 3502:
case 3830:
case 2136:
case 3290:
case 3700:
case 3522:
case 1383:
case 1817:
case 2923:
case 1896:
case 2018:
case 2903:
case 1404:
case 2277:
case 3944:
case 2565:
case 203:
case 3822:
case 1825:
case 491:
case 1735:
case 3689:
case 3732:
case 1151:
case 3375:
case 601:
case 3968:
case 3819:
case 1372:
case 2251:
case 2464:
case 2931:
case 1963:
case 565:
case 2094:
case 135:
case 2784:
case 2298:
case 2838:
case 4069:
case 2728:
case 1744:
case 1574:
case 2076:
case 3756:
case 3472:
case 1626:
case 1475:
case 1920:
case 3440:
case 2357:
case 3010:
case 1198:
case 1606:
case 345:
case 809:
case 878:
case 251:
case 3466:
case 234:
case 2350:
case 1241:
case 875:
case 986:
case 2141:
case 740:
case 2062:
case 1030:
case 2492:
case 1347:
case 3659:
case 292:
case 1671:
case 3715:
case 787:
case 2199:
case 1839:
case 2021:
case 138:
case 2754:
case 1299:
case 1709:
case 3074:
case 2001:
case 2281:
case 711:
case 517:
case 1729:
case 2395:
case 469:
case 2270:
case 551:
case 3664:
case 2306:
case 4008:
case 3297:
case 3707:
case 1680:
case 3216:
case 2769:
case 3837:
case 1170:
case 1061:
case 2033:
case 1491:
case 1019:
case 265:
case 2946:
case 3909:
case 2640:
case 5:
case 3453:
case 4084:
case 319:
case 3929:
case 1458:
case 2672:
case 3025:
case 3134:
case 473:
case 480:
case 956:
case 3005:
case 3285:
case 1282:
case 1915:
case 482:
case 3391:
case 3205:
case 3795:
case 3668:
case 1082:
case 3354:
case 1367:
case 1590:
case 1222:
case 595:
case 2631:
case 1663:
case 72:
case 675:
case 461:
case 2879:
case 719:
case 1219:
case 2102:
case 2233:
case 1926:
case 2893:
case 2429:
case 1906:
case 1454:
case 3016:
case 2953:
case 236:
case 2412:
case 1555:
case 3750:
case 1133:
case 2161:
case 2201:
case 2791:
case 132:
case 311:
case 562:
case 2966:
case 2660:
case 2221:
case 2593:
case 2947:
case 130:
case 1469:
case 3311:
case 954:
case 977:
case 1101:
case 1855:
case 458:
case 1890:
case 2623:
case 943:
case 3644:
case 1656:
case 3369:
case 748:
case 194:
case 2603:
case 3078:
case 2758:
case 2579:
case 3217:
case 2130:
case 3836:
case 1073:
case 1162:
case 496:
case 3455:
case 3336:
case 147:
case 2737:
case 1008:
case 87:
case 3918:
case 2807:
case 1567:
case 1390:
case 3003:
case 3283:
case 2827:
case 3554:
case 812:
case 1546:
case 1776:
case 2044:
case 965:
case 1436:
case 3352:
case 2259:
case 337:
case 1159:
case 180:
case 3143:
case 256:
case 2035:
case 4002:
case 1148:
case 3060:
case 3171:
case 934:
case 3511:
case 1718:
case 2451:
case 3976:
case 3670:
case 1164:
case 286:
case 150:
case 2910:
case 4030:
case 2393:
case 26:
case 990:
case 1634:
case 992:
case 618:
case 826:
case 325:
case 2379:
case 1846:
case 3854:
case 2498:
case 2527:
case 2685:
case 1867:
case 3031:
case 3994:
case 539:
case 1979:
case 1714:
case 432:
case 2625:
case 2476:
case 1437:
case 2268:
case 2550:
case 725:
case 806:
case 277:
case 3072:
case 2752:
case 3163:
case 612:
case 793:
case 1075:
case 158:
case 1638:
case 243:
case 494:
case 3633:
case 1993:
case 3858:
case 1566:
case 1547:
case 1777:
case 2826:
case 3120:
case 3998:
case 2736:
case 641:
case 2806:
case 3849:
case 824:
case 2895:
case 3601:
case 2955:
case 2059:
case 161:
case 1284:
case 3779:
case 737:
case 1553:
case 1751:
case 2418:
case 3132:
case 1228:
case 3203:
case 3793:
case 2244:
case 867:
case 3977:
case 3223:
case 1208:
case 1798:
case 1088:
case 3591:
case 2887:
case 936:
case 3439:
case 2617:
case 2108:
case 2696:
case 2990:
case 2128:
case 1144:
case 2850:
case 74:
case 815:
case 2857:
case 1058:
case 2741:
case 2610:
case 45:
case 2773:
case 3186:
case 3405:
case 2880:
case 3361:
case 1945:
case 1402:
case 3676:
case 3425:
case 1422:
case 2338:
case 185:
case 2212:
case 2154:
case 1840:
case 1109:
case 199:
case 771:
case 3875:
case 3694:
case 554:
case 577:
case 1872:
case 3319:
case 697:
case 1091:
case 1461:
case 3302:
case 3267:
case 3322:
case 1112:
case 3115:
case 1254:
case 3246:
case 2089:
case 962:
case 3107:
case 1742:
case 3618:
case 584:
case 1317:
case 1540:
case 3127:
case 1613:
case 3330:
case 2365:
case 2978:
case 2421:
case 3474:
case 1269:
case 2843:
case 48:
case 3981:
case 3417:
case 2557:
case 3047:
case 322:
case 2639:
case 2782:
case 2462:
case 320:
case 379:
case 728:
case 2111:
case 989:
case 328:
case 300:
case 3614:
case 2500:
case 2722:
case 720:
case 2832:
case 1860:
case 302:
case 722:
case 2520:
case 2702:
case 2292:
case 3921:
case 3247:
case 2974:
case 1192:
case 2655:
case 3901:
case 435:
case 3884:
case 2996:
case 2563:
case 1531:
case 3808:
case 1823:
case 1499:
case 2481:
case 2761:
case 3828:
case 3677:
case 3187:
case 3341:
case 1378:
case 3962:
case 951:
case 3497:
case 3067:
case 1503:
case 917:
case 2289:
case 3046:
case 1054:
case 1523:
case 3382:
case 1291:
case 1831:
case 1385:
case 2029:
case 2925:
case 2191:
case 1679:
case 371:
case 13:
case 2012:
case 3651:
case 2334:
case 1189:
case 3126:
case 2820:
case 1560:
case 1397:
case 2532:
case 1693:
case 2158:
case 3765:
case 3106:
case 2149:
case 1762:
case 3698:
case 1938:
case 2345:
case 833:
case 34:
case 716:
case 2951:
case 563:
case 133:
case 3268:
case 1602:
case 2891:
case 911:
case 3625:
case 1622:
case 1263:
case 1755:
case 421:
case 1131:
case 1394:
case 377:
case 354:
case 1619:
case 987:
case 2337:
case 786:
case 3595:
case 940:
case 1080:
case 1200:
case 1376:
case 942:
case 3806:
case 2998:
case 3736:
case 2120:
case 3826:
case 2858:
case 3494:
case 3064:
case 3955:
case 1952:
case 478:
case 409:
case 446:
case 2260:
case 2621:
case 3895:
case 520:
case 1892:
case 699:
case 3418:
case 3526:
case 685:
case 90:
case 3059:
case 2779:
case 4034:
case 2439:
case 1630:
case 2591:
case 1589:
case 3244:
case 1256:
case 2083:
case 974:
case 957:
case 3850:
case 2156:
case 3128:
case 384:
case 1103:
case 4045:
case 3617:
case 1123:
case 891:
case 3313:
case 1710:
case 1377:
case 2455:
case 784:
case 2336:
case 1183:
case 3678:
case 1509:
case 2003:
case 2918:
case 514:
case 1529:
case 3807:
case 2869:
case 3737:
case 63:
case 92:
case 3586:
case 2811:
case 3259:
case 3248:
case 2352:
case 1271:
case 2490:
case 2171:
case 472:
case 356:
case 500:
case 3035:
case 483:
case 2143:
case 3104:
case 470:
case 1257:
case 2976:
case 2713:
case 2180:
case 3451:
case 3886:
case 1000:
case 3616:
case 1020:
case 2157:
case 386:
case 743:
case 1398:
case 1812:
case 3379:
case 225:
case 3815:
case 444:
case 36:
case 1351:
case 3175:
case 1063:
case 2031:
case 3507:
case 3685:
case 1809:
case 1140:
case 3068:
case 1682:
case 691:
case 3527:
case 3498:
case 2854:
case 1381:
case 1835:
case 1295:
case 1166:
case 669:
case 3722:
case 1725:
case 2399:
case 2884:
case 2478:
case 1652:
case 2901:
case 118:
case 2247:
case 731:
case 3974:
case 2195:
case 3719:
case 2828:
case 1844:
case 2808:
case 861:
case 3563:
case 945:
case 1930:
case 888:
case 124:
case 2373:
case 3863:
case 79:
case 682:
case 3009:
case 1544:
case 3289:
case 3556:
case 673:
case 339:
case 2528:
case 1445:
case 593:
case 525:
case 858:
case 271:
case 3925:
case 3730:
case 2485:
case 2106:
case 106:
case 2126:
case 1535:
case 24:
case 4013:
case 1226:
case 1434:
case 1961:
case 3345:
case 1370:
case 1717:
case 3610:
case 2053:
case 3773:
case 2504:
case 1286:
case 3997:
case 1559:
case 1548:
case 3571:
case 216:
case 3857:
case 2425:
case 126:
case 1637:
case 2361:
case 1333:
case 2405:
case 3880:
case 2186:
case 2942:
case 2694:
case 2319:
case 505:
case 1215:
case 1146:
case 1982:
case 475:
case 3212:
case 2115:
case 3089:
case 2246:
case 2322:
case 2267:
case 739:
case 39:
case 141:
case 2127:
case 2745:
case 3169:
case 2107:
case 880:
case 2618:
case 1973:
case 2888:
case 1716:
case 1207:
case 1797:
case 1087:
case 3401:
case 3557:
case 1999:
case 2417:
case 2824:
case 2047:
case 1564:
case 17:
case 2804:
case 2734:
case 110:
case 2981:
case 3580:
case 208:
case 3092:
case 1301:
case 222:
case 1785:
case 23:
case 1442:
case 1334:
case 3445:
case 927:
case 637:
case 3015:
case 1470:
case 1925:
case 481:
case 2679:
case 2291:
case 2385:
case 1029:
case 2721:
case 2503:
case 1289:
case 3868:
case 569:
case 1009:
case 2054:
case 1556:
case 3434:
case 3342:
case 2258:
case 2938:
case 3717:
case 4018:
case 552:
case 2482:
case 1730:
case 3153:
case 3535:
case 1820:
case 2316:
case 2397:
case 1532:
case 1158:
case 77:
case 4094:
case 2011:
case 4:
case 367:
case 1719:
case 693:
case 2473:
case 1974:
case 573:
case 1832:
case 3705:
case 3166:
case 3381:
case 1702:
case 580:
case 403:
case 3725:
case 1500:
case 1722:
case 2965:
case 2378:
case 3930:
case 547:
case 324:
case 1481:
case 3568:
case 4076:
case 2803:
case 1690:
case 1563:
case 3007:
case 2531:
case 2069:
case 1917:
case 2499:
case 3087:
case 3207:
case 3797:
case 837:
case 2269:
case 1401:
case 3941:
case 966:
case 3050:
case 2396:
case 2742:
case 1169:
case 2374:
case 3321:
case 3785:
case 588:
case 1782:
case 3301:
case 3848:
case 561:
case 1871:
case 131:
case 1557:
case 98:
case 605:
case 718:
case 37:
case 2211:
case 558:
case 1338:
case 749:
case 1880:
case 893:
case 2402:
case 3006:
case 3286:
case 3559:
case 2419:
case 1997:
case 1916:
case 1543:
case 95:
case 1857:
case 2058:
case 1741:
case 1571:
case 3438:
case 462:
case 1209:
case 2091:
case 2781:
case 2461:
case 2305:
case 460:
case 299:
case 2872:
case 285:
case 1985:
case 3215:
case 2840:
case 2109:
case 2024:
case 2135:
case 814:
case 1526:
case 2866:
case 3071:
case 1418:
case 2004:
case 261:
case 3043:
case 2339:
case 288:
case 1895:
case 3232:
case 184:
case 4070:
case 2144:
case 4042:
case 1617:
case 1108:
case 555:
case 1990:
case 616:
case 3936:
case 3630:
case 2798:
case 2088:
case 2665:
case 2228:
case 3589:
case 1244:
case 3131:
case 1752:
case 3619:
case 608:
case 679:
case 333:
case 1587:
case 622:
case 1625:
case 932:
case 1736:
case 1806:
case 1494:
case 1064:
case 2547:
case 2777:
case 2310:
case 1595:
case 143:
case 994:
case 871:
case 3376:
case 3200:
case 2638:
case 1616:
case 3280:
case 3000:
case 1393:
case 186:
case 3398:
case 3257:
case 863:
case 1886:
case 2718:
case 1451:
case 4001:
case 3493:
case 3682:
case 1068:
case 3809:
case 2846:
case 1498:
case 4021:
case 628:
case 1685:
case 938:
case 315:
case 1815:
case 492:
case 1379:
case 16:
case 490:
case 53:
case 2275:
case 2634:
case 2028:
case 1414:
case 2546:
case 2288:
case 2008:
case 3529:
case 1807:
case 3377:
case 3710:
case 808:
case 879:
case 3512:
case 996:
case 1515:
case 822:
case 797:
case 3699:
case 1035:
case 2148:
case 280:
case 2084:
case 2794:
case 2204:
case 3243:
case 2355:
case 671:
case 2224:
case 3271:
case 2362:
case 1888:
case 2716:
case 2207:
case 2797:
case 1575:
case 1745:
case 3572:
case 3742:
case 1618:
case 856:
case 241:
case 3396:
case 355:
case 3770:
case 3317:
case 3613:
case 3430:
case 122:
case 2095:
case 2321:
case 27:
case 2859:
case 210:
case 1981:
case 654:
case 677:
case 1417:
case 1824:
case 212:
case 2848:
case 2564:
case 1496:
case 2637:
case 86:
case 2333:
case 1405:
case 1186:
case 1970:
case 226:
case 2548:
case 1524:
case 2026:
case 684:
case 1504:
case 2006:
case 3419:
case 2559:
case 533:
case 3781:
case 1588:
case 3091:
case 1302:
case 3461:
case 1115:
case 3254:
case 1246:
case 1267:
case 2438:
case 2215:
case 2982:
case 2146:
case 385:
case 2167:
case 886:
case 3129:
case 1694:
case 4055:
case 799:
case 171:
case 2922:
case 2902:
case 3189:
case 785:
case 843:
case 2015:
case 1651:
case 4039:
case 2544:
case 2868:
case 2919:
case 3721:
case 1528:
case 3503:
case 3831:
case 3385:
case 656:
case 3523:
case 1253:
case 3249:
case 2206:
case 2796:
case 2086:
case 14:
case 2342:
case 2961:
case 3397:
case 3693:
case 1126:
case 2535:
case 249:
case 1765:
case 1106:
case 66:
case 1247:
case 3192:
case 1921:
case 267:
case 1266:
case 3011:
case 1884:
case 1478:
case 3441:
case 1901:
case 100:
case 1614:
case 2147:
case 2835:
case 2295:
case 2705:
case 2166:
case 1677:
case 755:
case 1373:
case 1962:
case 3965:
case 3069:
case 3499:
case 2287:
case 1738:
case 3531:
case 3803:
case 114:
case 2027:
case 2020:
case 1157:
case 448:
case 352:
case 476:
case 2000:
case 549:
case 350:
case 506:
case 1180:
case 3645:
case 89:
case 2257:
case 1670:
case 2739:
case 215:
case 2809:
case 3846:
case 2682:
case 1569:
case 2829:
case 2172:
case 1994:
case 3275:
case 1272:
case 2812:
case 1240:
case 1918:
case 3288:
case 1869:
case 1023:
case 2056:
case 3913:
case 3776:
case 3546:
case 2509:
case 1283:
case 3567:
case 3028:
case 1336:
case 2183:
case 3452:
case 2641:
case 2512:
case 2377:
case 380:
case 1681:
case 1143:
case 91:
case 983:
case 4025:
case 929:
case 2032:
case 1060:
case 2699:
case 1352:
case 3355:
case 3436:
case 2243:
case 3794:
case 3084:
case 137:
case 3553:
case 1779:
case 1549:
case 512:
case 361:
case 3751:
case 1132:
case 1558:
case 3135:
case 510:
case 3024:
case 3847:
case 297:
case 1621:
case 2232:
case 4085:
case 782:
case 1601:
case 946:
case 909:
case 3339:
case 541:
case 747:
case 474:
case 1156:
case 2103:
case 2256:
case 2936:
case 3088:
case 1662:
case 1591:
case 3208:
case 3798:
case 105:
case 1410:
case 3168:
case 2755:
case 3075:
case 1072:
case 1163:
case 1891:
case 411:
case 3979:
case 1231:
case 2263:
case 3437:
case 3310:
case 3777:
case 1120:
case 1858:
case 1998:
case 3853:
case 3638:
case 442:
case 1633:
case 2661:
case 440:
case 1216:
case 1297:
case 2038:
case 3680:
case 2876:
case 3061:
case 3170:
case 1664:
case 1349:
case 396:
case 3657:
case 3353:
case 895:
case 823:
case 3810:
case 3022:
case 617:
case 270:
case 1391:
case 4060:
case 668:
case 1285:
case 681:
case 1909:
case 2954:
case 3019:
case 2406:
case 2185:
case 12:
case 1929:
case 3458:
case 2675:
case 2234:
case 437:
case 148:
case 2688:
case 253:
case 1447:
case 3273:
case 2594:
case 2818:
case 1096:
case 3907:
case 651:
case 915:
case 603:
case 338:
case 1074:
case 2576:
case 2767:
case 730:
case 3729:
case 4031:
case 1537:
case 2604:
case 1659:
case 1715:
case 2624:
case 3712:
case 1648:
case 2174:
case 1992:
case 187:
case 3121:
case 1852:
case 2684:
case 4072:
case 3855:
case 695:
case 2427:
case 3789:
case 3469:
case 623:
case 2407:
case 738:
case 689:
case 1217:
case 2753:
case 1165:
case 1706:
case 2117:
case 3230:
case 2608:
case 142:
case 3890:
case 2196:
case 394:
case 1369:
case 3950:
case 10:
case 2991:
case 2125:
case 2577:
case 2851:
case 3219:
case 997:
case 1795:
case 2329:
case 3222:
case 3590:
case 1354:
case 278:
case 1225:
case 246:
case 3555:
case 803:
case 157:
case 174:
case 1750:
case 2958:
case 659:
case 4083:
case 3261:
case 3454:
case 2898:
case 1016:
case 2514:
case 1446:
case 3906:
case 3600:
case 2949:
case 1467:
case 1097:
case 1460:
case 3607:
case 890:
case 3303:
case 2432:
case 2344:
case 892:
case 3323:
case 1582:
case 1113:
case 3627:
case 926:
case 3585:
case 764:
case 1841:
case 3878:
case 3764:
case 416:
case 4053:
case 3036:
case 3943:
case 834:
case 2881:
case 3597:
case 3428:
case 1948:
case 1239:
case 1899:
case 521:
case 307:
case 1384:
case 275:
case 2139:
case 2740:
case 3052:
case 2772:
case 3957:
case 1599:
case 2783:
case 1431:
case 1964:
case 2463:
case 3897:
case 3816:
case 3237:
case 2842:
case 1210:
case 941:
case 3176:
case 2400:
case 3885:
case 422:
case 2654:
case 1609:
case 1882:
case 2368:
case 2975:
case 2420:
case 1629:
case 3194:
case 479:
case 408:
case 97:
case 2079:
case 38:
case 698:
case 1612:
case 4047:
case 1771:
case 3615:
case 690:
case 967:
case 3340:
case 78:
case 692:
case 836:
case 2279:
case 3596:
case 1530:
case 3825:
case 2691:
case 428:
case 400:
case 572:
case 2760:
case 3805:
case 1732:
case 1802:
case 3475:
case 3626:
case 2658:
case 1472:
case 2364:
case 3900:
case 1010:
case 2723:
case 3037:
case 2833:
case 3574:
case 3744:
case 2521:
case 766:
case 2703:
case 1255:
case 1324:
case 665:
case 2348:
case 544:
case 3932:
case 327:
case 2821:
case 3488:
case 3874:
case 2533:
case 1692:
case 4067:
case 2801:
case 2155:
case 1483:
case 2731:
case 2190:
case 2908:
case 3817:
case 3236:
case 3956:
case 2013:
case 2443:
case 3404:
case 1519:
case 2928:
case 364:
case 3177:
case 1502:
case 949:
case 3383:
case 898:
case 1700:
case 701:
case 744:
case 3684:
case 2121:
case 2995:
case 454:
case 3407:
case 2632:
case 1593:
case 2789:
case 2099:
case 2469:
case 3427:
case 1791:
case 2987:
case 1579:
case 1749:
case 1130:
case 2073:
case 3753:
case 2162:
case 4064:
case 2041:
case 2411:
case 55:
case 443:
case 2950:
case 1307:
case 3265:
case 958:
case 2890:
case 1623:
case 58:
case 3851:
case 3486:
case 3747:
case 3577:
case 1315:
case 3991:
case 3034:
case 1879:
case 1122:
case 71:
case 845:
case 309:
case 346:
case 2590:
case 770:
case 729:
case 3329:
case 1119:
case 772:
case 2792:
case 2133:
case 1161:
case 1042:
case 2600:
case 2906:
case 3238:
case 566:
case 2454:
case 1953:
case 136:
case 2261:
case 1429:
case 3958:
case 2170:
case 2061:
case 2491:
case 3038:
case 2680:
case 2986:
case 1489:
case 1769:
case 1242:
case 1326:
case 2810:
case 3116:
case 2657:
case 1270:
case 296:
case 1306:
case 4035:
case 456:
case 2002:
case 2915:
case 3389:
case 329:
case 370:
case 383:
case 31:
case 778:
case 3234:
case 3426:
case 2458:
case 1672:
case 2019:
case 165:
case 1946:
case 3954:
case 353:
case 1062:
case 3688:
case 2030:
case 1492:
case 952:
case 1683:
case 486:
case 3178:
case 1141:
case 1387:
case 2927:
case 3818:
case 3594:
case 2907:
case 134:
case 1350:
case 3969:
case 1001:
case 1281:
case 3911:
case 2729:
case 1395:
case 969:
case 3767:
case 2839:
case 1754:
case 2709:
case 3576:
case 192:
case 2671:
case 190:
case 2510:
case 721:
case 2643:
case 301:
case 2366:
case 344:
case 1931:
case 1464:
case 2963:
case 3279:
case 2596:
case 2517:
case 1:
case 1251:
case 2735:
case 857:
case 3760:
case 2151:
case 1565:
case 103:
case 2825:
case 991:
case 1653:
case 596:
case 2900:
case 3649:
case 151:
case 2626:
case 2920:
case 1728:
case 1380:
case 3293:
case 3703:
case 3723:
case 1708:
case 2037:
case 1838:
case 648:
case 676:
case 4012:
case 1647:
case 840:
case 181:
case 2252:
case 3984:
case 1152:
case 3731:
case 3801:
case 3155:
case 1214:
case 168:
case 4029:
case 538:
case 2874:
case 2695:
case 3821:
case 3928:
case 264:
case 1459:
case 1277:
case 2650:
case 3443:
case 811:
case 1448:
case 3862:
case 2383:
case 2687:
case 1865:
case 2505:
case 2177:
case 2627:
case 3344:
case 159:
case 1356:
case 3432:
case 2303:
case 594:
case 2036:
case 657:
case 25:
case 2764:
case 3213:
case 3924:
case 2408:
case 532:
case 2360:
case 3904:
case 1444:
case 1014:
case 160:
case 3772:
case 999:
case 3611:
case 1545:
case 207:
case 1788:
case 2237:
case 2816:
case 1320:
case 819:
case 2897:
case 1300:
case 642:
case 1276:
case 266:
case 2957:
case 955:
case 3842:
case 1972:
case 123:
case 3975:
case 3368:
case 3654:
case 1940:
case 611:
case 195:
case 4092:
case 1667:
case 1363:
case 3079:
case 1294:
case 2759:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1763143201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,];
var gg_b = "1763143201/";

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
