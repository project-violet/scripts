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
case 1486:
case 3845:
case 2390:
case 526:
case 73:
case 1905:
case 3246:
case 2156:
case 183:
case 2545:
case 1812:
case 3587:
case 322:
case 1925:
case 663:
case 2078:
case 771:
case 3646:
case 694:
case 169:
case 2001:
case 787:
case 360:
case 2763:
case 2325:
case 1402:
case 4043:
case 504:
case 2305:
case 623:
case 3900:
case 2498:
case 3072:
case 2285:
case 1487:
case 3144:
case 555:
case 3418:
case 3247:
case 2254:
case 2157:
case 1767:
case 1011:
case 2149:
case 3937:
case 3828:
case 2571:
case 3522:
case 2508:
case 3089:
case 338:
case 1898:
case 2440:
case 1883:
case 58:
case 4032:
case 3808:
case 2750:
case 2351:
case 888:
case 2822:
case 1948:
case 3562:
case 38:
case 538:
case 3868:
case 3356:
case 2876:
case 1120:
case 2133:
case 2275:
case 3953:
case 2568:
case 2716:
case 1779:
case 4070:
case 1409:
case 2074:
case 3881:
case 887:
case 3499:
case 3797:
case 715:
case 3125:
case 2581:
case 2675:
case 3105:
case 1195:
case 355:
case 562:
case 1634:
case 1730:
case 3577:
case 304:
case 2365:
case 2723:
case 3252:
case 3006:
case 2641:
case 2142:
case 3026:
case 2258:
case 1035:
case 2877:
case 3357:
case 560:
case 3349:
case 2717:
case 2419:
case 1462:
case 2703:
case 3529:
case 3082:
case 2473:
case 2241:
case 522:
case 1234:
case 3030:
case 2504:
case 218:
case 520:
case 1599:
case 995:
case 788:
case 2829:
case 326:
case 1894:
case 3509:
case 2088:
case 1726:
case 2658:
case 3804:
case 2093:
case 3735:
case 3279:
case 4016:
case 3386:
case 3627:
case 6:
case 3848:
case 2274:
case 631:
case 2328:
case 3124:
case 3302:
case 358:
case 2551:
case 953:
case 2109:
case 1392:
case 2075:
case 1194:
case 718:
case 2810:
case 2674:
case 67:
case 2770:
case 2308:
case 3851:
case 3322:
case 3890:
case 3415:
case 500:
case 1318:
case 2661:
case 2293:
case 3940:
case 690:
case 1752:
case 364:
case 1034:
case 1696:
case 2505:
case 2058:
case 2693:
case 579:
case 2739:
case 998:
case 1173:
case 3805:
case 2918:
case 1296:
case 3682:
case 44:
case 148:
case 961:
case 1895:
case 1964:
case 3052:
case 524:
case 3994:
case 2221:
case 3549:
case 1531:
case 2201:
case 2999:
case 2278:
case 2857:
case 1924:
case 593:
case 1746:
case 170:
case 2849:
case 2544:
case 3672:
case 1399:
case 2743:
case 3309:
case 1198:
case 300:
case 453:
case 1183:
case 109:
case 1860:
case 818:
case 3046:
case 3145:
case 1611:
case 3556:
case 421:
case 2284:
case 3164:
case 113:
case 3376:
case 1981:
case 3362:
case 2255:
case 85:
case 1759:
case 94:
case 2381:
case 885:
case 271:
case 335:
case 2732:
case 1211:
case 1853:
case 498:
case 3738:
case 2914:
case 2460:
case 2655:
case 3689:
case 2085:
case 1968:
case 2792:
case 1550:
case 613:
case 3463:
case 440:
case 1728:
case 1370:
case 442:
case 227:
case 3798:
case 2256:
case 3491:
case 2970:
case 3889:
case 3584:
case 2567:
case 1083:
case 1421:
case 1653:
case 477:
case 481:
case 3071:
case 2884:
case 2022:
case 2649:
case 3064:
case 1339:
case 2087:
case 1260:
case 3644:
case 1563:
case 2411:
case 2069:
case 3665:
case 856:
case 2154:
case 1660:
case 1455:
case 3358:
case 2257:
case 707:
case 3934:
case 2572:
case 1745:
case 749:
case 4031:
case 584:
case 196:
case 3265:
case 3244:
case 2821:
case 3147:
case 384:
case 190:
case 3561:
case 3205:
case 1896:
case 1343:
case 1724:
case 573:
case 399:
case 1600:
case 1704:
case 254:
case 1236:
case 3225:
case 192:
case 1220:
case 3882:
case 1517:
case 3830:
case 648:
case 1094:
case 852:
case 3625:
case 765:
case 1200:
case 2530:
case 3004:
case 2888:
case 676:
case 1523:
case 1959:
case 228:
case 510:
case 316:
case 2210:
case 1781:
case 1947:
case 3251:
case 2496:
case 1380:
case 2062:
case 2513:
case 2435:
case 2507:
case 2874:
case 3423:
case 807:
case 268:
case 3938:
case 2714:
case 17:
case 205:
case 2932:
case 1493:
case 3879:
case 2359:
case 2347:
case 4015:
case 3417:
case 3719:
case 1725:
case 3736:
case 3090:
case 728:
case 836:
case 3107:
case 1966:
case 2677:
case 3113:
case 256:
case 1020:
case 3224:
case 582:
case 1834:
case 2991:
case 1539:
case 1475:
case 2174:
case 3700:
case 3378:
case 2277:
case 1391:
case 1694:
case 3179:
case 3558:
case 2372:
case 3321:
case 2366:
case 3720:
case 1570:
case 3737:
case 1196:
case 2676:
case 1967:
case 1619:
case 1751:
case 2161:
case 1350:
case 36:
case 1273:
case 1441:
case 2276:
case 2262:
case 2950:
case 1037:
case 732:
case 2389:
case 3355:
case 1458:
case 32:
case 730:
case 4014:
case 208:
case 3384:
case 3268:
case 2193:
case 3051:
case 2367:
case 3681:
case 3575:
case 2916:
case 736:
case 1979:
case 1283:
case 3208:
case 3271:
case 828:
case 2222:
case 2056:
case 2202:
case 4092:
case 1580:
case 151:
case 2101:
case 1927:
case 3608:
case 2559:
case 1053:
case 207:
case 56:
case 3997:
case 2885:
case 3554:
case 3172:
case 1913:
case 3847:
case 3166:
case 1612:
case 234:
case 2903:
case 2917:
case 3480:
case 3432:
case 163:
case 1240:
case 3044:
case 3361:
case 1543:
case 2057:
case 2326:
case 3760:
case 854:
case 2049:
case 1111:
case 832:
case 250:
case 3935:
case 1640:
case 3189:
case 2731:
case 382:
case 2269:
case 3245:
case 194:
case 4018:
case 380:
case 3996:
case 3393:
case 1485:
case 3388:
case 3264:
case 1906:
case 1060:
case 893:
case 1091:
case 735:
case 260:
case 3325:
case 1428:
case 470:
case 1336:
case 1540:
case 2492:
case 3001:
case 2646:
case 3078:
case 3483:
case 659:
case 1395:
case 3498:
case 757:
case 2900:
case 3305:
case 472:
case 1701:
case 81:
case 2995:
case 2246:
case 409:
case 3791:
case 220:
case 2845:
case 1721:
case 3545:
case 864:
case 1320:
case 3055:
case 1337:
case 702:
case 2089:
case 2659:
case 2522:
case 640:
case 1598:
case 2647:
case 413:
case 1583:
case 3822:
case 3351:
case 2871:
case 3654:
case 700:
case 3440:
case 238:
case 642:
case 3348:
case 1131:
case 1910:
case 2165:
case 1464:
case 976:
case 2259:
case 49:
case 585:
case 681:
case 3157:
case 1050:
case 677:
case 948:
case 2342:
case 3412:
case 1424:
case 2125:
case 2499:
case 1353:
case 2797:
case 972:
case 835:
case 3074:
case 793:
case 2881:
case 1956:
case 3494:
case 724:
case 1404:
case 2105:
case 1016:
case 3675:
case 970:
case 1670:
case 2007:
case 1774:
case 678:
case 2013:
case 2868:
case 71:
case 2576:
case 706:
case 2562:
case 2953:
case 3716:
case 646:
case 3275:
case 3133:
case 1023:
case 4034:
case 3809:
case 2796:
case 3504:
case 1949:
case 3241:
case 1957:
case 802:
case 1899:
case 758:
case 2652:
case 2804:
case 1239:
case 3088:
case 3829:
case 2148:
case 14:
case 448:
case 2252:
case 2577:
case 1468:
case 517:
case 99:
case 3717:
case 2349:
case 1793:
case 3877:
case 3061:
case 3258:
case 1639:
case 3142:
case 3109:
case 3075:
case 2679:
case 1616:
case 2302:
case 1199:
case 2124:
case 3328:
case 2510:
case 3436:
case 2322:
case 2213:
case 1537:
case 3770:
case 3674:
case 1986:
case 3129:
case 3810:
case 1383:
case 3495:
case 1922:
case 2848:
case 969:
case 1490:
case 1775:
case 704:
case 644:
case 766:
case 1902:
case 3177:
case 571:
case 1070:
case 675:
case 2607:
case 1969:
case 1617:
case 737:
case 1603:
case 1595:
case 3437:
case 2226:
case 293:
case 3693:
case 860:
case 2206:
case 1987:
case 1536:
case 1741:
case 755:
case 2630:
case 2805:
case 2734:
case 3918:
case 1623:
case 2626:
case 1039:
case 2387:
case 3288:
case 3293:
case 2168:
case 1448:
case 78:
case 2415:
case 1203:
case 2533:
case 21:
case 2230:
case 3162:
case 2606:
case 133:
case 3041:
case 3176:
case 2282:
case 1192:
case 3324:
case 2666:
case 2128:
case 2672:
case 2046:
case 3304:
case 3678:
case 2108:
case 1394:
case 1691:
case 2266:
case 2844:
case 2272:
case 2865:
case 1929:
case 1831:
case 1043:
case 2557:
case 3544:
case 611:
case 1291:
case 1663:
case 3849:
case 2377:
case 469:
case 3999:
case 3278:
case 3201:
case 3732:
case 1373:
case 387:
case 371:
case 3054:
case 1962:
case 2667:
case 3780:
case 257:
case 2047:
case 3085:
case 2059:
case 3460:
case 855:
case 2689:
case 1465:
case 1650:
case 2164:
case 2431:
case 3187:
case 2267:
case 588:
case 1118:
case 2145:
case 1444:
case 720:
case 1785:
case 2973:
case 195:
case 722:
case 2362:
case 1319:
case 2376:
case 3856:
case 212:
case 3855:
case 782:
case 3970:
case 2491:
case 3002:
case 2555:
case 82:
case 3589:
case 2008:
case 2867:
case 3022:
case 2071:
case 2146:
case 367:
case 695:
case 1702:
case 1511:
case 2463:
case 1143:
case 505:
case 327:
case 4053:
case 601:
case 86:
case 1722:
case 2521:
case 1891:
case 3566:
case 2934:
case 3718:
case 1941:
case 3878:
case 3154:
case 1489:
case 554:
case 2147:
case 3821:
case 2501:
case 2265:
case 2712:
case 1231:
case 2159:
case 3185:
case 489:
case 3087:
case 886:
case 2064:
case 2045:
case 494:
case 1863:
case 2665:
case 2450:
case 3411:
case 2644:
case 2740:
case 423:
case 2830:
case 2593:
case 1823:
case 4020:
case 882:
case 139:
case 1777:
case 3346:
case 3893:
case 2004:
case 1479:
case 951:
case 3943:
case 2625:
case 330:
case 2290:
case 299:
case 3633:
case 3799:
case 3497:
case 1535:
case 2561:
case 2205:
case 714:
case 284:
case 1407:
case 76:
case 2690:
case 2826:
case 1170:
case 1596:
case 3610:
case 2938:
case 368:
case 3158:
case 3874:
case 2248:
case 2719:
case 3347:
case 1776:
case 2152:
case 1215:
case 2574:
case 3359:
case 3932:
case 1816:
case 2813:
case 2251:
case 2807:
case 1139:
case 3210:
case 216:
case 1985:
case 328:
case 2773:
case 1338:
case 3507:
case 3513:
case 4037:
case 1597:
case 989:
case 3141:
case 3062:
case 3629:
case 2604:
case 2700:
case 2301:
case 3174:
case 2624:
case 3366:
case 2720:
case 1699:
case 2321:
case 1733:
case 2852:
case 534:
case 1116:
case 2179:
case 3677:
case 2204:
case 552:
case 1921:
case 2736:
case 3229:
case 2541:
case 716:
case 70:
case 2470:
case 64:
case 3209:
case 3991:
case 2224:
case 1978:
case 1901:
case 356:
case 2795:
case 0:
case 2911:
case 4:
case 3389:
case 2355:
case 1123:
case 3715:
case 3950:
case 3276:
case 903:
case 1742:
case 2575:
case 810:
case 3193:
case 2384:
case 2051:
case 431:
case 365:
case 697:
case 1015:
case 146:
case 3662:
case 2048:
case 214:
case 178:
case 996:
case 1311:
case 4073:
case 26:
case 507:
case 325:
case 1870:
case 2126:
case 3161:
case 3434:
case 307:
case 1191:
case 3547:
case 3178:
case 3622:
case 2608:
case 2166:
case 3602:
case 140:
case 2847:
case 2628:
case 2172:
case 3286:
case 1692:
case 349:
case 3885:
case 2859:
case 1446:
case 2443:
case 419:
case 2271:
case 2208:
case 3307:
case 565:
case 4083:
case 2753:
case 1832:
case 3916:
case 1397:
case 2228:
case 1974:
case 3686:
case 4012:
case 3269:
case 3330:
case 282:
case 931:
case 2935:
case 3382:
case 1961:
case 2388:
case 2846:
case 3184:
case 2393:
case 1459:
case 2167:
case 1218:
case 1447:
case 710:
case 2245:
case 3306:
case 2044:
case 884:
case 1993:
case 3669:
case 1396:
case 1843:
case 2480:
case 2065:
case 1618:
case 3438:
case 3057:
case 2361:
case 2762:
case 1152:
case 2776:
case 2816:
case 840:
case 1879:
case 1385:
case 1574:
case 2482:
case 1938:
case 37:
case 1354:
case 1423:
case 4042:
case 3516:
case 3461:
case 3134:
case 2338:
case 3237:
case 2426:
case 3:
case 952:
case 2954:
case 1827:
case 2615:
case 1807:
case 2139:
case 950:
case 244:
case 3947:
case 1813:
case 3380:
case 3897:
case 1773:
case 2985:
case 2014:
case 2406:
case 10:
case 881:
case 3200:
case 2479:
case 1004:
case 3523:
case 2803:
case 693:
case 2817:
case 1588:
case 2823:
case 1830:
case 1593:
case 3220:
case 2099:
case 1882:
case 503:
case 859:
case 3503:
case 778:
case 1690:
case 2427:
case 1794:
case 1225:
case 3704:
case 61:
case 2170:
case 606:
case 3620:
case 3295:
case 664:
case 1806:
case 184:
case 390:
case 2413:
case 3343:
case 3896:
case 1872:
case 1244:
case 602:
case 1147:
case 3591:
case 3484:
case 590:
case 2769:
case 1712:
case 396:
case 592:
case 3745:
case 4049:
case 3660:
case 3455:
case 1358:
case 908:
case 1450:
case 1644:
case 3563:
case 1341:
case 3952:
case 211:
case 781:
case 2863:
case 777:
case 2132:
case 679:
case 1045:
case 1071:
case 1146:
case 531:
case 1555:
case 319:
case 635:
case 1008:
case 2472:
case 3083:
case 3653:
case 3401:
case 5:
case 1889:
case 657:
case 2092:
case 3478:
case 112:
case 759:
case 4056:
case 1783:
case 2975:
case 3811:
case 3253:
case 1798:
case 3771:
case 2722:
case 3370:
case 3708:
case 2850:
case 2511:
case 3728:
case 4087:
case 1167:
case 3485:
case 1264:
case 1388:
case 389:
case 3060:
case 839:
case 394:
case 3303:
case 2447:
case 2218:
case 180:
case 2749:
case 1996:
case 3317:
case 4069:
case 3454:
case 323:
case 1935:
case 3926:
case 1645:
case 2618:
case 3111:
case 620:
case 3982:
case 1361:
case 2335:
case 1760:
case 2993:
case 363:
case 2988:
case 1044:
case 2031:
case 968:
case 1480:
case 1628:
case 3913:
case 1847:
case 4086:
case 1997:
case 3316:
case 1859:
case 2446:
case 2692:
case 2191:
case 427:
case 3053:
case 3683:
case 3927:
case 1585:
case 638:
case 3580:
case 930:
case 3838:
case 351:
case 2292:
case 2974:
case 4002:
case 2538:
case 1208:
case 1271:
case 2880:
case 1443:
case 711:
case 1753:
case 2397:
case 3979:
case 3283:
case 1268:
case 1051:
case 1681:
case 2742:
case 2214:
case 2123:
case 3037:
case 655:
case 3219:
case 4062:
case 1182:
case 3748:
case 468:
case 2710:
case 16:
case 2955:
case 3273:
case 278:
case 3751:
case 3135:
case 1281:
case 2984:
case 491:
case 3967:
case 1048:
case 2015:
case 246:
case 3570:
case 114:
case 3196:
case 3095:
case 2733:
case 1852:
case 1321:
case 563:
case 1624:
case 1179:
case 2116:
case 3475:
case 626:
case 967:
case 2901:
case 3020:
case 2299:
case 2978:
case 1224:
case 3972:
case 1107:
case 1204:
case 1113:
case 775:
case 1541:
case 4029:
case 3197:
case 1736:
case 594:
case 186:
case 3294:
case 1509:
case 2360:
case 3944:
case 1151:
case 1735:
case 3234:
case 2949:
case 1796:
case 374:
case 3137:
case 2023:
case 4041:
case 1652:
case 3706:
case 1082:
case 583:
case 2957:
case 1824:
case 3476:
case 166:
case 569:
case 2788:
case 4058:
case 2639:
case 1357:
case 24:
case 1006:
case 3634:
case 2468:
case 3730:
case 987:
case 3096:
case 1577:
case 3429:
case 3195:
case 1105:
case 3873:
case 2353:
case 1797:
case 2956:
case 1881:
case 4075:
case 3477:
case 3819:
case 3120:
case 733:
case 895:
case 3100:
case 1007:
case 2774:
case 66:
case 2670:
case 488:
case 1576:
case 3097:
case 2519:
case 221:
case 1808:
case 3592:
case 1871:
case 2280:
case 1067:
case 1711:
case 43:
case 138:
case 1502:
case 1310:
case 1522:
case 3238:
case 2337:
case 1828:
case 487:
case 1586:
case 2784:
case 471:
case 2680:
case 4054:
case 2445:
case 1144:
case 3315:
case 298:
case 1259:
case 4085:
case 3638:
case 2755:
case 3487:
case 2395:
case 2408:
case 2471:
case 162:
case 2243:
case 3153:
case 2091:
case 680:
case 1920:
case 1646:
case 1492:
case 574:
case 3812:
case 988:
case 795:
case 122:
case 3925:
case 2643:
case 3766:
case 2320:
case 1333:
case 3772:
case 545:
case 701:
case 2778:
case 2300:
case 2512:
case 329:
case 3486:
case 2818:
case 2063:
case 3905:
case 253:
case 3968:
case 612:
case 157:
case 1738:
case 1689:
case 39:
case 1059:
case 443:
case 3211:
case 3853:
case 2373:
case 1919:
case 610:
case 2250:
case 3038:
case 918:
case 295:
case 1973:
case 3747:
case 3449:
case 2319:
case 1362:
case 2080:
case 1267:
case 2754:
case 201:
case 4084:
case 1164:
case 3314:
case 753:
case 1145:
case 1108:
case 3860:
case 95:
case 1171:
case 3198:
case 2263:
case 1329:
case 3183:
case 102:
case 1309:
case 1128:
case 3399:
case 1666:
case 2977:
case 370:
case 2291:
case 417:
case 179:
case 3924:
case 1272:
case 1549:
case 1266:
case 4021:
case 3904:
case 985:
case 2929:
case 1994:
case 1865:
case 1682:
case 3895:
case 2340:
case 3410:
case 2987:
case 124:
case 3945:
case 943:
case 2623:
case 1805:
case 1734:
case 572:
case 2595:
case 1912:
case 2603:
case 3173:
case 1181:
case 1226:
case 164:
case 2312:
case 3442:
case 2500:
case 797:
case 3696:
case 233:
case 1606:
case 3800:
case 853:
case 3635:
case 1940:
case 509:
case 4093:
case 2039:
case 1387:
case 11:
case 418:
case 2114:
case 2520:
case 2217:
case 2448:
case 2986:
case 2537:
case 1213:
case 1322:
case 3297:
case 2398:
case 3194:
case 2616:
case 3392:
case 1510:
case 45:
case 1124:
case 513:
case 1302:
case 158:
case 3433:
case 3515:
case 1607:
case 2070:
case 1613:
case 2902:
case 1627:
case 2490:
case 3908:
case 2815:
case 2922:
case 1848:
case 898:
case 917:
case 2216:
case 1998:
case 2775:
case 1542:
case 2019:
case 3597:
case 1141:
case 3615:
case 2237:
case 3426:
case 2:
case 3338:
case 1507:
case 3406:
case 375:
case 3014:
case 1527:
case 982:
case 2959:
case 128:
case 2380:
case 231:
case 2637:
case 2493:
case 1359:
case 1932:
case 191:
case 3762:
case 1158:
case 688:
case 3430:
case 1874:
case 1610:
case 105:
case 168:
case 46:
case 1077:
case 1861:
case 2600:
case 292:
case 4025:
case 1506:
case 3729:
case 3427:
case 3535:
case 2343:
case 1526:
case 2295:
case 1633:
case 2620:
case 1497:
case 3817:
case 130:
case 486:
case 1582:
case 2094:
case 3803:
case 889:
case 1029:
case 2523:
case 511:
case 894:
case 1530:
case 1346:
case 1893:
case 3479:
case 2200:
case 2503:
case 2517:
case 3099:
case 823:
case 1175:
case 3958:
case 2563:
case 2138:
case 482:
case 1069:
case 92:
case 751:
case 136:
case 3132:
case 3018:
case 1649:
case 3180:
case 539:
case 3231:
case 96:
case 2484:
case 1185:
case 4065:
case 1939:
case 2040:
case 1878:
case 1154:
case 2745:
case 2370:
case 3850:
case 3722:
case 2771:
case 2811:
case 2253:
case 127:
case 3143:
case 2728:
case 1086:
case 763:
case 1656:
case 2098:
case 794:
case 3466:
case 671:
case 575:
case 2083:
case 544:
case 789:
case 1884:
case 1970:
case 3786:
case 1256:
case 986:
case 2478:
case 3092:
case 1326:
case 1438:
case 3150:
case 1057:
case 3335:
case 892:
case 2930:
case 1049:
case 2612:
case 1306:
case 3988:
case 473:
case 890:
case 3447:
case 3749:
case 1287:
case 2060:
case 617:
case 289:
case 2926:
case 2744:
case 2640:
case 1382:
case 1546:
case 90:
case 1731:
case 2212:
case 1155:
case 359:
case 1056:
case 4028:
case 2532:
case 703:
case 1686:
case 251:
case 3292:
case 2838:
case 377:
case 2283:
case 1916:
case 3832:
case 3397:
case 3880:
case 1313:
case 381:
case 3538:
case 1307:
case 149:
case 1885:
case 3756:
case 2913:
case 1121:
case 1286:
case 1622:
case 1178:
case 107:
case 578:
case 1042:
case 2350:
case 2751:
case 542:
case 2273:
case 792:
case 3955:
case 125:
case 790:
case 2570:
case 346:
case 2619:
case 540:
case 108:
case 416:
case 2673:
case 819:
case 3103:
case 3214:
case 1188:
case 3742:
case 1367:
case 1715:
case 1950:
case 1262:
case 2219:
case 2748:
case 1875:
case 1841:
case 3299:
case 2539:
case 910:
case 559:
case 1209:
case 1991:
case 7:
case 2294:
case 2725:
case 2000:
case 2966:
case 3921:
case 3839:
case 4004:
case 499:
case 3699:
case 896:
case 3733:
case 1174:
case 2694:
case 2790:
case 1552:
case 2036:
case 2391:
case 3793:
case 1877:
case 957:
case 870:
case 1258:
case 493:
case 1142:
case 1703:
case 2462:
case 1365:
case 656:
case 2331:
case 2096:
case 2634:
case 1641:
case 4052:
case 2782:
case 872:
case 1344:
case 34:
case 3115:
case 2965:
case 3003:
case 809:
case 1110:
case 1829:
case 553:
case 1524:
case 406:
case 1093:
case 1658:
case 3360:
case 3239:
case 2944:
case 1241:
case 3899:
case 1473:
case 2706:
case 3594:
case 3481:
case 1809:
case 464:
case 2234:
case 3949:
case 1133:
case 1862:
case 458:
case 1568:
case 1716:
case 397:
case 900:
case 3519:
case 902:
case 625:
case 521:
case 3670:
case 3774:
case 1494:
case 2429:
case 748:
case 2727:
case 665:
case 3270:
case 561:
case 2409:
case 3353:
case 776:
case 185:
case 2767:
case 3680:
case 3050:
case 770:
case 143:
case 1149:
case 3632:
case 2789:
case 2487:
case 3464:
case 457:
case 2951:
case 4047:
case 3445:
case 1886:
case 1440:
case 2883:
case 2898:
case 964:
case 3232:
case 3280:
case 709:
case 1084:
case 1750:
case 1654:
case 1802:
case 747:
case 3583:
case 1055:
case 3892:
case 1508:
case 906:
case 1545:
case 283:
case 2766:
case 1869:
case 3643:
case 2812:
case 1791:
case 353:
case 3818:
case 2905:
case 2486:
case 4046:
case 229:
case 3778:
case 3300:
case 54:
case 1483:
case 1001:
case 269:
case 479:
case 1078:
case 2402:
case 3428:
case 3336:
case 117:
case 213:
case 3785:
case 1169:
case 395:
case 2038:
case 2611:
case 3032:
case 3465:
case 3650:
case 627:
case 3754:
case 729:
case 29:
case 1914:
case 2968:
case 3553:
case 1381:
case 1054:
case 3962:
case 1780:
case 1684:
case 1732:
case 2211:
case 904:
case 1857:
case 2924:
case 2746:
case 1999:
case 636:
case 1565:
case 2531:
case 1544:
case 460:
case 3291:
case 2456:
case 270:
case 1849:
case 462:
case 3929:
case 272:
case 4072:
case 4066:
case 420:
case 2198:
case 1304:
case 1122:
case 1601:
case 1324:
case 533:
case 2399:
case 1621:
case 3192:
case 98:
case 1162:
case 1833:
case 333:
case 1041:
case 2820:
case 883:
case 2696:
case 2034:
case 4030:
case 3448:
case 3520:
case 1345:
case 3039:
case 1288:
case 1293:
case 1661:
case 2800:
case 2296:
case 1918:
case 3987:
case 3340:
case 4006:
case 632:
case 1437:
case 1688:
case 1261:
case 630:
case 4026:
case 1058:
case 3969:
case 3603:
case 3595:
case 628:
case 1177:
case 1842:
case 1992:
case 2433:
case 962:
case 2697:
case 437:
case 1420:
case 3775:
case 960:
case 4079:
case 3216:
case 3922:
case 2971:
case 2908:
case 1810:
case 3383:
case 2194:
case 1495:
case 48:
case 1308:
case 1770:
case 501:
case 3986:
case 4027:
case 3199:
case 745:
case 691:
case 2837:
case 595:
case 1075:
case 920:
case 3616:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754359201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,];
var gg_b = "1754359201/";

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
