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
case 4067:
case 3365:
case 3118:
case 1788:
case 56:
case 2100:
case 2182:
case 1743:
case 1479:
case 2886:
case 3963:
case 712:
case 3686:
case 1547:
case 1535:
case 3817:
case 2255:
case 4070:
case 2366:
case 140:
case 831:
case 3268:
case 2748:
case 3224:
case 52:
case 2170:
case 2562:
case 3312:
case 2856:
case 1245:
case 1237:
case 1921:
case 2221:
case 2509:
case 496:
case 617:
case 1917:
case 581:
case 1329:
case 1409:
case 2098:
case 1758:
case 1383:
case 147:
case 1766:
case 1457:
case 4000:
case 4082:
case 3022:
case 1075:
case 3668:
case 983:
case 3594:
case 413:
case 3490:
case 99:
case 1985:
case 1860:
case 1726:
case 2127:
case 24:
case 2476:
case 3062:
case 276:
case 1131:
case 2173:
case 744:
case 3664:
case 3959:
case 15:
case 2195:
case 3628:
case 960:
case 1344:
case 2828:
case 1961:
case 3539:
case 904:
case 1090:
case 3907:
case 2522:
case 185:
case 2261:
case 3475:
case 3493:
case 1380:
case 492:
case 758:
case 539:
case 3649:
case 1823:
case 4003:
case 1754:
case 2094:
case 979:
case 2326:
case 2406:
case 136:
case 3091:
case 284:
case 1506:
case 1859:
case 967:
case 2744:
case 3228:
case 920:
case 3325:
case 1992:
case 3087:
case 755:
case 678:
case 1350:
case 3114:
case 2016:
case 1807:
case 2292:
case 2780:
case 1108:
case 1036:
case 300:
case 4073:
case 505:
case 2769:
case 716:
case 3249:
case 2859:
case 1744:
case 723:
case 3928:
case 2506:
case 3751:
case 184:
case 351:
case 791:
case 1406:
case 1326:
case 2372:
case 288:
case 3110:
case 745:
case 3223:
case 3505:
case 1702:
case 635:
case 1016:
case 567:
case 4031:
case 2784:
case 520:
case 2350:
case 1661:
case 1828:
case 2576:
case 2344:
case 3259:
case 1864:
case 3781:
case 908:
case 25:
case 1111:
case 686:
case 504:
case 2131:
case 3498:
case 939:
case 3519:
case 2369:
case 2754:
case 1849:
case 3575:
case 3439:
case 2823:
case 2422:
case 61:
case 609:
case 2302:
case 2380:
case 3207:
case 3677:
case 1384:
case 285:
case 638:
case 1750:
case 1522:
case 527:
case 1692:
case 2961:
case 30:
case 1217:
case 426:
case 2409:
case 1098:
case 4042:
case 3332:
case 1152:
case 2917:
case 3076:
case 2462:
case 1937:
case 59:
case 2921:
case 3765:
case 2985:
case 1557:
case 2019:
case 1753:
case 2093:
case 4004:
case 157:
case 1039:
case 3590:
case 2457:
case 172:
case 2766:
case 2820:
case 3246:
case 3101:
case 247:
case 411:
case 2535:
case 103:
case 466:
case 1886:
case 2743:
case 2479:
case 2645:
case 1447:
case 1621:
case 1591:
case 3712:
case 1685:
case 96:
case 2487:
case 150:
case 3924:
case 240:
case 1587:
case 3646:
case 833:
case 232:
case 3220:
case 2846:
case 2428:
case 221:
case 3796:
case 2308:
case 4044:
case 3334:
case 3310:
case 1698:
case 36:
case 1528:
case 293:
case 1489:
case 2150:
case 1564:
case 3206:
case 656:
case 123:
case 3141:
case 1460:
case 1639:
case 3020:
case 1055:
case 4080:
case 4069:
case 1423:
case 1822:
case 1303:
case 1126:
case 3893:
case 1905:
case 3819:
case 3875:
case 2693:
case 2205:
case 2619:
case 1731:
case 1477:
case 216:
case 2037:
case 381:
case 849:
case 2180:
case 74:
case 261:
case 1021:
case 2378:
case 244:
case 1298:
case 32:
case 148:
case 1395:
case 1311:
case 2144:
case 4072:
case 2703:
case 1407:
case 2219:
case 90:
case 1140:
case 2293:
case 3461:
case 3805:
case 2331:
case 489:
case 1975:
case 3909:
case 1742:
case 3421:
case 431:
case 928:
case 524:
case 3647:
case 3635:
case 3059:
case 4053:
case 1887:
case 2290:
case 1704:
case 2374:
case 994:
case 339:
case 1061:
case 757:
case 180:
case 2994:
case 1370:
case 397:
case 629:
case 3718:
case 1294:
case 1446:
case 3089:
case 473:
case 1463:
case 1862:
case 3235:
case 3247:
case 2767:
case 1166:
case 813:
case 3371:
case 564:
case 2456:
case 703:
case 3890:
case 951:
case 2304:
case 1092:
case 1774:
case 1158:
case 3338:
case 500:
case 3023:
case 1694:
case 1936:
case 390:
case 595:
case 652:
case 750:
case 187:
case 1563:
case 3064:
case 1456:
case 900:
case 3028:
case 3947:
case 2556:
case 1342:
case 3215:
case 4043:
case 3333:
case 2809:
case 811:
case 3657:
case 826:
case 953:
case 2857:
case 1770:
case 525:
case 379:
case 642:
case 740:
case 1752:
case 630:
case 2092:
case 1690:
case 2774:
case 1916:
case 1424:
case 3713:
case 3799:
case 594:
case 998:
case 2586:
case 907:
case 1847:
case 2879:
case 2742:
case 1486:
case 2891:
case 4058:
case 433:
case 3615:
case 3691:
case 327:
case 1782:
case 2446:
case 3585:
case 1636:
case 3257:
case 280:
case 2061:
case 2352:
case 3816:
case 1374:
case 2990:
case 2704:
case 2143:
case 3976:
case 2298:
case 383:
case 2184:
case 1559:
case 4026:
case 75:
case 39:
case 859:
case 3710:
case 1169:
case 1378:
case 50:
case 254:
case 1045:
case 1102:
case 1331:
case 3151:
case 2919:
case 2327:
case 1275:
case 2085:
case 1293:
case 2140:
case 2407:
case 1219:
case 1703:
case 2239:
case 1144:
case 3222:
case 785:
case 2311:
case 3561:
case 2395:
case 614:
case 6:
case 3898:
case 223:
case 18:
case 1876:
case 1150:
case 2564:
case 3314:
case 2528:
case 193:
case 3906:
case 2489:
case 2698:
case 2154:
case 1172:
case 2778:
case 646:
case 291:
case 1308:
case 3056:
case 121:
case 1428:
case 788:
case 2731:
case 1675:
case 2477:
case 2126:
case 1577:
case 2303:
case 2822:
case 3181:
case 3839:
case 1711:
case 2055:
case 155:
case 523:
case 4001:
case 2845:
case 1365:
case 2956:
case 955:
case 3645:
case 1821:
case 916:
case 3104:
case 3491:
case 1732:
case 2006:
case 3535:
case 1817:
case 846:
case 1516:
case 87:
case 332:
case 2171:
case 340:
case 1436:
case 438:
case 2968:
case 720:
case 98:
case 1133:
case 2416:
case 41:
case 1268:
case 2536:
case 3245:
case 2765:
case 704:
case 2076:
case 3462:
case 1286:
case 3329:
case 3174:
case 554:
case 2332:
case 3758:
case 2986:
case 3409:
case 958:
case 20:
case 3820:
case 2246:
case 961:
case 2494:
case 3457:
case 3075:
case 1624:
case 4038:
case 760:
case 1490:
case 727:
case 3726:
case 1009:
case 294:
case 2689:
case 2660:
case 3131:
case 837:
case 124:
case 1959:
case 1664:
case 1628:
case 1598:
case 35:
case 783:
case 2781:
case 4010:
case 666:
case 3090:
case 580:
case 1475:
case 385:
case 1741:
case 1493:
case 1419:
case 3302:
case 1057:
case 3380:
case 1196:
case 1649:
case 3422:
case 3178:
case 2575:
case 2519:
case 3369:
case 2623:
case 3754:
case 228:
case 2260:
case 164:
case 842:
case 1079:
case 251:
case 1015:
case 1091:
case 2964:
case 3506:
case 2035:
case 626:
case 2928:
case 2047:
case 1381:
case 141:
case 195:
case 2607:
case 3350:
case 1114:
case 2341:
case 268:
case 2505:
case 2223:
case 1249:
case 2134:
case 417:
case 3103:
case 2381:
case 3744:
case 869:
case 1928:
case 1964:
case 1659:
case 987:
case 2091:
case 2015:
case 877:
case 1289:
case 3406:
case 143:
case 512:
case 1134:
case 2923:
case 2249:
case 200:
case 1505:
case 1949:
case 1223:
case 168:
case 613:
case 3702:
case 2325:
case 1277:
case 3661:
case 829:
case 3864:
case 72:
case 3111:
case 2628:
case 2664:
case 2959:
case 376:
case 2062:
case 1660:
case 1689:
case 1498:
case 194:
case 34:
case 781:
case 3340:
case 870:
case 4030:
case 3849:
case 1593:
case 1519:
case 3094:
case 1623:
case 1575:
case 2649:
case 2196:
case 1439:
case 1797:
case 2057:
case 1207:
case 2493:
case 1677:
case 2539:
case 3522:
case 3750:
case 1725:
case 165:
case 119:
case 10:
case 3152:
case 2286:
case 4033:
case 3937:
case 3221:
case 3509:
case 3945:
case 948:
case 2656:
case 1765:
case 3562:
case 963:
case 3824:
case 2490:
case 3285:
case 2594:
case 2668:
case 954:
case 1590:
case 478:
case 2946:
case 1620:
case 739:
case 372:
case 558:
case 3655:
case 1494:
case 1246:
case 2855:
case 1006:
case 3358:
case 2817:
case 303:
case 521:
case 2963:
case 3886:
case 3617:
case 1263:
case 3100:
case 3182:
case 3447:
case 2821:
case 2118:
case 1837:
case 2365:
case 2256:
case 3579:
case 350:
case 1536:
case 2224:
case 3685:
case 3748:
case 2268:
case 692:
case 1924:
case 1416:
case 2133:
case 1968:
case 856:
case 705:
case 1646:
case 3587:
case 1199:
case 2436:
case 3366:
case 2197:
case 633:
case 743:
case 391:
case 1310:
case 1334:
case 3489:
case 950:
case 3698:
case 1063:
case 2330:
case 2314:
case 323:
case 2898:
case 501:
case 3460:
case 2592:
case 2181:
case 725:
case 3822:
case 3905:
case 903:
case 345:
case 499:
case 2024:
case 3477:
case 3731:
case 181:
case 972:
case 2396:
case 2710:
case 2734:
case 363:
case 1606:
case 1730:
case 1276:
case 3298:
case 671:
case 2976:
case 348:
case 1046:
case 3311:
case 3395:
case 442:
case 3239:
case 3085:
case 547:
case 1805:
case 3993:
case 2521:
case 2615:
case 2209:
case 47:
case 1909:
case 204:
case 1537:
case 838:
case 4065:
case 2437:
case 3586:
case 2445:
case 809:
case 1647:
case 81:
case 976:
case 3616:
case 3887:
case 3704:
case 1007:
case 1132:
case 1485:
case 3990:
case 2687:
case 139:
case 2738:
case 3370:
case 1836:
case 2112:
case 1718:
case 2257:
case 197:
case 3446:
case 3294:
case 260:
case 1957:
case 3809:
case 1060:
case 2333:
case 1089:
case 3862:
case 2279:
case 1247:
case 1235:
case 4012:
case 835:
case 1313:
case 2287:
case 4:
case 3092:
case 3774:
case 2555:
case 1338:
case 105:
case 220:
case 3524:
case 2318:
case 2165:
case 2657:
case 1455:
case 3300:
case 3382:
case 387:
case 1064:
case 2313:
case 1947:
case 1028:
case 606:
case 2235:
case 3767:
case 2247:
case 1279:
case 3342:
case 1291:
case 1609:
case 2060:
case 2991:
case 2455:
case 1049:
case 1165:
case 689:
case 2023:
case 1555:
case 2987:
case 3520:
case 3468:
case 3304:
case 936:
case 1287:
case 54:
case 1799:
case 1445:
case 2647:
case 2635:
case 576:
case 2301:
case 3847:
case 1517:
case 3183:
case 3835:
case 1262:
case 2909:
case 3148:
case 1679:
case 1615:
case 1521:
case 3782:
case 3700:
case 3636:
case 160:
case 1585:
case 1257:
case 2836:
case 1112:
case 2485:
case 1816:
case 183:
case 22:
case 2730:
case 2276:
case 1086:
case 3998:
case 344:
case 2606:
case 724:
case 947:
case 1710:
case 361:
case 3378:
case 1396:
case 3102:
case 281:
case 673:
case 3180:
case 1151:
case 4041:
case 707:
case 2461:
case 469:
case 452:
case 3605:
case 3703:
case 477:
case 1222:
case 557:
case 3939:
case 2922:
case 3507:
case 2676:
case 38:
case 1898:
case 2206:
case 2141:
case 1330:
case 3150:
case 3876:
case 26:
case 1906:
case 1125:
case 393:
case 2310:
case 3560:
case 764:
case 932:
case 3428:
case 940:
case 1068:
case 3693:
case 3619:
case 3205:
case 2875:
case 3727:
case 810:
case 3577:
case 901:
case 3711:
case 3795:
case 795:
case 1592:
case 3773:
case 3449:
case 2020:
case 1622:
case 3793:
case 1160:
case 3719:
case 1572:
case 1189:
case 2450:
case 2895:
case 2811:
case 2472:
case 3066:
case 2873:
case 2128:
case 3611:
case 735:
case 2164:
case 460:
case 3581:
case 2776:
case 2230:
case 2214:
case 1177:
case 1914:
case 1930:
case 333:
case 115:
case 1123:
case 3896:
case 2910:
case 1210:
case 2696:
case 2149:
case 3908:
case 214:
case 1580:
case 559:
case 3705:
case 3295:
case 467:
case 3603:
case 2469:
case 420:
case 2402:
case 80:
case 819:
case 3339:
case 71:
case 709:
case 2322:
case 4049:
case 3043:
case 1107:
case 2614:
case 13:
case 3161:
case 3398:
case 2706:
case 2444:
case 1610:
case 2296:
case 1634:
case 371:
case 3088:
case 4028:
case 663:
case 3682:
case 1548:
case 2357:
case 3736:
case 237:
case 2618:
case 3394:
case 1804:
case 1638:
case 2448:
case 1787:
case 4068:
case 1583:
case 129:
case 3084:
case 680:
case 4024:
case 1529:
case 2735:
case 865:
case 2543:
case 2901:
case 3185:
case 3432:
case 2633:
case 828:
case 1779:
case 3512:
case 2362:
case 1443:
case 2097:
case 1757:
case 242:
case 177:
case 851:
case 3282:
case 1918:
case 1553:
case 152:
case 2025:
case 1163:
case 2387:
case 1041:
case 1238:
case 511:
case 1874:
case 2453:
case 2852:
case 2999:
case 1120:
case 526:
case 3155:
case 1213:
case 2081:
case 3667:
case 868:
case 3942:
case 913:
case 1458:
case 1709:
case 49:
case 3565:
case 2391:
case 2168:
case 1566:
case 389:
case 841:
case 2041:
case 1387:
case 2163:
case 252:
case 1025:
case 3072:
case 3794:
case 2553:
case 2466:
case 2918:
case 1870:
case 4046:
case 513:
case 130:
case 3900:
case 2757:
case 1218:
case 3982:
case 1097:
case 1315:
case 42:
case 2762:
case 3242:
case 710:
case 3465:
case 2271:
case 596:
case 2299:
case 1081:
case 2335:
case 1867:
case 481:
case 2347:
case 1999:
case 2120:
case 3716:
case 966:
case 2583:
case 229:
case 3952:
case 2787:
case 199:
case 1186:
case 2638:
case 3069:
case 1618:
case 824:
case 1483:
case 137:
case 3080:
case 2548:
case 1051:
case 2443:
case 1633:
case 2842:
case 4063:
case 3871:
case 3813:
case 1543:
case 3412:
case 1735:
case 1747:
case 2146:
case 2529:
case 2201:
case 3532:
case 2699:
case 3973:
case 658:
case 1322:
case 775:
case 2159:
case 1480:
case 1402:
case 4023:
case 3083:
case 3927:
case 405:
case 2502:
case 3231:
case 114:
case 2569:
case 3393:
case 4077:
case 3375:
case 2484:
case 3278:
case 734:
case 3608:
case 3834:
case 218:
case 1540:
case 2610:
case 1012:
case 2634:
case 1444:
case 4089:
case 1706:
case 23:
case 2107:
case 2032:
case 661:
case 2544:
case 2550:
case 302:
case 1873:
case 1472:
case 497:
case 3541:
case 592:
case 1450:
case 4007:
case 3305:
case 3425:
case 2189:
case 655:
case 439:
case 2572:
case 2160:
case 3631:
case 693:
case 1526:
case 4059:
case 1696:
case 256:
case 331:
case 1065:
case 1910:
case 2123:
case 3208:
case 2306:
case 17:
case 3798:
case 2914:
case 2930:
case 146:
case 2177:
case 1776:
case 1230:
case 1214:
case 742:
case 465:
case 1179:
case 1324:
case 2848:
case 1115:
case 1404:
case 2400:
case 2883:
case 2147:
case 2482:
case 931:
case 3418:
case 322:
case 3958:
case 1030:
case 1843:
case 2363:
case 3513:
case 1442:
case 3629:
case 3832:
case 2829:
case 1265:
case 533:
case 902:
case 3008:
case 110:
case 1356:
case 1888:
case 2034:
case 973:
case 1474:
case 2853:
case 1109:
case 2724:
case 1570:
case 3031:
case 1720:
case 799:
case 1552:
case 359:
case 282:
case 1386:
case 1932:
case 3190:
case 2232:
case 3501:
case 3345:
case 1212:
case 1665:
case 685:
case 2473:
case 2495:
case 1697:
case 7:
case 2850:
case 1777:
case 2307:
case 1573:
case 21:
case 1681:
case 2728:
case 2764:
case 1122:
case 3244:
case 2359:
case 3175:
case 2951:
case 1760:
case 65:
case 3669:
case 2403:
case 311:
case 2802:
case 1018:
case 2869:
case 3602:
case 688:
case 1941:
case 3004:
case 1225:
case 1503:
case 1707:
case 235:
case 3761:
case 2981:
case 746:
case 3644:
case 2099:
case 77:
case 1364:
case 2013:
case 2844:
case 1759:
case 1651:
case 820:
case 989:
case 2360:
case 274:
case 40:
case 3926:
case 3105:
case 1241:
case 313:
case 135:
case 3950:
case 3684:
case 1377:
case 2503:
case 2941:
case 3000:
case 3082:
case 1997:
case 3254:
case 278:
case 1802:
case 1880:
case 1323:
case 3640:
case 1389:
case 2840:
case 2033:
case 756:
case 396:
case 2281:
case 715:
case 1844:
case 1099:
case 2364:
case 3530:
case 1071:
case 2328:
case 805:
case 3434:
case 684:
case 109:
case 11:
case 3361:
case 3284:
case 2625:
case 2573:
case 1307:
case 3052:
case 2431:
case 2777:
case 1641:
case 1850:
case 2527:
case 1495:
case 2697:
case 138:
case 1749:
case 2854:
case 1473:
case 3897:
case 3969:
case 2723:
case 3070:
case 3654:
case 3626:
case 3596:
case 2251:
case 718:
case 186:
case 3240:
case 897:
case 3139:
case 1359:
case 3944:
case 1001:
case 2681:
case 2478:
case 182:
case 657:
case 3983:
case 3666:
case 729:
case 3011:
case 400:
case 2720:
case 1346:
case 1768:
case 2162:
case 1724:
case 3027:
case 672:
case 2109:
case 3948:
case 2474:
case 4087:
case 3385:
case 1912:
case 3194:
case 3401:
case 1467:
case 2096:
case 573:
case 1232:
case 4079:
case 2567:
case 3317:
case 4015:
case 3658:
case 2386:
case 407:
case 86:
case 1482:
case 1400:
case 1135:
case 1883:
case 392:
case 4057:
case 1320:
case 769:
case 650:
case 752:
case 3266:
case 2115:
case 2404:
case 2368:
case 3518:
case 1848:
case 2179:
case 2500:
case 3438:
case 1010:
case 2888:
case 1965:
case 3499:
case 210:
case 3812:
case 1542:
case 3413:
case 3737:
case 1829:
case 3116:
case 4062:
case 424:
case 2187:
case 1632:
case 2030:
case 2843:
case 4009:
case 2631:
case 1793:
case 2425:
case 1627:
case 2305:
case 2541:
case 1066:
case 1611:
case 2497:
case 1525:
case 803:
case 3550:
case 3177:
case 3930:
case 3426:
case 315:
case 1058:
case 2481:
case 3123:
case 231:
case 850:
case 3210:
case 66:
case 1931:
case 2375:
case 3569:
case 2319:
case 2231:
case 2927:
case 3580:
case 2083:
case 1211:
case 1295:
case 2995:
case 2911:
case 517:
case 1043:
case 2451:
case 2029:
case 273:
case 33:
case 681:
case 1161:
case 3634:
case 3610:
case 318:
case 412:
case 2137:
case 1818:
case 2080:
case 1682:
case 2145:
case 575:
case 370:
case 1270:
case 1736:
case 876:
case 3804:
case 3638:
case 608:
case 2390:
case 3787:
case 697:
case 3583:
case 1117:
case 2604:
case 2838:
case 2716:
case 3146:
case 2532:
case 938:
case 1267:
case 2813:
case 2044:
case 2412:
case 1432:
case 909:
case 1833:
case 91:
case 2642:
case 3779:
case 1512:
case 3842:
case 48:
case 3715:
case 3757:
case 2900:
case 2982:
case 605:
case 3918:
case 1282:
case 1200:
case 884:
case 2794:
case 1054:
case 369:
case 2204:
case 352:
case 578:
case 2050:
case 2674:
case 792:
case 3163:
case 690:
case 289:
case 3238:
case 1904:
case 3041:
case 3874:
case 2801:
case 4037:
case 3299:
case 3601:
case 3213:
case 2465:
case 1667:
case 1026:
case 935:
case 3709:
case 444:
case 206:
case 620:
case 3852:
case 3566:
case 2904:
case 667:
case 189:
case 2652:
case 1204:
case 2200:
case 2282:
case 330:
case 3870:
case 448:
case 535:
case 3097:
case 1982:
case 3218:
case 342:
case 1900:
case 106:
case 2565:
case 3315:
case 3124:
case 463:
case 3233:
case 2026:
case 454:
case 978:
case 3867:
case 1801:
case 1274:
case 2117:
case 2084:
case 660:
case 2974:
case 538:
case 3186:
case 85:
case 2121:
case 337:
case 51:
case 2736:
case 1080:
case 1145:
case 1002:
case 1137:
case 4055:
case 2818:
case 3357:
case 3051:
case 423:
case 2512:
case 3362:
case 2833:
case 3429:
case 1642:
case 2432:
case 975:
case 1871:
case 1967:
case 1899:
case 3543:
case 3747:
case 2267:
case 604:
case 1532:
case 586:
case 3480:
case 1995:
case 3803:
case 1911:
case 917:
case 3469:
case 2211:
case 1083:
case 2603:
case 1048:
case 1231:
case 1393:
case 1319:
case 2227:
case 3540:
case 2088:
case 1608:
case 1834:
case 1810:
case 271:
case 2551:
case 2978:
case 683:
case 3296:
case 2398:
case 2161:
case 3706:
case 3630:
case 1029:
case 847:
case 2814:
case 2043:
case 2830:
case 1739:
case 2673:
case 3164:
case 102:
case 2611:
case 2695:
case 3472:
case 480:
case 3873:
case 2066:
case 1541:
case 1903:
case 3811:
case 3895:
case 1305:
case 3450:
case 2793:
case 1053:
case 711:
case 1631:
case 2775:
case 3827:
case 801:
case 726:
case 3065:
case 3910:
case 1798:
case 233:
case 840:
case 2192:
case 346:
case 2581:
case 3214:
case 3500:
case 3324:
case 3179:
case 3404:
case 3368:
case 3191:
case 3115:
case 2266:
case 2355:
case 1418:
case 1683:
case 855:
case 1571:
case 1513:
case 3442:
case 3030:
case 1599:
case 2258:
case 1433:
case 2643:
case 2116:
case 3265:
case 2745:
case 2737:
case 2471:
case 3356:
case 2499:
case 2688:
case 515:
case 816:
case 3612:
case 706:
case 2385:
case 2027:
case 3109:
case 2948:
case 3570:
case 861:
case 1031:
case 844:
case 2011:
case 1755:
case 162:
case 2666:
case 2983:
case 518:
case 9:
case 3386:
case 914:
case 2929:
case 1190:
case 3932:
case 3567:
case 3858:
case 1943:
case 1345:
case 2865:
case 1337:
case 3096:
case 2321:
case 1078:
case 3665:
case 2194:
case 2969:
case 529:
case 2980:
case 3697:
case 1984:
case 3431:
case 607:
case 2825:
case 3573:
case 1792:
case 2198:
case 3511:
case 2361:
case 1841:
case 3625:
case 2067:
case 937:
case 3681:
case 773:
case 1496:
case 3122:
case 2881:
case 166:
case 3760:
case 1193:
case 2240:
case 334:
case 3789:
case 403:
case 2626:
case 999:
case 1940:
case 2972:
case 552:
case 2254:
case 472:
case 1680:
case 2082:
case 457:
case 3225:
case 3941:
case 2950:
case 2392:
case 1761:
case 812:
case 213:
case 1644:
case 3759:
case 3281:
case 3408:
case 3364:
case 641:
case 1534:
case 3033:
case 731:
case 2851:
case 1926:
case 1042:
case 3038:
case 3925:
case 113:
case 3241:
case 530:
case 2761:
case 2004:
case 3377:
case 4093:
case 2680:
case 1082:
case 2602:
case 1254:
case 211:
case 3802:
case 2669:
case 969:
case 952:
case 3389:
case 887:
case 3360:
case 196:
case 1530:
case 1514:
case 1410:
case 3981:
case 977:
case 3427:
case 1198:
case 309:
case 1361:
case 2074:
case 1825:
case 2984:
case 3176:
case 537:
case 3850:
case 3495:
case 1980:
case 599:
case 2269:
case 3749:
case 440:
case 3473:
case 338:
case 3531:
case 2202:
case 1969:
case 1626:
case 880:
case 2193:
case 1240:
case 2175:
case 3764:
case 1139:
case 2496:
case 694:
case 382:
case 488:
case 1666:
case 262:
case 1095:
case 5:
case 3574:
case 514:
case 2031:
case 3768:
case 2653:
case 149:
case 854:
case 93:
case 1385:
case 3853:
case 1401:
case 1194:
case 1288:
case 3912:
case 3467:
case 3756:
case 1865:
case 619:
case 2337:
case 2229:
case 3232:
case 2501:
case 1929:
case 1243:
case 2190:
case 1658:
case 1003:
case 2966:
case 1355:
case 192:
case 2538:
case 3400:
case 3135:
case 3883:
case 3147:
case 3482:
case 3848:
case 2648:
case 2253:
case 4090:
case 546:
case 1533:
case 3010:
case 3034:
case 2721:
case 1812:
case 2136:
case 2008:
case 45:
case 1745:
case 2832:
case 1643:
case 3829:
case 3632:
case 3363:
case 3786:
case 2571:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1761602402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,];
var gg_b = "1761602402/";

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
