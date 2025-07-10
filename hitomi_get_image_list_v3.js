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
case 2747:
case 2151:
case 3912:
case 1528:
case 2754:
case 1284:
case 99:
case 2887:
case 662:
case 2454:
case 219:
case 317:
case 794:
case 3234:
case 1524:
case 1333:
case 4077:
case 2758:
case 2909:
case 3356:
case 3203:
case 1140:
case 2110:
case 899:
case 2507:
case 2327:
case 2646:
case 2992:
case 29:
case 3972:
case 1461:
case 4061:
case 3655:
case 896:
case 1831:
case 1555:
case 614:
case 175:
case 3148:
case 1791:
case 3321:
case 1315:
case 1879:
case 780:
case 2532:
case 230:
case 478:
case 3157:
case 484:
case 3144:
case 2849:
case 3022:
case 43:
case 928:
case 3441:
case 448:
case 108:
case 2126:
case 3520:
case 1230:
case 1367:
case 3610:
case 2934:
case 3146:
case 1107:
case 2272:
case 3292:
case 1350:
case 261:
case 354:
case 3745:
case 3829:
case 827:
case 3325:
case 2852:
case 1605:
case 1795:
case 1311:
case 1242:
case 370:
case 340:
case 2690:
case 2568:
case 3670:
case 2700:
case 1495:
case 3182:
case 574:
case 3236:
case 3354:
case 60:
case 1306:
case 3347:
case 2660:
case 3626:
case 3578:
case 1465:
case 2783:
case 2483:
case 1765:
case 112:
case 3514:
case 2086:
case 1614:
case 2644:
case 544:
case 398:
case 1132:
case 635:
case 651:
case 3727:
case 1922:
case 2456:
case 2648:
case 1618:
case 532:
case 202:
case 2948:
case 3522:
case 1918:
case 4029:
case 3162:
case 4085:
case 2680:
case 2331:
case 1622:
case 586:
case 3020:
case 2255:
case 1785:
case 1845:
case 437:
case 3399:
case 2815:
case 2379:
case 1729:
case 2875:
case 3282:
case 2957:
case 745:
case 1055:
case 1153:
case 122:
case 3926:
case 1978:
case 775:
case 455:
case 902:
case 803:
case 811:
case 3713:
case 3970:
case 3951:
case 1024:
case 991:
case 1296:
case 297:
case 3865:
case 399:
case 1905:
case 2228:
case 2493:
case 2804:
case 3337:
case 573:
case 2634:
case 543:
case 817:
case 3773:
case 2224:
case 898:
case 2806:
case 3817:
case 2313:
case 2553:
case 2636:
case 1130:
case 3018:
case 500:
case 2098:
case 2769:
case 3861:
case 607:
case 65:
case 2737:
case 1026:
case 624:
case 218:
case 1294:
case 2662:
case 1723:
case 793:
case 2373:
case 3877:
case 2469:
case 3955:
case 866:
case 2897:
case 3180:
case 26:
case 1188:
case 929:
case 3005:
case 1916:
case 2692:
case 1264:
case 2946:
case 3363:
case 2839:
case 3134:
case 321:
case 483:
case 2499:
case 2867:
case 3479:
case 109:
case 449:
case 1572:
case 2799:
case 2068:
case 759:
case 3779:
case 2609:
case 3891:
case 1240:
case 3431:
case 1070:
case 613:
case 2040:
case 3138:
case 764:
case 1352:
case 3290:
case 1841:
case 2064:
case 692:
case 82:
case 304:
case 1512:
case 2542:
case 3612:
case 854:
case 229:
case 96:
case 3051:
case 1779:
case 432:
case 450:
case 770:
case 2090:
case 2509:
case 769:
case 4031:
case 121:
case 618:
case 1363:
case 3264:
case 740:
case 2907:
case 3188:
case 1479:
case 309:
case 3572:
case 1103:
case 185:
case 2592:
case 901:
case 2449:
case 4019:
case 3512:
case 104:
case 95:
case 127:
case 3976:
case 3481:
case 3781:
case 3010:
case 2889:
case 488:
case 2749:
case 2825:
case 629:
case 2487:
case 2278:
case 2653:
case 2048:
case 292:
case 1817:
case 2847:
case 3159:
case 1074:
case 2854:
case 1257:
case 2966:
case 3723:
case 1393:
case 812:
case 3294:
case 2274:
case 856:
case 2057:
case 1955:
case 1877:
case 1014:
case 992:
case 1861:
case 2060:
case 2932:
case 1865:
case 3296:
case 711:
case 548:
case 4013:
case 2443:
case 2538:
case 2046:
case 1970:
case 1713:
case 3024:
case 3142:
case 1951:
case 2883:
case 2968:
case 3827:
case 1910:
case 2534:
case 2940:
case 2323:
case 1773:
case 1337:
case 1109:
case 2856:
case 3028:
case 1369:
case 717:
case 2964:
case 602:
case 2082:
case 3785:
case 1020:
case 3729:
case 3845:
case 1399:
case 808:
case 2821:
case 2994:
case 691:
case 2580:
case 2201:
case 1522:
case 3232:
case 3186:
case 3622:
case 1302:
case 2659:
case 153:
case 2800:
case 1895:
case 196:
case 1136:
case 3349:
case 2752:
case 2220:
case 3914:
case 703:
case 1435:
case 2630:
case 380:
case 2381:
case 875:
case 2930:
case 1514:
case 3765:
case 2557:
case 356:
case 2062:
case 2408:
case 3166:
case 3813:
case 2120:
case 3526:
case 1236:
case 2698:
case 2708:
case 3678:
case 3465:
case 1626:
case 3306:
case 2548:
case 2433:
case 2377:
case 2036:
case 2404:
case 579:
case 560:
case 3286:
case 1262:
case 198:
case 4027:
case 1358:
case 364:
case 3350:
case 12:
case 3371:
case 3012:
case 1745:
case 251:
case 154:
case 235:
case 4045:
case 704:
case 1209:
case 727:
case 2988:
case 3107:
case 2863:
case 721:
case 2176:
case 2009:
case 785:
case 1670:
case 3551:
case 3311:
case 20:
case 257:
case 1325:
case 2984:
case 170:
case 3194:
case 345:
case 489:
case 2174:
case 2771:
case 3601:
case 69:
case 3791:
case 923:
case 822:
case 443:
case 2222:
case 1501:
case 1655:
case 2802:
case 473:
case 753:
case 3491:
case 375:
case 4041:
case 1441:
case 2411:
case 3198:
case 2178:
case 2666:
case 2582:
case 308:
case 2953:
case 262:
case 2395:
case 2114:
case 2105:
case 555:
case 914:
case 2365:
case 2406:
case 3417:
case 2003:
case 3168:
case 71:
case 652:
case 2696:
case 1238:
case 1912:
case 1383:
case 3528:
case 3717:
case 894:
case 3308:
case 531:
case 1628:
case 630:
case 2546:
case 1516:
case 537:
case 2038:
case 2797:
case 3164:
case 486:
case 3288:
case 3477:
case 3333:
case 111:
case 628:
case 3977:
case 850:
case 1772:
case 3855:
case 1095:
case 1221:
case 3531:
case 933:
case 1679:
case 1801:
case 3961:
case 2599:
case 1472:
case 779:
case 459:
case 3330:
case 2442:
case 1619:
case 844:
case 3275:
case 233:
case 2906:
case 3359:
case 3045:
case 2742:
case 1712:
case 888:
case 2265:
case 3828:
case 521:
case 3152:
case 2911:
case 620:
case 3384:
case 585:
case 2753:
case 504:
case 2950:
case 2185:
case 2129:
case 3991:
case 412:
case 527:
case 2486:
case 67:
case 2569:
case 2083:
case 395:
case 3204:
case 746:
case 3623:
case 1256:
case 1523:
case 493:
case 3388:
case 638:
case 1816:
case 1061:
case 0:
case 2058:
case 1878:
case 2484:
case 3513:
case 568:
case 3353:
case 2217:
case 2784:
case 1254:
case 190:
case 2975:
case 1077:
case 1814:
case 2844:
case 2054:
case 553:
case 1874:
case 3297:
case 2277:
case 2488:
case 2593:
case 1258:
case 1102:
case 2848:
case 1818:
case 2291:
case 2089:
case 3250:
case 3041:
case 737:
case 1529:
case 3239:
case 987:
case 225:
case 2904:
case 1137:
case 51:
case 2652:
case 731:
case 287:
case 2459:
case 389:
case 445:
case 105:
case 2730:
case 1635:
case 2430:
case 1289:
case 755:
case 475:
case 3342:
case 2908:
case 3211:
case 3187:
case 373:
case 1225:
case 3535:
case 2798:
case 2583:
case 2608:
case 406:
case 677:
case 554:
case 2376:
case 3665:
case 1189:
case 4026:
case 1023:
case 1125:
case 3111:
case 2498:
case 1565:
case 3478:
case 176:
case 641:
case 2604:
case 2223:
case 2191:
case 3418:
case 540:
case 2556:
case 2633:
case 2834:
case 3307:
case 3139:
case 3527:
case 3718:
case 570:
case 2494:
case 2803:
case 3474:
case 1710:
case 566:
case 344:
case 1822:
case 3197:
case 2764:
case 1158:
case 3545:
case 2161:
case 2440:
case 1645:
case 2615:
case 3332:
case 2301:
case 2002:
case 3705:
case 2099:
case 2768:
case 149:
case 409:
case 3079:
case 598:
case 2117:
case 3249:
case 1913:
case 183:
case 2320:
case 843:
case 2892:
case 155:
case 28:
case 2285:
case 3872:
case 2667:
case 422:
case 3923:
case 3701:
case 3691:
case 3035:
case 1156:
case 2809:
case 234:
case 131:
case 705:
case 4055:
case 1455:
case 3133:
case 137:
case 2525:
case 2165:
case 934:
case 2611:
case 2466:
case 3420:
case 2766:
case 3720:
case 1390:
case 511:
case 3108:
case 3368:
case 242:
case 3812:
case 1029:
case 3776:
case 3617:
case 2554:
case 503:
case 1728:
case 494:
case 3243:
case 1428:
case 2314:
case 3175:
case 1344:
case 2093:
case 2496:
case 3476:
case 3981:
case 2558:
case 3394:
case 4024:
case 1577:
case 2862:
case 2318:
case 3344:
case 3919:
case 2213:
case 1981:
case 4076:
case 1476:
case 1073:
case 2853:
case 210:
case 2654:
case 2647:
case 1776:
case 545:
case 3517:
case 1398:
case 672:
case 3100:
case 3348:
case 2597:
case 890:
case 3577:
case 2886:
case 3424:
case 1677:
case 2746:
case 3931:
case 1416:
case 2446:
case 936:
case 3724:
case 68:
case 2145:
case 508:
case 3293:
case 1104:
case 3156:
case 2937:
case 743:
case 1691:
case 1035:
case 1133:
case 2571:
case 3263:
case 3455:
case 789:
case 496:
case 2969:
case 1872:
case 2567:
case 2052:
case 453:
case 2539:
case 4001:
case 2310:
case 1340:
case 2782:
case 1252:
case 3085:
case 884:
case 1720:
case 2842:
case 1812:
case 878:
case 3183:
case 2351:
case 848:
case 2235:
case 2625:
case 2482:
case 3641:
case 174:
case 615:
case 271:
case 1545:
case 3202:
case 3158:
case 977:
case 1332:
case 2621:
case 3645:
case 3410:
case 556:
case 3081:
case 3710:
case 3973:
case 427:
case 2279:
case 2355:
case 1019:
case 144:
case 3147:
case 941:
case 3751:
case 1079:
case 485:
case 247:
case 2859:
case 700:
case 4005:
case 1366:
case 2600:
case 421:
case 3913:
case 150:
case 1705:
case 3470:
case 1031:
case 379:
case 360:
case 971:
case 2460:
case 2884:
case 3426:
case 3189:
case 1665:
case 376:
case 1478:
case 2757:
case 1287:
case 3565:
case 1111:
case 2141:
case 1714:
case 1414:
case 2444:
case 346:
case 1778:
case 2457:
case 2328:
case 1396:
case 2508:
case 3935:
case 1307:
case 559:
case 3627:
case 2888:
case 3269:
case 1474:
case 4074:
case 2448:
case 1929:
case 2533:
case 2324:
case 2087:
case 1685:
case 3169:
case 2480:
case 3309:
case 2956:
case 3137:
case 1629:
case 1267:
case 348:
case 1810:
case 2840:
case 33:
case 3927:
case 2011:
case 1250:
case 2780:
case 3289:
case 2868:
case 3091:
case 831:
case 594:
case 765:
case 1870:
case 2039:
case 2067:
case 189:
case 2552:
case 2119:
case 1149:
case 3336:
case 1995:
case 3077:
case 2900:
case 2898:
case 687:
case 3613:
case 2543:
case 1826:
case 1573:
case 2131:
case 2734:
case 625:
case 1386:
case 681:
case 3874:
case 2403:
case 3945:
case 3017:
case 2434:
case 563:
case 2925:
case 1152:
case 3283:
case 509:
case 2135:
case 2587:
case 2436:
case 1828:
case 3256:
case 3303:
case 9:
case 195:
case 1204:
case 2807:
case 3163:
case 3816:
case 3523:
case 1388:
case 846:
case 2008:
case 466:
case 2462:
case 470:
case 2699:
case 469:
case 24:
case 3472:
case 2958:
case 2492:
case 982:
case 1961:
case 3380:
case 27:
case 3631:
case 2075:
case 920:
case 2792:
case 1977:
case 860:
case 3193:
case 440:
case 1531:
case 879:
case 2173:
case 3221:
case 2409:
case 1215:
case 2245:
case 3820:
case 1275:
case 220:
case 3712:
case 744:
case 1519:
case 282:
case 94:
case 788:
case 3581:
case 506:
case 3619:
case 1525:
case 781:
case 172:
case 1165:
case 3689:
case 1589:
case 2641:
case 1063:
case 725:
case 1305:
case 1466:
case 4066:
case 3370:
case 1766:
case 955:
case 3351:
case 2029:
case 402:
case 3127:
case 1639:
case 18:
case 1892:
case 1667:
case 1229:
case 4032:
case 1732:
case 3550:
case 1809:
case 2455:
case 2263:
case 134:
case 1650:
case 2591:
case 937:
case 3658:
case 3446:
case 2979:
case 2293:
case 2121:
case 497:
case 1558:
case 3273:
case 2724:
case 1374:
case 2561:
case 562:
case 1318:
case 1862:
case 3746:
case 523:
case 1606:
case 1796:
case 2100:
case 1378:
case 2728:
case 1547:
case 2517:
case 2428:
case 3213:
case 1314:
case 2344:
case 1195:
case 1093:
case 3324:
case 1794:
case 644:
case 1191:
case 3448:
case 3656:
case 8:
case 2269:
case 2627:
case 50:
case 1834:
case 688:
case 2237:
case 946:
case 1803:
case 1583:
case 1608:
case 1798:
case 3444:
case 632:
case 1037:
case 2935:
case 2726:
case 3760:
case 3508:
case 3460:
case 2189:
case 2023:
case 1838:
case 3744:
case 2565:
case 276:
case 3141:
case 1952:
case 1675:
case 3490:
case 87:
case 3830:
case 279:
case 3575:
case 377:
case 1468:
case 260:
case 1500:
case 2154:
case 1099:
case 1117:
case 2382:
case 2913:
case 1943:
case 3219:
case 2299:
case 3279:
case 3993:
case 2710:
case 1740:
case 3355:
case 1177:
case 4064:
case 1464:
case 1880:
case 979:
case 2158:
case 1521:
case 3231:
case 960:
case 1161:
case 2645:
case 1615:
case 2410:
case 1440:
case 2017:
case 2945:
case 1915:
case 3921:
case 2874:
case 1054:
case 3179:
case 419:
case 3894:
case 4088:
case 1488:
case 3434:
case 3734:
case 2102:
case 1788:
case 3131:
case 2673:
case 2362:
case 689:
case 2878:
case 3900:
case 1058:
case 1860:
case 4084:
case 1484:
case 3543:
case 1217:
case 3738:
case 290:
case 1857:
case 2077:
case 3039:
case 1652:
case 2805:
case 978:
case 3067:
case 3552:
case 1459:
case 734:
case 984:
case 1430:
case 2635:
case 3312:
case 428:
case 78:
case 2289:
case 1890:
case 3050:
case 1291:
case 1123:
case 248:
case 3372:
case 2392:
case 1025:
case 2529:
case 284:
case 452:
case 3480:
case 2585:
case 430:
case 3956:
case 2137:
case 2309:
case 3549:
case 1442:
case 4042:
case 2412:
case 382:
case 841:
case 2581:
case 2200:
case 133:
case 1295:
case 871:
case 2820:
case 3866:
case 1742:
case 2712:
case 3015:
case 1906:
case 1021:
case 1997:
case 2772:
case 3602:
case 2631:
case 2095:
case 2380:
case 3409:
case 467:
case 3699:
case 847:
case 3832:
case 2801:
case 338:
case 695:
case 34:
case 3492:
case 600:
case 1486:
case 3637:
case 1083:
case 3462:
case 2065:
case 2256:
case 1786:
case 2303:
case 2523:
case 3807:
case 2334:
case 1265:
case 4053:
case 1453:
case 3004:
case 3135:
case 1687:
case 2941:
case 1911:
case 524:
case 3925:
case 3989:
case 2283:
case 1753:
case 2338:
case 2623:
case 3786:
case 3967:
case 295:
case 2204:
case 1807:
case 3846:
case 3939:
case 2388:
case 2233:
case 1227:
case 1008:
case 3185:
case 1462:
case 3569:
case 3083:
case 1637:
case 3129:
case 1925:
case 2208:
case 2152:
case 815:
case 1896:
case 3056:
case 1004:
case 1436:
case 995:
case 2828:
case 2143:
case 3882:
case 2275:
case 1954:
case 3906:
case 1015:
case 435:
case 518:
case 451:
case 2519:
case 1549:
case 3442:
case 2330:
case 138:
case 1709:
case 1699:
case 3599:
case 14:
case 2579:
case 3000:
case 1075:
case 747:
case 2977:
case 17:
case 2855:
case 1409:
case 3502:
case 2215:
case 3759:
case 2342:
case 1312:
case 3908:
case 1241:
case 591:
case 1050:
case 834:
case 88:
case 3652:
case 243:
case 3459:
case 289:
case 2965:
case 1864:
case 1480:
case 989:
case 423:
case 2239:
case 739:
case 842:
case 462:
case 325:
case 3904:
case 3123:
case 2810:
case 872:
case 973:
case 3291:
case 2722:
case 2250:
case 2041:
case 1663:
case 1131:
case 3788:
case 1734:
case 678:
case 684:
case 1693:
case 4003:
case 1894:
case 3054:
case 1179:
case 986:
case 1921:
case 63:
case 1006:
case 4034:
case 1434:
case 648:
case 502:
case 1738:
case 2995:
case 3857:
case 286:
case 3058:
case 1898:
case 1900:
case 3643:
case 605:
case 1438:
case 4038:
case 2513:
case 676:
case 3099:
case 1859:
case 2079:
case 77:
case 3320:
case 2405:
case 3943:
case 3002:
case 2695:
case 2031:
case 250:
case 4090:
case 3675:
case 177:
case 232:
case 74:
case 646:
case 1830:
case 3161:
case 833:
case 932:
case 1231:
case 3615:
case 3740:
case 1279:
case 3880:
case 2197:
case 2139:
case 1963:
case 3803:
case 3494:
case 2527:
case 2718:
case 2171:
case 1448:
case 4048:
case 1656:
case 3191:
case 2929:
case 1324:
case 3604:
case 2774:
case 2985:
case 1504:
case 2665:
case 1460:
case 1884:
case 2714:
case 649:
case 1744:
case 660:
case 679:
case 2414:
case 4044:
case 1444:
case 3798:
case 3608:
case 1457:
case 1328:
case 3376:
case 1760:
case 3037:
case 3862:
case 3318:
case 631:
case 1886:
case 3697:
case 2677:
case 4046:
case 1043:
case 2661:
case 2394:
case 655:
case 3195:
case 2175:
case 1213:
case 136:
case 3949:
case 2476:
case 528:
case 1853:
case 3093:
case 2776:
case 3606:
case 1647:
case 3547:
case 1506:
case 2398:
case 3378:
case 3987:
case 965:
case 1782:
case 2252:
case 2720:
case 3766:
case 881:
case 1842:
case 1511:
case 1235:
case 372:
case 3525:
case 2420:
case 3466:
case 59:
case 1625:
case 1482:
case 3809:
case 2104:
case 2701:
case 1937:
case 1571:
case 2133:
case 334:
case 3650:
case 1969:
case 3892:
case 1127:
case 519:
case 3432:
case 1539:
case 3229:
case 1310:
case 3667:
case 1737:
case 520:
case 3932:
case 2901:
case 621:
case 118:
case 3274:
case 1437:
case 2723:
case 3122:
case 3057:
case 206:
case 4069:
case 1469:
case 2159:
case 906:
case 415:
case 3854:
case 54:
case 2920:
case 2343:
case 3787:
case 2298:
case 3278:
case 627:
case 2130:
case 1226:
case 2268:
case 3889:
case 761:
case 2010:
case 835:
case 1040:
case 3749:
case 3825:
case 2352:
case 1270:
case 2841:
case 1811:
case 909:
case 1064:
case 3205:
case 2512:
case 1542:
case 301:
case 2481:
case 2976:
case 3996:
case 3642:
case 1335:
case 129:
case 2916:
case 857:
case 3907:
case 1692:
case 16:
case 1702:
case 2572:
case 209:
case 3592:
case 307:
case 1799:
case 1068:
case 1850:
case 767:
case 3090:
case 5:
case 3509:
case 3220:
case 1530:
case 2266:
case 1957:
case 2349:
case 1875:
case 2153:
case 3659:
case 1960:
case 3800:
case 1559:
case 3452:
case 699:
case 1948:
case 2918:
case 963:
case 2186:
case 102:
case 3580:
case 1763:
case 922:
case 2622:
case 730:
case 3082:
case 2974:
case 3994:
case 2729:
case 61:
case 752:
case 472:
case 1804:
case 3964:
case 191:
case 668:
case 2827:
case 1172:
case 1603:
case 1793:
case 3534:
case 1224:
case 3743:
case 1990:
case 1808:
case 3883:
case 2024:
case 696:
case 2142:
case 1638:
case 994:
case 1584:
case 1007:
case 2072:
case 2795:
case 357:
case 1341:
case 2311:
case 964:
case 1938:
case 3984:
case 807:
case 3590:
case 2570:
case 3009:
case 76:
case 2196:
case 3176:
case 2495:
case 4021:
case 1421:
case 2367:
case 1540:
case 1934:
case 2510:
case 3988:
case 3116:
case 3863:
case 2339:
case 1272:
case 2350:
case 264:
case 161:
case 959:
case 1721:
case 2674:
case 3704:
case 2132:
case 2286:
case 956:
case 2397:
case 3377:
case 3433:
case 1648:
case 1456:
case 577:
case 62:
case 2618:
case 3404:
case 3560:
case 2678:
case 571:
case 2813:
case 293:
case 2166:
case 1783:
case 1660:
case 2306:
case 256:
case 1483:
case 212:
case 3930:
case 1657:
case 314:
case 2524:
case 2761:
case 2164:
case 3869:
case 2333:
case 2477:
case 1758:
case 2288:
case 1909:
case 2304:
case 2140:
case 603:
case 1084:
case 3546:
case 2777:
case 4058:
case 3607:
case 2528:
case 3942:
case 2717:
case 3706:
case 2676:
case 1754:
case 1887:
case 2308:
case 1088:
case 119:
case 4054:
case 1454:
case 3365:
case 791:
case 3953:
case 3080:
case 152:
case 2375:
case 323:
case 1725:
case 617:
case 702:
case 2198:
case 1489:
case 4089:
case 3739:
case 536:
case 3450:
case 3802:
case 2831:
case 128:
case 3986:
case 510:
case 3118:
case 3771:
case 2791:
case 3467:
case 245:
case 2194:
case 3174:
case 3439:
case 1532:
case 2441:
case 4011:
case 1582:
case 1953:
case 3789:
case 903:
case 162:
case 352:
case 3849:
case 2022:
case 2157:
case 316:
case 3345:
case 1467:
case 2321:
case 1222:
case 1439:
case 1750:
case 2280:
case 1802:
case 1450:
case 4050:
case 1118:
case 2148:
case 4071:
case 1471:
case 1986:
case 3962:
case 1546:
case 2516:
case 645:
case 1797:
case 39:
case 1869:
case 1497:
case 114:
case 2234:
case 2624:
case 1837:
case 2356:
case 542:
case 2203:
case 1105:
case 1034:
case 608:
case 58:
case 1406:
case 4006:
case 3447:
case 319:
case 217:
case 3754:
case 1706:
case 1696:
case 3151:
case 3887:
case 3170:
case 1433:
case 4033:
case 2727:
case 4:
case 1548:
case 1036:
case 1404:
case 3053:
case 3648:
case 3456:
case 1101:
case 966:
case 298:
case 1704:
case 2262:
case 1361:
case 826:
case 2427:
case 792:
case 1733:
case 2358:
case 3086:
case 1930:
case 2514:
case 998:
case 3657:
case 1408:
case 3843:
case 1120:
case 1708:
case 1317:
case 2626:
case 3660:
case 1959:
case 3598:
case 2578:
case 659:
case 1176:
case 724:
case 1668:
case 240:
case 4075:
case 1475:
case 707:
case 75:
case 612:
case 3700:
case 656:
case 3341:
case 1775:
case 2325:
case 1092:
case 157:
case 10:
case 44:
case 86:
case 92:
case 1984:
case 270:
case 438:
case 2389:
case 361:
case 2885:
case 969:
case 22:
case 1391:
case 151:
case 254:
case 1715:
case 3042:
case 701:
case 1640:
case 2146:
case 1116:
case 1988:
case 3540:
case 1503:
case 3634:
case 658:
case 587:
case 1534:
case 3793:
case 1323:
case 2773:
case 2109:
case 2337:
case 2473:
case 391:
case 2369:
case 1216:
case 999:
case 663:
case 397:
case 1684:
case 299:
case 1276:
case 3638:
case 1538:
case 3228:
case 1443:
case 89:
case 1046:
case 622:
case 581:
case 2713:
case 680:
case 1743:
case 2951:
case 1968:
case 1883:
case 2926:
case 2001:
case 2735:
case 1752:
case 3875:
case 2895:
case 968:
case 3944:
case 2435:
case 828:
case 1381:
case 3463:
case 1082:
case 2020:
case 3066:
case 723:
case 996:
case 1580:
case 694:
case 2162:
case 302:
case 3331:
case 2302:
case 852:
case 953:
case 3680:
case 816:
case 204:
case 101:
case 441:
case 3542:
case 1449:
case 2928:
case 2419:
case 3064:
case 985:
case 329:
case 3335:
case 2612:
case 921:
case 1889:
case 471:
case 1749:
case 2719:
case 2891:
case 3210:
case 2924:
case 606:
case 3799:
case 1509:
case 2431:
case 1090:
case 3850:
case 1385:
case 3839:
case 221:
case 2134:
case 124:
case 2672:
case 3702:
case 1907:
case 2005:
case 1592:
case 447:
case 867:
case 3867:
case 2103:
case 1686:
case 3373:
case 3662:
case 1562:
case 2180:
case 1122:
case 1044:
case 609:
case 3098:
case 2078:
case 1060:
case 1932:
case 3737:
case 3553:
case 1278:
case 1536:
case 2260:
case 1653:
case 2817:
case 1847:
case 1854:
case 3094:
case 2074:
case 1787:
case 2257:
case 3313:
case 3982:
case 2244:
case 113:
case 1966:
case 1214:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752166802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,];
var gg_b = "1752166802/";

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
