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
case 2943:
case 1798:
case 3777:
case 441:
case 1225:
case 783:
case 1944:
case 1281:
case 981:
case 2812:
case 891:
case 628:
case 32:
case 709:
case 1895:
case 591:
case 1673:
case 2359:
case 4001:
case 2552:
case 1703:
case 1132:
case 2637:
case 163:
case 2059:
case 784:
case 2911:
case 3744:
case 3956:
case 3404:
case 3163:
case 2007:
case 1280:
case 2477:
case 3659:
case 3227:
case 1411:
case 3628:
case 3505:
case 1605:
case 354:
case 164:
case 9:
case 3903:
case 118:
case 1682:
case 2248:
case 428:
case 3389:
case 3114:
case 3419:
case 3724:
case 1325:
case 782:
case 1235:
case 387:
case 2266:
case 1961:
case 3811:
case 1381:
case 757:
case 3648:
case 2869:
case 3760:
case 2803:
case 3188:
case 1804:
case 858:
case 696:
case 30:
case 2038:
case 3478:
case 3393:
case 2461:
case 1122:
case 665:
case 2338:
case 4032:
case 162:
case 2627:
case 2259:
case 1245:
case 3886:
case 91:
case 1924:
case 2581:
case 1316:
case 2778:
case 410:
case 2525:
case 2207:
case 3495:
case 546:
case 2129:
case 2693:
case 3027:
case 3810:
case 1080:
case 2424:
case 3638:
case 1538:
case 3594:
case 1380:
case 465:
case 1694:
case 1650:
case 2348:
case 3289:
case 1862:
case 4042:
case 3912:
case 496:
case 2875:
case 1612:
case 421:
case 2727:
case 172:
case 2695:
case 111:
case 2117:
case 750:
case 3660:
case 3852:
case 1837:
case 1481:
case 3994:
case 380:
case 34:
case 239:
case 1751:
case 3493:
case 1524:
case 4053:
case 209:
case 2438:
case 2981:
case 2805:
case 392:
case 2980:
case 2060:
case 836:
case 4067:
case 1847:
case 284:
case 1948:
case 621:
case 506:
case 3204:
case 2882:
case 3395:
case 475:
case 159:
case 1561:
case 988:
case 2708:
case 2324:
case 1323:
case 3427:
case 2916:
case 1480:
case 2024:
case 448:
case 1773:
case 3362:
case 1603:
case 4071:
case 3569:
case 3219:
case 3982:
case 431:
case 2604:
case 2774:
case 1106:
case 3880:
case 2466:
case 1343:
case 3447:
case 1043:
case 2190:
case 1656:
case 519:
case 3165:
case 2459:
case 3707:
case 3634:
case 1534:
case 2533:
case 1297:
case 3278:
case 3816:
case 1893:
case 174:
case 2747:
case 885:
case 1782:
case 393:
case 3295:
case 2662:
case 851:
case 3004:
case 2191:
case 3728:
case 1167:
case 551:
case 3575:
case 1033:
case 76:
case 1311:
case 2586:
case 2334:
case 1333:
case 3437:
case 966:
case 2543:
case 3825:
case 4070:
case 3184:
case 2907:
case 2808:
case 978:
case 3056:
case 3643:
case 2544:
case 3356:
case 1586:
case 1334:
case 3686:
case 3735:
case 2452:
case 3398:
case 2033:
case 2011:
case 1077:
case 343:
case 2333:
case 1407:
case 3303:
case 426:
case 1850:
case 3562:
case 3069:
case 3989:
case 116:
case 3003:
case 945:
case 1510:
case 274:
case 1747:
case 2893:
case 485:
case 2445:
case 2782:
case 720:
case 370:
case 1511:
case 2577:
case 2698:
case 367:
case 3172:
case 2966:
case 129:
case 3405:
case 1533:
case 1261:
case 1044:
case 1935:
case 3745:
case 2656:
case 762:
case 1190:
case 3136:
case 2043:
case 2959:
case 2010:
case 1789:
case 685:
case 2827:
case 2435:
case 4017:
case 3947:
case 799:
case 626:
case 2773:
case 651:
case 531:
case 273:
case 801:
case 2170:
case 718:
case 2561:
case 3697:
case 3578:
case 1597:
case 1678:
case 227:
case 1277:
case 3866:
case 342:
case 1619:
case 3519:
case 3312:
case 406:
case 2948:
case 184:
case 3012:
case 3203:
case 436:
case 575:
case 1360:
case 730:
case 2750:
case 3859:
case 1060:
case 2416:
case 3927:
case 1361:
case 139:
case 961:
case 1981:
case 3623:
case 1925:
case 4090:
case 3807:
case 3716:
case 2560:
case 3993:
case 1873:
case 2210:
case 2938:
case 2612:
case 821:
case 1117:
case 1695:
case 2889:
case 2171:
case 16:
case 538:
case 2862:
case 1196:
case 737:
case 808:
case 2650:
case 896:
case 596:
case 1875:
case 3995:
case 838:
case 1424:
case 2960:
case 1719:
case 3593:
case 1129:
case 4039:
case 2380:
case 2538:
case 3625:
case 925:
case 1525:
case 510:
case 3412:
case 1778:
case 3351:
case 3797:
case 3844:
case 220:
case 1207:
case 3051:
case 446:
case 2924:
case 2016:
case 2245:
case 986:
case 2316:
case 1923:
case 3205:
case 3094:
case 1461:
case 2712:
case 2497:
case 149:
case 1259:
case 2101:
case 3680:
case 1580:
case 1795:
case 1803:
case 3282:
case 1869:
case 4049:
case 3919:
case 2804:
case 2081:
case 3834:
case 1516:
case 3616:
case 773:
case 2325:
case 3113:
case 2235:
case 2819:
case 828:
case 1187:
case 759:
case 3547:
case 691:
case 2142:
case 727:
case 528:
case 2411:
case 322:
case 2352:
case 303:
case 2559:
case 1477:
case 247:
case 1762:
case 4029:
case 2052:
case 2605:
case 3073:
case 2433:
case 3786:
case 230:
case 3635:
case 3469:
case 1007:
case 3251:
case 2045:
case 3861:
case 2934:
case 968:
case 197:
case 914:
case 2566:
case 2769:
case 2132:
case 2486:
case 1238:
case 1359:
case 3294:
case 1028:
case 1674:
case 263:
case 1704:
case 1059:
case 1328:
case 2443:
case 2176:
case 1689:
case 1444:
case 2895:
case 3589:
case 304:
case 491:
case 1149:
case 2410:
case 3645:
case 1366:
case 2756:
case 3185:
case 772:
case 360:
case 2507:
case 3711:
case 377:
case 2798:
case 841:
case 541:
case 2944:
case 3475:
case 2225:
case 3733:
case 1409:
case 1318:
case 3367:
case 1463:
case 1018:
case 3888:
case 2169:
case 2464:
case 4095:
case 1801:
case 492:
case 1822:
case 3939:
case 771:
case 712:
case 3785:
case 1690:
case 3636:
case 3590:
case 680:
case 3270:
case 64:
case 3814:
case 1964:
case 2420:
case 3133:
case 973:
case 2046:
case 542:
case 2653:
case 3554:
case 469:
case 1654:
case 1079:
case 2565:
case 1292:
case 2346:
case 2198:
case 2858:
case 2957:
case 692:
case 3306:
case 2829:
case 356:
case 166:
case 2667:
case 4019:
case 2402:
case 59:
case 1739:
case 2896:
case 937:
case 2268:
case 786:
case 1457:
case 2755:
case 98:
case 3646:
case 669:
case 1902:
case 1583:
case 2036:
case 3143:
case 44:
case 1921:
case 261:
case 3517:
case 3740:
case 2849:
case 4004:
case 2722:
case 1218:
case 3267:
case 694:
case 3400:
case 2441:
case 1832:
case 3626:
case 713:
case 3370:
case 3070:
case 2246:
case 1392:
case 3123:
case 2015:
case 1599:
case 1092:
case 1279:
case 3206:
case 1940:
case 693:
case 4062:
case 2413:
case 927:
case 331:
case 2368:
case 3371:
case 2068:
case 1729:
case 959:
case 1265:
case 2592:
case 3401:
case 867:
case 870:
case 2399:
case 3253:
case 570:
case 3615:
case 1515:
case 2272:
case 2326:
case 2670:
case 2236:
case 1488:
case 1855:
case 2026:
case 1931:
case 2914:
case 2264:
case 3255:
case 1209:
case 1531:
case 2992:
case 3116:
case 3300:
case 3726:
case 2341:
case 589:
case 3865:
case 2041:
case 2220:
case 3470:
case 4089:
case 3180:
case 1492:
case 3768:
case 803:
case 271:
case 2771:
case 3640:
case 533:
case 212:
case 1806:
case 833:
case 4037:
case 2622:
case 2600:
case 3641:
case 2770:
case 2285:
case 2313:
case 341:
case 2221:
case 1926:
case 1014:
case 3884:
case 860:
case 3471:
case 1108:
case 3125:
case 2202:
case 577:
case 3715:
case 2331:
case 1314:
case 3301:
case 515:
case 3558:
case 1658:
case 225:
case 815:
case 3529:
case 1193:
case 3276:
case 1968:
case 42:
case 3917:
case 745:
case 1388:
case 654:
case 534:
case 3630:
case 1696:
case 3055:
case 3772:
case 963:
case 2984:
case 1502:
case 3355:
case 1983:
case 310:
case 2364:
case 3621:
case 1521:
case 3145:
case 3685:
case 1585:
case 1790:
case 3736:
case 687:
case 3200:
case 396:
case 308:
case 181:
case 2817:
case 3342:
case 60:
case 1871:
case 3991:
case 1484:
case 1649:
case 2020:
case 2706:
case 2676:
case 802:
case 1174:
case 2557:
case 365:
case 652:
case 1137:
case 213:
case 532:
case 3152:
case 523:
case 2446:
case 502:
case 1972:
case 3954:
case 2965:
case 2509:
case 2231:
case 4008:
case 3990:
case 3135:
case 2213:
case 679:
case 947:
case 3664:
case 3032:
case 452:
case 1791:
case 930:
case 2240:
case 3539:
case 1639:
case 3201:
case 2642:
case 2436:
case 2182:
case 1687:
case 3587:
case 3620:
case 1520:
case 2288:
case 424:
case 83:
case 3349:
case 3490:
case 1182:
case 50:
case 4050:
case 2520:
case 114:
case 997:
case 65:
case 53:
case 552:
case 2791:
case 2357:
case 276:
case 3718:
case 4094:
case 623:
case 1240:
case 1302:
case 2870:
case 3663:
case 1231:
case 3609:
case 1321:
case 1002:
case 1213:
case 2564:
case 1655:
case 3784:
case 2972:
case 887:
case 3815:
case 1085:
case 587:
case 2:
case 788:
case 113:
case 3657:
case 2479:
case 255:
case 1173:
case 1446:
case 3339:
case 3532:
case 1632:
case 402:
case 950:
case 2871:
case 2484:
case 3296:
case 2189:
case 3967:
case 281:
case 1918:
case 3087:
case 1320:
case 45:
case 1483:
case 3387:
case 1706:
case 1979:
case 2790:
case 2946:
case 3826:
case 2502:
case 1064:
case 3491:
case 2363:
case 2418:
case 346:
case 579:
case 3765:
case 2063:
case 2983:
case 1891:
case 1426:
case 186:
case 391:
case 2530:
case 1150:
case 2388:
case 434:
case 82:
case 21:
case 3249:
case 553:
case 2658:
case 1499:
case 3138:
case 415:
case 2193:
case 1040:
case 603:
case 4005:
case 853:
case 622:
case 125:
case 795:
case 2926:
case 1221:
case 3417:
case 1313:
case 1331:
case 477:
case 1202:
case 1013:
case 2108:
case 3883:
case 2541:
case 1600:
case 689:
case 1285:
case 1771:
case 615:
case 3029:
case 2717:
case 3501:
case 1601:
case 433:
case 2492:
case 403:
case 2806:
case 1622:
case 604:
case 3096:
case 3287:
case 1220:
case 1330:
case 554:
case 3148:
case 1588:
case 3688:
case 1341:
case 2853:
case 2915:
case 1041:
case 3836:
case 1890:
case 3970:
case 2513:
case 2531:
case 677:
case 2209:
case 660:
case 1670:
case 2913:
case 2931:
case 3864:
case 1026:
case 2855:
case 2488:
case 3290:
case 1440:
case 3692:
case 1099:
case 984:
case 470:
case 3161:
case 3317:
case 1413:
case 2842:
case 594:
case 1431:
case 3820:
case 2729:
case 288:
case 1988:
case 1887:
case 2940:
case 2796:
case 3922:
case 3458:
case 3885:
case 1015:
case 3900:
case 1315:
case 667:
case 3429:
case 2092:
case 2279:
case 983:
case 2526:
case 3802:
case 2284:
case 593:
case 1441:
case 893:
case 3788:
case 909:
case 3571:
case 4003:
case 2568:
case 1701:
case 351:
case 161:
case 2617:
case 2195:
case 939:
case 1112:
case 2218:
case 1722:
case 3291:
case 84:
case 1584:
case 3090:
case 1036:
case 2583:
case 3679:
case 2457:
case 1372:
case 3054:
case 1755:
case 3354:
case 2691:
case 1175:
case 266:
case 1667:
case 3567:
case 1518:
case 3217:
case 3830:
case 1896:
case 295:
case 1858:
case 1957:
case 1829:
case 3932:
case 178:
case 2787:
case 3553:
case 1653:
case 442:
case 869:
case 3177:
case 1198:
case 2079:
case 3665:
case 3439:
case 1346:
case 3134:
case 2654:
case 1156:
case 2690:
case 1083:
case 3831:
case 1383:
case 3955:
case 592:
case 3840:
case 2749:
case 2801:
case 1776:
case 1606:
case 3506:
case 2822:
case 2104:
case 4012:
case 2463:
case 2318:
case 1464:
case 1732:
case 306:
case 2018:
case 3518:
case 1567:
case 3402:
case 2949:
case 2271:
case 872:
case 3268:
case 811:
case 3421:
case 1830:
case 684:
case 3742:
case 2006:
case 3957:
case 3858:
case 3485:
case 67:
case 1932:
case 2110:
case 2720:
case 1390:
case 1449:
case 2683:
case 3226:
case 3372:
case 1054:
case 409:
case 2353:
case 1679:
case 4061:
case 345:
case 3579:
case 3299:
case 439:
case 2764:
case 2646:
case 47:
case 2939:
case 275:
case 1757:
case 3169:
case 3732:
case 2888:
case 970:
case 484:
case 106:
case 3464:
case 1091:
case 3215:
case 527:
case 2672:
case 728:
case 2702:
case 3653:
case 609:
case 2133:
case 827:
case 3198:
case 1665:
case 3346:
case 639:
case 2442:
case 3156:
case 2590:
case 2785:
case 3383:
case 2270:
case 1955:
case 1487:
case 3420:
case 2814:
case 1831:
case 3368:
case 231:
case 2371:
case 573:
case 942:
case 3887:
case 3988:
case 873:
case 1017:
case 3431:
case 2071:
case 1901:
case 482:
case 2206:
case 1922:
case 3700:
case 3670:
case 3326:
case 1290:
case 3026:
case 2401:
case 3399:
case 3440:
case 429:
case 457:
case 3099:
case 119:
case 185:
case 2958:
case 710:
case 151:
case 361:
case 2668:
case 416:
case 58:
case 3112:
case 2996:
case 837:
case 4077:
case 1900:
case 708:
case 3246:
case 629:
case 4034:
case 507:
case 1458:
case 2699:
case 2123:
case 738:
case 1124:
case 99:
case 1714:
case 765:
case 2070:
case 1496:
case 1417:
case 241:
case 2884:
case 3013:
case 450:
case 3331:
case 902:
case 1500:
case 3600:
case 3770:
case 697:
case 2818:
case 2276:
case 3891:
case 1971:
case 2630:
case 2596:
case 2022:
case 4059:
case 3194:
case 1138:
case 3992:
case 497:
case 3854:
case 2000:
case 3041:
case 2865:
case 500:
case 2613:
case 3264:
case 1836:
case 1970:
case 650:
case 3514:
case 2631:
case 3151:
case 371:
case 2768:
case 1239:
case 2180:
case 312:
case 1358:
case 2640:
case 3622:
case 1522:
case 1058:
case 3415:
case 1329:
case 864:
case 2470:
case 1287:
case 818:
case 3588:
case 1688:
case 518:
case 564:
case 3330:
case 717:
case 1148:
case 3231:
case 3563:
case 1609:
case 922:
case 3002:
case 2664:
case 903:
case 2746:
case 1166:
case 2892:
case 899:
case 1953:
case 2783:
case 701:
case 1815:
case 599:
case 3182:
case 3436:
case 2587:
case 1049:
case 989:
case 2032:
case 1718:
case 3767:
case 2222:
case 335:
case 1454:
case 2201:
case 305:
case 2539:
case 2145:
case 2736:
case 2200:
case 2772:
case 2467:
case 3753:
case 2602:
case 915:
case 520:
case 1826:
case 1491:
case 1107:
case 2621:
case 3364:
case 313:
case 265:
case 1532:
case 3632:
case 960:
case 3446:
case 3173:
case 977:
case 3918:
case 3817:
case 208:
case 3020:
case 3483:
case 1387:
case 3320:
case 46:
case 3676:
case 1549:
case 1991:
case 2087:
case 381:
case 2967:
case 196:
case 3189:
case 2576:
case 2387:
case 1042:
case 355:
case 3479:
case 2039:
case 3137:
case 3174:
case 2339:
case 4080:
case 1152:
case 2258:
case 2532:
case 2491:
case 785:
case 3502:
case 246:
case 3418:
case 3309:
case 1055:
case 3363:
case 420:
case 1772:
case 2765:
case 1621:
case 3009:
case 3063:
case 3790:
case 1685:
case 751:
case 1145:
case 699:
case 4016:
case 3791:
case 1222:
case 1453:
case 2718:
case 549:
case 1539:
case 3465:
case 3639:
case 2159:
case 2454:
case 1376:
case 719:
case 1587:
case 258:
case 2784:
case 4081:
case 954:
case 1954:
case 1990:
case 2779:
case 620:
case 3214:
case 2663:
case 1664:
case 2555:
case 128:
case 2096:
case 1470:
case 2029:
case 3127:
case 2358:
case 3540:
case 3492:
case 3717:
case 2058:
case 2522:
case 447:
case 3806:
case 2970:
case 2836:
case 1799:
case 3209:
case 3263:
case 1631:
case 90:
case 2872:
case 736:
case 1865:
case 597:
case 3915:
case 93:
case 2138:
case 3658:
case 1022:
case 463:
case 1301:
case 3629:
case 1529:
case 979:
case 3257:
case 1001:
case 2971:
case 1276:
case 3088:
case 291:
case 1917:
case 3968:
case 1596:
case 1630:
case 3696:
case 2249:
case 3388:
case 1641:
case 1181:
case 4035:
case 1884:
case 2792:
case 141:
case 3108:
case 630:
case 2802:
case 3526:
case 1626:
case 890:
case 2821:
case 2496:
case 3284:
case 1123:
case 2885:
case 2458:
case 1713:
case 2900:
case 3092:
case 437:
case 2124:
case 1740:
case 251:
case 3568:
case 1668:
case 226:
case 1267:
case 48:
case 1996:
case 3930:
case 2291:
case 1958:
case 285:
case 746:
case 1929:
case 94:
case 3832:
case 474:
case 980:
case 219:
case 637:
case 758:
case 992:
case 3913:
case 1863:
case 1809:
case 2864:
case 3488:
case 582:
case 4010:
case 2901:
case 1730:
case 674:
case 882:
case 2922:
case 3758:
case 3842:
case 2317:
case 2820:
case 3414:
case 969:
case 68:
case 640:
case 388:
case 3690:
case 1785:
case 2813:
case 1442:
case 3964:
case 1814:
case 2955:
case 1270:
case 1133:
case 427:
case 2553:
case 1672:
case 3572:
case 3292:
case 994:
case 3079:
case 1721:
case 459:
case 3654:
case 2134:
case 175:
case 2391:
case 3104:
case 1367:
case 3409:
case 2942:
case 584:
case 2091:
case 3018:
case 1987:
case 1455:
case 87:
case 3801:
case 57:
case 2841:
case 2679:
case 3457:
case 1353:
case 839:
case 2054:
case 2763:
case 659:
case 539:
case 1053:
case 2354:
case 1186:
case 993:
case 2390:
case 1143:
case 1476:
case 3921:
case 395:
case 583:
case 1720:
case 3787:
case 1949:
case 1591:
case 411:
case 2618:
case 2567:
case 156:
case 472:
case 2830:
case 121:
case 2217:
case 1164:
case 3535:
case 1469:
case 2956:
case 792:
case 1251:
case 397:
case 189:
case 1743:
case 958:
case 1861:
case 3933:
case 2666:
case 2744:
case 3647:
case 1547:
case 254:
case 2969:
case 2903:
case 1456:
case 2389:
case 3248:
case 1498:
case 3477:
case 1373:
case 3434:
case 122:
case 625:
case 133:
case 2628:
case 412:
case 3066:
case 1121:
case 4013:
case 2607:
case 2734:
case 160:
case 1733:
case 1475:
case 3359:
case 1005:
case 3028:
case 425:
case 2573:
case 1294:
case 1860:
case 4040:
case 1652:
case 74:
case 3059:
case 1305:
case 1537:
case 253:
case 3637:
case 2157:
case 115:
case 3328:
case 3674:
case 946:
case 134:
case 3812:
case 1082:
case 51:
case 22:
case 81:
case 3444:
case 3689:
case 2843:
case 1412:
case 279:
case 1797:
case 3525:
case 3608:
case 1508:
case 2761:
case 3207:
case 793:
case 2495:
case 1844:
case 2886:
case 1141:
case 3923:
case 2912:
case 3196:
case 1130:
case 614:
case 881:
case 3348:
case 36:
case 668:
case 3048:
case 581:
case 1995:
case 2027:
case 102:
case 1593:
case 2237:
case 3424:
case 3719:
case 855:
case 555:
case 2638:
case 287:
case 1877:
case 3997:
case 3898:
case 5:
case 1834:
case 2833:
case 3516:
case 2114:
case 2551:
case 4002:
case 2419:
case 4021:
case 1113:
case 2393:
case 1094:
case 405:
case 3228:
case 613:
case 1527:
case 3338:
case 435:
case 1394:
case 2188:
case 414:
case 2760:
case 1282:
case 20:
case 2247:
case 3793:
case 1451:
case 3619:
case 1519:
case 1269:
case 1203:
case 2395:
case 1859:
case 37:
case 3360:
case 678:
case 1828:
case 292:
case 1927:
case 3805:
case 3060:
case 2951:
case 2835:
case 4083:
case 269:
case 1725:
case 3234:
case 2427:
case 645:
case 3277:
case 3024:
case 4046:
case 3873:
case 478:
case 895:
case 2994:
case 866:
case 2019:
case 2262:
case 1780:
case 566:
case 2493:
case 2378:
case 2624:
case 3361:
case 3523:
case 72:
case 1623:
case 2078:
case 3981:
case 951:
case 3061:
case 3925:
case 985:
case 753:
case 2759:
case 3850:
case 2004:
case 3662:
case 1369:
case 3407:
case 1303:
case 461:
case 2304:
case 3191:
case 1989:
case 1212:
case 779:
case 2973:
case 1610:
case 3510:
case 3952:
case 293:
case 1838:
case 1937:
case 3260:
case 1974:
case 1056:
case 390:
case 1356:
case 2184:
case 2489:
case 2644:
case 3377:
case 3586:
case 3334:
case 1686:
case 1098:
case 2179:
case 3034:
case 382:
case 3789:
case 3466:
case 787:
case 1947:
case 1848:
case 2362:
case 1075:
case 2503:
case 2982:
case 2219:
case 1375:
case 661:
case 357:
case 2598:
case 167:
case 3459:
case 2165:
case 998:
case 2707:
case 3511:
case 2634:
case 3154:
case 1405:
case 1633:
case 3533:
case 936:
case 2816:
case 329:
case 3851:
case 144:
case 3935:
case 4026:
case 3190:
case 752:
case 1482:
case 3343:
case 3043:
case 2136:
case 2482:
case 270:
case 1165:
case 1677:
case 267:
case 3698:
case 3297:
case 1278:
case 3086:
case 2172:
case 1816:
case 2633:
case 2405:
case 975:
case 2752:
case 2075:
case 3435:
case 3669:
case 1362:
case 3773:
case 194:
case 2947:
case 2375:
case 1062:
case 373:
case 3106:
case 948:
case 3959:
case 1880:
case 3010:
case 3827:
case 1905:
case 3452:
case 2735:
case 3311:
case 4092:
case 2398:
case 1881:
case 3011:
case 1474:
case 1437:
case 307:
case 723:
case 2183:
case 3808:
case 2643:
case 2056:
case 1766:
case 3544:
case 1489:
case 1644:
case 374:
case 3445:
case 38:
case 340:
case 1295:
case 1759:
case 1118:
case 561:
case 1575:
case 2069:
case 2212:
case 1728:
case 3705:
case 2807:
case 180:
case 2908:
case 14:
case 2716:
case 2126:
case 3524:
case 1624:
case 545:
case 1078:
case 3286:
case 2199:
case 1319:
case 1408:
case 1950:
case 3612:
case 2275:
case 2595:
case 3889:
case 2780:
case 311:
case 372:
case 578:
case 1748:
case 777:
case 3874:
case 3938:
case 901:
case 4079:
case 3561:
case 2725:
case 2578:
case 2115:
case 2866:
case 931:
case 2298:
case 3211:
case 1427:
case 1835:
case 4084:
case 2256:
case 703:
case 1951:
case 3170:
case 2859:
case 2828:
case 192:
case 2927:
case 1095:
case 3948:
case 2312:
case 3794:
case 1395:
case 1738:
case 2012:
case 568:
case 1760:
case 770:
case 2350:
case 1648:
case 224:
case 868:
case 1478:
case 744:
case 1393:
case 805:
case 3101:
case 2140:
case 3325:
case 2131:
case 3025:
case 3235:
case 1811:
case 2834:
case 3961:
case 399:
case 187:
case 2616:
case 928:
case 813:
case 223:
case 1274:
case 2273:
case 3380:
case 3694:
case 3423:
case 3252:
case 1327:
case 232:
case 513:
case 25:
case 3650:
case 1912:
case 1289:
case 2995:
case 3016:
case 3924:
case 3245:
case 2681:
case 3316:
case 3100:
case 1761:
case 2797:
case 1843:
case 2412:
case 4063:
case 2844:
case 1495:
case 2082:
case 3176:
case 2962:
case 3443:
case 886:
case 234:
case 2250:
case 2589:
case 1975:
case 586:
case 204:
case 12:
case 910:
case 3703:
case 3486:
case 3769:
case 3132:
case 1573:
case 3673:
case 2005:
case 1293:
case 215:
case 363:
case 2537:
case 260:
case 1607:
case 3335:
case 2121:
case 3798:
case 1777:
case 3035:
case 3944:
case 2475:
case 2733:
case 3225:
case 79:
case 996:
case 2185:
case 3352:
case 1227:
case 2373:
case 347:
case 3559:
case 2498:
case 203:
case 871:
case 1374:
case 512:
case 233:
case 1505:
case 1903:
case 318:
case 1089:
case 0:
case 1389:
case 1582:
case 2456:
case 2904:
case 3045:
case 2861:
case 2743:
case 1897:
case 289:
case 3977:
case 3566:
case 3345:
case 1666:
case 1744:
case 330:
case 2786:
case 1109:
case 300:
case 1163:
case 1404:
case 1956:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744178401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,];
var gg_b = "1744178401/";

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
