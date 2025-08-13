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
case 1242:
case 78:
case 3300:
case 2061:
case 762:
case 2416:
case 2412:
case 1308:
case 618:
case 704:
case 2378:
case 538:
case 880:
case 2729:
case 3372:
case 1410:
case 1917:
case 1617:
case 3039:
case 4041:
case 3401:
case 1778:
case 3418:
case 3434:
case 2708:
case 1615:
case 1915:
case 783:
case 2448:
case 2393:
case 2353:
case 2271:
case 173:
case 7:
case 1201:
case 2631:
case 1974:
case 2931:
case 3210:
case 3554:
case 1735:
case 990:
case 2097:
case 2121:
case 2057:
case 1793:
case 3080:
case 2143:
case 1753:
case 3969:
case 3669:
case 1566:
case 71:
case 1524:
case 2119:
case 4002:
case 4006:
case 3410:
case 1770:
case 4035:
case 3617:
case 2306:
case 3917:
case 1399:
case 2167:
case 769:
case 1376:
case 799:
case 361:
case 439:
case 3915:
case 3615:
case 435:
case 4037:
case 1401:
case 2851:
case 1581:
case 2891:
case 3329:
case 2799:
case 2776:
case 3246:
case 1706:
case 3308:
case 4053:
case 2323:
case 1080:
case 3753:
case 2341:
case 660:
case 2216:
case 40:
case 1969:
case 736:
case 3562:
case 1741:
case 2027:
case 2191:
case 373:
case 3201:
case 2082:
case 2945:
case 286:
case 1594:
case 988:
case 1554:
case 2128:
case 3636:
case 2746:
case 576:
case 1196:
case 1179:
case 1152:
case 1156:
case 3299:
case 3259:
case 3276:
case 2340:
case 2278:
case 422:
case 3185:
case 1229:
case 3200:
case 746:
case 2150:
case 2190:
case 1740:
case 2638:
case 1342:
case 3126:
case 3187:
case 961:
case 3887:
case 190:
case 2977:
case 160:
case 2235:
case 881:
case 2470:
case 3826:
case 3864:
case 297:
case 1607:
case 2890:
case 267:
case 3429:
case 3944:
case 2675:
case 45:
case 2237:
case 3024:
case 2718:
case 3716:
case 3712:
case 1472:
case 872:
case 1499:
case 2406:
case 1879:
case 2582:
case 1896:
case 1892:
case 1094:
case 1301:
case 2525:
case 445:
case 2828:
case 2293:
case 2253:
case 2371:
case 1334:
case 449:
case 67:
case 2158:
case 2561:
case 1748:
case 4071:
case 243:
case 2270:
case 754:
case 3342:
case 2435:
case 1122:
case 1126:
case 1187:
case 1200:
case 1164:
case 2873:
case 1632:
case 3539:
case 429:
case 1803:
case 2453:
case 661:
case 707:
case 2348:
case 1299:
case 1259:
case 1276:
case 3196:
case 2202:
case 3879:
case 3856:
case 2989:
case 673:
case 1310:
case 3476:
case 550:
case 24:
case 3334:
case 2060:
case 3318:
case 3054:
case 259:
case 879:
case 3580:
case 1864:
case 3607:
case 1944:
case 726:
case 1429:
case 875:
case 360:
case 2597:
case 2557:
case 1024:
case 2478:
case 2595:
case 1885:
case 2898:
case 1588:
case 1066:
case 1062:
case 1408:
case 1883:
case 2593:
case 3832:
case 679:
case 1010:
case 3903:
case 3354:
case 3001:
case 2286:
case 2227:
case 972:
case 2724:
case 2766:
case 2762:
case 574:
case 3034:
case 2175:
case 253:
case 873:
case 3768:
case 2461:
case 42:
case 2016:
case 1366:
case 1362:
case 744:
case 1760:
case 2497:
case 2650:
case 2690:
case 287:
case 2990:
case 2138:
case 398:
case 861:
case 3622:
case 3626:
case 3926:
case 3687:
case 911:
case 2877:
case 2495:
case 2455:
case 2875:
case 3685:
case 3559:
case 3572:
case 3576:
case 1692:
case 540:
case 1679:
case 3599:
case 25:
case 1652:
case 1952:
case 2609:
case 3381:
case 1183:
case 3136:
case 3132:
case 497:
case 2523:
case 1768:
case 975:
case 2794:
case 3324:
case 3362:
case 225:
case 3280:
case 681:
case 2368:
case 1439:
case 1603:
case 2973:
case 3883:
case 1836:
case 2233:
case 1354:
case 443:
case 2506:
case 2502:
case 2482:
case 2486:
case 2920:
case 242:
case 3696:
case 3692:
case 1576:
case 3996:
case 3979:
case 3952:
case 3679:
case 1599:
case 2889:
case 3183:
case 455:
case 1132:
case 2425:
case 611:
case 1922:
case 1926:
case 1480:
case 1626:
case 1687:
case 1500:
case 1987:
case 531:
case 3807:
case 2570:
case 168:
case 2958:
case 2698:
case 1046:
case 1685:
case 3508:
case 3511:
case 1786:
case 782:
case 79:
case 2619:
case 1266:
case 172:
case 1380:
case 2921:
case 706:
case 43:
case 1725:
case 2943:
case 2863:
case 375:
case 2131:
case 1817:
case 2104:
case 3254:
case 3510:
case 2382:
case 3797:
case 2260:
case 1815:
case 1481:
case 1534:
case 3755:
case 4061:
case 1076:
case 1059:
case 4095:
case 2002:
case 1339:
case 793:
case 763:
case 433:
case 1494:
case 4057:
case 2540:
case 1874:
case 409:
case 2739:
case 2163:
case 668:
case 3029:
case 3011:
case 3008:
case 3424:
case 1546:
case 1510:
case 3174:
case 2093:
case 179:
case 888:
case 530:
case 747:
case 3534:
case 2691:
case 1755:
case 2651:
case 2951:
case 3518:
case 3501:
case 235:
case 2512:
case 203:
case 1733:
case 3782:
case 416:
case 2355:
case 610:
case 1388:
case 2361:
case 1913:
case 4025:
case 1649:
case 3546:
case 1869:
case 1462:
case 1011:
case 1281:
case 3115:
case 1761:
case 2845:
case 3072:
case 3076:
case 20:
case 508:
case 284:
case 3874:
case 2684:
case 296:
case 3494:
case 2847:
case 715:
case 719:
case 3454:
case 2491:
case 437:
case 2328:
case 3981:
case 3758:
case 3681:
case 2871:
case 1036:
case 2140:
case 1032:
case 1750:
case 1517:
case 1352:
case 1356:
case 1392:
case 797:
case 767:
case 1728:
case 628:
case 4073:
case 2563:
case 3213:
case 3322:
case 831:
case 1142:
case 1146:
case 2030:
case 3364:
case 2390:
case 2350:
case 4020:
case 1449:
case 2219:
case 1666:
case 1966:
case 3773:
case 2504:
case 950:
case 3110:
case 2484:
case 246:
case 3694:
case 1574:
case 2960:
case 2531:
case 3994:
case 2467:
case 2840:
case 3303:
case 4058:
case 2465:
case 2038:
case 2443:
case 424:
case 2014:
case 1720:
case 2812:
case 2816:
case 1364:
case 3709:
case 561:
case 1249:
case 74:
case 1387:
case 2419:
case 1326:
case 2785:
case 3834:
case 2265:
case 3515:
case 3356:
case 2787:
case 226:
case 928:
case 3392:
case 3396:
case 1810:
case 2722:
case 351:
case 3032:
case 3036:
case 858:
case 278:
case 3790:
case 1083:
case 3517:
case 3750:
case 840:
case 4050:
case 254:
case 2547:
case 3101:
case 2545:
case 2848:
case 743:
case 1569:
case 3842:
case 2075:
case 3846:
case 3962:
case 3966:
case 3662:
case 3624:
case 3449:
case 3924:
case 4009:
case 1005:
case 2116:
case 2703:
case 4028:
case 650:
case 100:
case 648:
case 456:
case 207:
case 3264:
case 3767:
case 2290:
case 2250:
case 951:
case 2514:
case 376:
case 3287:
case 2835:
case 821:
case 2538:
case 3313:
case 283:
case 2178:
case 412:
case 2837:
case 1292:
case 3015:
case 2209:
case 3172:
case 463:
case 493:
case 518:
case 733:
case 3532:
case 2853:
case 705:
case 2473:
case 301:
case 2625:
case 2925:
case 2047:
case 204:
case 2193:
case 830:
case 588:
case 28:
case 3899:
case 2686:
case 2045:
case 2982:
case 3456:
case 3452:
case 1719:
case 1808:
case 2137:
case 1811:
case 1505:
case 2458:
case 2498:
case 2343:
case 1485:
case 2878:
case 4065:
case 3688:
case 49:
case 2575:
case 213:
case 3988:
case 1507:
case 406:
case 2135:
case 1680:
case 257:
case 2319:
case 73:
case 2577:
case 3800:
case 600:
case 4067:
case 2220:
case 2749:
case 2102:
case 938:
case 4019:
case 1015:
case 3296:
case 3292:
case 2365:
case 651:
case 2713:
case 4021:
case 3583:
case 1532:
case 1536:
case 3403:
case 3639:
case 419:
case 1784:
case 2063:
case 176:
case 1222:
case 1226:
case 2170:
case 128:
case 764:
case 1264:
case 2258:
case 434:
case 1313:
case 2695:
case 1751:
case 1988:
case 2995:
case 1688:
case 3808:
case 3829:
case 348:
case 3426:
case 2870:
case 3980:
case 295:
case 1544:
case 265:
case 3487:
case 489:
case 2031:
case 2428:
case 2004:
case 2273:
case 900:
case 2351:
case 2391:
case 447:
case 590:
case 1492:
case 560:
case 1452:
case 1456:
case 3719:
case 2806:
case 2589:
case 2933:
case 1859:
case 374:
case 3244:
case 3369:
case 1207:
case 2637:
case 2937:
case 2275:
case 2430:
case 293:
case 263:
case 3745:
case 1205:
case 2091:
case 2127:
case 2186:
case 930:
case 2331:
case 2125:
case 3483:
case 1839:
case 2653:
case 2693:
case 641:
case 2993:
case 2084:
case 457:
case 206:
case 2067:
case 1283:
case 2528:
case 3232:
case 2825:
case 2509:
case 282:
case 3976:
case 3659:
case 131:
case 3672:
case 1579:
case 3699:
case 26:
case 2827:
case 29:
case 3999:
case 2065:
case 4045:
case 48:
case 2678:
case 3888:
case 2715:
case 1908:
case 1911:
case 1013:
case 2238:
case 3522:
case 3407:
case 1929:
case 3900:
case 2214:
case 2717:
case 404:
case 2590:
case 3564:
case 234:
case 510:
case 2347:
case 2133:
case 3839:
case 2573:
case 3436:
case 3432:
case 2345:
case 1483:
case 800:
case 1747:
case 2021:
case 2157:
case 3704:
case 784:
case 2043:
case 219:
case 3731:
case 941:
case 215:
case 320:
case 2195:
case 1745:
case 1188:
case 630:
case 2155:
case 436:
case 2230:
case 3608:
case 3611:
case 3908:
case 3911:
case 2855:
case 3049:
case 1405:
case 1888:
case 2161:
case 2895:
case 1585:
case 285:
case 140:
case 2970:
case 2670:
case 3880:
case 4031:
case 714:
case 1522:
case 1526:
case 1900:
case 3444:
case 3929:
case 4004:
case 3283:
case 1236:
case 1232:
case 3315:
case 1672:
case 1676:
case 1959:
case 1976:
case 1972:
case 1999:
case 1699:
case 3556:
case 2606:
case 2902:
case 580:
case 838:
case 703:
case 4030:
case 1918:
case 2705:
case 3910:
case 787:
case 848:
case 1003:
case 1274:
case 2231:
case 749:
case 341:
case 2204:
case 1305:
case 2521:
case 1124:
case 2519:
case 1307:
case 575:
case 130:
case 1162:
case 579:
case 2377:
case 3549:
case 1942:
case 1646:
case 2338:
case 722:
case 1824:
case 446:
case 1022:
case 1087:
case 640:
case 1064:
case 658:
case 2783:
case 2940:
case 121:
case 2860:
case 2447:
case 1217:
case 3474:
case 717:
case 3336:
case 2445:
case 3730:
case 1215:
case 3052:
case 3079:
case 478:
case 3305:
case 1789:
case 330:
case 3124:
case 581:
case 2912:
case 1269:
case 2616:
case 3918:
case 3901:
case 2245:
case 3618:
case 3601:
case 1881:
case 1415:
case 2551:
case 3775:
case 2247:
case 1194:
case 974:
case 2744:
case 1154:
case 4014:
case 224:
case 3003:
case 572:
case 2431:
case 1474:
case 3714:
case 2028:
case 4077:
case 321:
case 3738:
case 729:
case 1894:
case 256:
case 2648:
case 1092:
case 1096:
case 1181:
case 1079:
case 1336:
case 3469:
case 511:
case 3824:
case 3866:
case 1549:
case 3085:
case 3642:
case 3646:
case 3946:
case 454:
case 308:
case 2090:
case 3064:
case 3022:
case 2330:
case 801:
case 906:
case 50:
case 3090:
case 689:
case 3736:
case 1263:
case 3330:
case 2022:
case 2824:
case 1098:
case 2942:
case 96:
case 2642:
case 81:
case 2862:
case 2215:
case 1445:
case 2383:
case 1020:
case 144:
case 971:
case 356:
case 710:
case 1447:
case 1940:
case 1073:
case 857:
case 780:
case 3744:
case 503:
case 3389:
case 2274:
case 170:
case 324:
case 1705:
case 2601:
case 2918:
case 2775:
case 3591:
case 1671:
case 2634:
case 1971:
case 2162:
case 2166:
case 514:
case 88:
case 3612:
case 137:
case 3916:
case 892:
case 2124:
case 1375:
case 3463:
case 451:
case 4032:
case 1543:
case 1009:
case 3445:
case 2332:
case 2079:
case 66:
case 2052:
case 69:
case 1648:
case 2730:
case 1948:
case 2092:
case 1584:
case 989:
case 3447:
case 2894:
case 4007:
case 1404:
case 3940:
case 985:
case 400:
case 947:
case 2474:
case 2513:
case 1330:
case 3783:
case 1090:
case 1736:
case 3098:
case 3058:
case 3338:
case 1916:
case 1612:
case 1616:
case 2269:
case 2789:
case 4083:
case 627:
case 1463:
case 370:
case 798:
case 2910:
case 2154:
case 915:
case 3204:
case 3707:
case 2194:
case 919:
case 1551:
case 2415:
case 3671:
case 1591:
case 2881:
case 3705:
case 438:
case 2556:
case 1827:
case 16:
case 19:
case 4069:
case 772:
case 1886:
case 1882:
case 3906:
case 3902:
case 2317:
case 1489:
case 3602:
case 3606:
case 1528:
case 450:
case 2283:
case 1067:
case 2139:
case 1084:
case 2763:
case 2880:
case 389:
case 3670:
case 3970:
case 1214:
case 385:
case 944:
case 2444:
case 3897:
case 2629:
case 3857:
case 1238:
case 347:
case 2911:
case 2608:
case 1715:
case 3230:
case 3161:
case 1678:
case 3598:
case 3558:
case 2049:
case 3855:
case 3155:
case 2205:
case 3941:
case 3923:
case 1275:
case 1637:
case 3019:
case 1937:
case 2704:
case 127:
case 3157:
case 315:
case 3414:
case 220:
case 1935:
case 319:
case 1635:
case 3573:
case 1693:
case 1993:
case 1953:
case 2839:
case 3345:
case 1125:
case 2432:
case 2436:
case 624:
case 3289:
case 937:
case 1331:
case 334:
case 3133:
case 1182:
case 1186:
case 3769:
case 3347:
case 2900:
case 2600:
case 2407:
case 779:
case 1857:
case 2526:
case 147:
case 3238:
case 2564:
case 189:
case 3590:
case 1670:
case 185:
case 3550:
case 3678:
case 1895:
case 1855:
case 1558:
case 3363:
case 1230:
case 3715:
case 3509:
case 1606:
case 1906:
case 3065:
case 39:
case 587:
case 2999:
case 1833:
case 2672:
case 644:
case 3825:
case 2232:
case 2503:
case 3993:
case 476:
case 3693:
case 1769:
case 3051:
case 3182:
case 3091:
case 517:
case 3331:
case 1289:
case 312:
case 134:
case 1623:
case 1941:
case 363:
case 1195:
case 1861:
case 393:
case 3277:
case 1414:
case 115:
case 522:
case 4017:
case 119:
case 1043:
case 1157:
case 2369:
case 1438:
case 401:
case 1021:
case 2747:
case 77:
case 162:
case 3409:
case 555:
case 1986:
case 1982:
case 559:
case 18:
case 2743:
case 654:
case 3428:
case 3031:
case 2721:
case 3391:
case 1625:
case 1925:
case 3957:
case 54:
case 248:
case 3450:
case 3997:
case 365:
case 2487:
case 395:
case 761:
case 399:
case 157:
case 607:
case 791:
case 2680:
case 2422:
case 2426:
case 1135:
case 3655:
case 2069:
case 1878:
case 3995:
case 113:
case 1575:
case 3695:
case 3123:
case 2485:
case 1343:
case 1837:
case 3823:
case 183:
case 3841:
case 1835:
case 1538:
case 844:
case 1473:
case 3713:
case 3365:
case 2639:
case 1893:
case 420:
case 678:
case 2583:
case 1228:
case 3367:
case 3384:
case 2252:
case 3319:
case 954:
case 2544:
case 357:
case 169:
case 3135:
case 1490:
case 1957:
case 824:
case 2800:
case 552:
case 3577:
case 1123:
case 3343:
case 3458:
case 3137:
case 1955:
case 1141:
case 2791:
case 3321:
case 2988:
case 2751:
case 1995:
case 3878:
case 1933:
case 3982:
case 3986:
case 2872:
case 3045:
case 1633:
case 2876:
case 3682:
case 2859:
case 597:
case 2899:
case 567:
case 2479:
case 392:
case 362:
case 2492:
case 646:
case 1273:
case 1004:
case 1351:
case 3625:
case 907:
case 2203:
case 458:
case 3853:
case 2017:
case 2532:
case 3893:
case 3228:
case 201:
case 1365:
case 2015:
case 1106:
case 136:
case 2199:
case 2172:
case 3209:
case 1220:
case 1367:
case 1661:
case 3178:
case 1961:
case 383:
case 1530:
case 1841:
case 2765:
case 3837:
case 1258:
case 3:
case 1823:
case 1298:
case 2100:
case 228:
case 2264:
case 3538:
case 978:
case 856:
case 276:
case 1063:
case 2287:
case 1243:
case 502:
case 3077:
case 1221:
case 904:
case 307:
case 2413:
case 699:
case 2666:
case 2966:
case 594:
case 98:
case 586:
case 812:
case 2924:
case 992:
case 3291:
case 2118:
case 3373:
case 3848:
case 863:
case 1171:
case 2134:
case 913:
case 1089:
case 3968:
case 1467:
case 1531:
case 408:
case 1660:
case 4026:
case 4022:
case 1484:
case 146:
case 827:
case 251:
case 3726:
case 3284:
case 2379:
case 3787:
case 326:
case 2356:
case 2517:
case 2032:
case 3764:
case 1871:
case 983:
case 2834:
case 636:
case 1491:
case 1350:
case 3812:
case 1030:
case 2146:
case 2142:
case 516:
case 1779:
case 1752:
case 89:
case 477:
case 3421:
case 4003:
case 3398:
case 3443:
case 1848:
case 509:
case 3171:
case 3089:
case 1291:
case 533:
case 1251:
case 1547:
case 2110:
case 718:
case 2654:
case 965:
case 3467:
case 999:
case 2994:
case 3660:
case 3531:
case 815:
case 969:
case 3221:
case 2007:
case 657:
case 200:
case 1703:
case 4092:
case 3219:
case 2569:
case 4052:
case 613:
case 3030:
case 2326:
case 683:
case 3756:
case 3752:
case 2249:
case 3350:
case 1816:
case 1812:
case 238:
case 2385:
case 1038:
case 3563:
case 441:
case 1421:
case 885:
case 3140:
case 889:
case 1722:
case 2810:
case 126:
case 1787:
case 1284:
case 3451:
case 3491:
case 1265:
case 61:
case 2681:
case 3328:
case 2798:
case 1148:
case 366:
case 3984:
case 2117:
case 2874:
case 987:
case 2454:
case 211:
case 3967:
case 3667:
case 1804:
case 720:
case 3847:
case 2115:
case 1002:
case 4088:
case 2099:
case 3965:
case 2059:
case 642:
case 3548:
case 2546:
case 95:
case 556:
case 3361:
case 1739:
case 1163:
case 1863:
case 1943:
case 1921:
case 491:
case 1621:
case 1023:
case 2380:
case 339:
case 272:
case 731:
case 3037:
case 1619:
case 524:
case 922:
case 1041:
case 3397:
case 2782:
case 303:
case 3788:
case 3651:
case 1325:
case 3145:
case 3991:
case 3268:
case 823:
case 3147:
case 1260:
case 1327:
case 281:
case 3333:
case 3093:
case 1780:
case 867:
case 2817:
case 917:
case 544:
case 2466:
case 2462:
case 2011:
case 1078:
case 2869:
case 2424:
case 2029:
case 2913:
case 1667:
case 774:
case 1967:
case 1984:
case 166:
case 184:
case 3540:
case 1965:
case 1665:
case 1548:
case 2761:
case 843:
case 3468:
case 1268:
case 2795:
case 1651:
case 1145:
case 1951:
case 3571:
case 114:
case 859:
case 279:
case 3780:
case 3131:
case 275:
case 1053:
case 537:
case 929:
case 2294:
case 1147:
case 3260:
case 2797:
case 3386:
case 3382:
case 2510:
case 2757:
case 758:
case 2388:
case 1395:
case 3621:
case 3643:
case 3041:
case 653:
case 1512:
case 3023:
case 3619:
case 1037:
case 1875:
case 3998:
case 3130:
case 1578:
case 3698:
case 3658:
case 3781:
case 3958:
case 2805:
case 1455:
case 2508:
case 3261:
case 280:
case 1114:
case 2529:
case 149:
case 187:
case 1690:
case 1990:
case 1950:
case 4054:
case 3040:
case 684:
case 1628:
case 490:
case 3482:
case 3486:
case 1909:
case 3506:
case 547:
case 2656:
case 2652:
case 3889:
case 2679:
case 2952:
case 589:
case 342:
case 122:
case 519:
case 3071:
case 1360:
case 1227:
case 3368:
case 708:
case 1593:
case 2883:
case 614:
case 3973:
case 805:
case 1553:
case 3794:
case 2324:
case 932:
case 3297:
case 3257:
case 1838:
case 3754:
case 1535:
case 721:
case 1177:
case 210:
case 534:
case 325:
case 2362:
case 2366:
case 1461:
case 3295:
case 3523:
case 1016:
case 635:
case 1537:
case 2105:
case 3541:
case 603:
case 153:
case 3830:
case 4081:
case 488:
case 1425:
case 1040:
case 2136:
case 2599:
case 2576:
case 2572:
case 142:
case 2559:
case 3048:
case 1482:
case 4024:
case 3909:
case 1920:
case 1502:
case 571:
case 1261:
case 2985:
case 1698:
case 2685:
case 506:
case 2042:
case 90:
case 1130:
case 3875:
case 1958:
case 1658:
case 56:
case 3138:
case 3990:
case 996:
case 3690:
case 2964:
case 984:
case 3650:
case 3950:
case 2687:
case 345:
case 3114:
case 2987:
case 2500:
case 2922:
case 2926:
case 2626:
case 125:
case 3814:
case 1794:
case 2144:
case 317:
case 3535:
case 1257:
case 3838:
case 2768:
case 1541:
case 353:
case 3175:
case 1830:
case 1523:
case 2288:
case 3016:
case 3012:
case 3461:
case 1295:
case 2394:
case 3724:
case 3227:
case 2034:
case 903:
case 1189:
case 1973:
case 3225:
case 3593:
case 2836:
case 632:
case 2832:
case 418:
case 593:
case 2903:
case 2603:
case 123:
case 1701:
case 3241:
case 1734:
case 3898:
case 1975:
case 1675:
case 3595:
case 2400:
case 2607:
case 751:
case 197:
case 832:
case 2580:
case 1890:
case 3312:
case 1470:
case 1677:
case 260:
case 933:
case 2334:
case 480:
case 1828:
case 2054:
case 905:
case 3173:
case 664:
case 2318:
case 3060:
case 2094:
case 2896:
case 1586:
case 1582:
case 595:
case 3989:
case 569:
case 1406:
case 599:
case 2459:
case 152:
case 2476:
case 1109:
case 3120:
case 2081:
case 3202:
case 2156:
case 2192:
case 2539:
case 2983:
case 3348:
case 1128:
case 3493:
case 93:
case 2346:
case 2342:
case 2740:
case 1150:
case 3561:
case 3930:
case 2211:
case 2208:
case 3437:
case 343:
case 1278:
case 3828:
case 14:
case 835:
case 839:
case 1820:
case 1533:
case 3582:
case 3068:
case 4046:
case 4042:
case 3527:
case 1989:
case 3237:
case 504:
case 3734:
case 2408:
case 2588:
case 1478:
case 3718:
case 1241:
case 3470:
case 1557:
case 1710:
case 3235:
case 3977:
case 562:
case 3677:
case 592:
case 2944:
case 155:
case 2429:
case 2644:
case 609:
case 367:
case 159:
case 1316:
case 1312:
case 288:
case 814:
case 58:
case 51:
case 3638:
case 884:
case 218:
case 3190:
case 896:
case 866:
case 3614:
case 2122:
case 1435:
case 3441:
case 1561:
case 2748:
case 2185:
case 1630:
case 3423:
case 80:
case 1202:
case 3340:
case 2276:
case 3109:
case 2259:
case 2299:
case 1493:
case 583:
case 2632:
case 2936:
case 3440:
case 3025:
case 394:
case 2735:
case 817:
case 3884:
case 967:
case 2974:
case 997:
case 3151:
case 3082:
case 3086:
case 273:
case 3191:
case 507:
case 1353:
case 64:
case 1393:
case 2524:
case 2566:
case 554:
case 1055:
case 4059:
case 1095:
case 3216:
case 3212:
case 2753:
case 2793:
case 3323:
case 109:
case 133:
case 411:
case 1378:
case 2308:
case 2311:
case 1663:
case 3759:
case 3772:
case 1416:
case 1819:
case 2246:
case 643:
case 2615:
case 2915:
case 3471:
case 3165:
case 3891:
case 3851:
case 2917:
case 316:
case 3302:
case 3306:
case 3184:
case 750:
case 748:
case 849:
case 1729:
case 845:
case 13:
case 2849:
case 1216:
case 1212:
case 2669:
case 3095:
case 546:
case 2446:
case 2442:
case 3119:
case 3057:
case 3097:
case 1341:
case 305:
case 3143:
case 309:
case 1323:
case 2554:
case 728:
case 2210:
case 186:
case 2594:
case 959:
case 825:
case 1647:
case 1025:
case 1440:
case 3604:
case 3271:
case 3393:
case 2723:
case 3448:
case 1086:
case 3033:
case 1865:
case 2741:
case 1568:
case 2418:
case 2401:
case 1851:
case 3708:
case 2434:
case 1471:
case 3240:
case 2376:
case 2372:
case 2399:
case 1700:
case 2039:
case 1184:
case 116:
case 1302:
case 475:
case 3963:
case 3378:
case 2706:
case 2702:
case 3819:
case 842:
case 3061:
case 1799:
case 2149:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755108002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,];
var gg_b = "1755108002/";

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
