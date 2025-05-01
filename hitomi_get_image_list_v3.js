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
case 592:
case 909:
case 419:
case 568:
case 2543:
case 2664:
case 1954:
case 3069:
case 3021:
case 704:
case 2131:
case 1123:
case 466:
case 2194:
case 1053:
case 2467:
case 3914:
case 1219:
case 139:
case 2885:
case 3290:
case 2082:
case 2739:
case 1067:
case 38:
case 497:
case 1722:
case 1407:
case 757:
case 1148:
case 2498:
case 2044:
case 2777:
case 3847:
case 549:
case 1820:
case 849:
case 2187:
case 2974:
case 2528:
case 3364:
case 308:
case 852:
case 1604:
case 2943:
case 3433:
case 914:
case 1554:
case 3580:
case 2320:
case 3217:
case 3561:
case 3070:
case 3894:
case 3831:
case 3766:
case 3529:
case 1278:
case 130:
case 1468:
case 875:
case 1351:
case 2845:
case 2758:
case 3775:
case 2583:
case 900:
case 1602:
case 1889:
case 3311:
case 4013:
case 410:
case 319:
case 685:
case 927:
case 3940:
case 1927:
case 1871:
case 661:
case 710:
case 1631:
case 2010:
case 1694:
case 2715:
case 977:
case 1952:
case 1016:
case 408:
case 251:
case 2036:
case 637:
case 21:
case 2192:
case 2371:
case 3802:
case 1164:
case 3005:
case 3912:
case 3266:
case 3056:
case 1224:
case 1778:
case 1497:
case 2147:
case 236:
case 3476:
case 397:
case 540:
case 3700:
case 2068:
case 48:
case 3887:
case 525:
case 3275:
case 2084:
case 2070:
case 1405:
case 1532:
case 656:
case 1823:
case 2766:
case 1206:
case 1065:
case 1255:
case 1811:
case 3389:
case 2529:
case 2200:
case 1760:
case 266:
case 4007:
case 3845:
case 3758:
case 1076:
case 2450:
case 2775:
case 3583:
case 1394:
case 3648:
case 2738:
case 3430:
case 573:
case 2940:
case 3215:
case 380:
case 3416:
case 1218:
case 3611:
case 3983:
case 823:
case 1302:
case 1741:
case 204:
case 834:
case 534:
case 3623:
case 1546:
case 2348:
case 3715:
case 3036:
case 1387:
case 155:
case 2465:
case 4073:
case 696:
case 3371:
case 2689:
case 1848:
case 2929:
case 4044:
case 3147:
case 3:
case 1260:
case 2700:
case 3258:
case 160:
case 2887:
case 1120:
case 3084:
case 3574:
case 1779:
case 751:
case 84:
case 3543:
case 3664:
case 1189:
case 2013:
case 2151:
case 1737:
case 389:
case 2259:
case 1033:
case 2717:
case 3131:
case 3349:
case 3239:
case 7:
case 2914:
case 3467:
case 3277:
case 3885:
case 2145:
case 3453:
case 1591:
case 1864:
case 3826:
case 3739:
case 2892:
case 2649:
case 2095:
case 2514:
case 3044:
case 2790:
case 169:
case 3187:
case 41:
case 13:
case 1279:
case 3528:
case 791:
case 451:
case 1171:
case 838:
case 780:
case 3943:
case 116:
case 2433:
case 1925:
case 4010:
case 2759:
case 1237:
case 1413:
case 988:
case 122:
case 2580:
case 2217:
case 1135:
case 407:
case 3491:
case 3434:
case 978:
case 917:
case 329:
case 1390:
case 2507:
case 2582:
case 1598:
case 2396:
case 2973:
case 2657:
case 1881:
case 4061:
case 1603:
case 4029:
case 1428:
case 3486:
case 3637:
case 2043:
case 2890:
case 3100:
case 2381:
case 494:
case 3679:
case 1896:
case 2454:
case 754:
case 1788:
case 3839:
case 3726:
case 3513:
case 2792:
case 2204:
case 802:
case 232:
case 4040:
case 1317:
case 3175:
case 815:
case 2247:
case 999:
case 2337:
case 454:
case 22:
case 3226:
case 1288:
case 3681:
case 1264:
case 3969:
case 2704:
case 2817:
case 1953:
case 928:
case 182:
case 3014:
case 707:
case 379:
case 1837:
case 1567:
case 2982:
case 3138:
case 720:
case 1998:
case 1639:
case 745:
case 2663:
case 2544:
case 2910:
case 2787:
case 3245:
case 2083:
case 2177:
case 3190:
case 394:
case 3446:
case 2936:
case 1163:
case 1122:
case 965:
case 1855:
case 1916:
case 2702:
case 1223:
case 2231:
case 634:
case 2294:
case 2139:
case 2341:
case 2427:
case 498:
case 623:
case 3956:
case 3012:
case 3905:
case 3660:
case 320:
case 974:
case 1658:
case 3061:
case 2597:
case 3815:
case 1508:
case 2306:
case 779:
case 2355:
case 429:
case 896:
case 1841:
case 2542:
case 3432:
case 3117:
case 1375:
case 3970:
case 933:
case 729:
case 1366:
case 867:
case 556:
case 2838:
case 3655:
case 856:
case 2678:
case 1818:
case 981:
case 1615:
case 1483:
case 2635:
case 1860:
case 2072:
case 990:
case 2103:
case 1338:
case 2536:
case 2452:
case 762:
case 831:
case 1248:
case 2731:
case 2318:
case 1516:
case 3040:
case 1723:
case 1157:
case 2794:
case 2335:
case 2245:
case 3800:
case 2190:
case 1878:
case 1196:
case 343:
case 4074:
case 4043:
case 3702:
case 861:
case 732:
case 2401:
case 2956:
case 2012:
case 245:
case 640:
case 963:
case 176:
case 2570:
case 2061:
case 3597:
case 2815:
case 606:
case 625:
case 3355:
case 537:
case 3968:
case 1289:
case 1576:
case 1666:
case 1950:
case 837:
case 1771:
case 3542:
case 112:
case 2432:
case 1358:
case 1965:
case 1001:
case 1412:
case 2751:
case 126:
case 1429:
case 3360:
case 3568:
case 1789:
case 1550:
case 585:
case 3510:
case 2745:
case 3635:
case 885:
case 664:
case 3103:
case 3536:
case 1824:
case 4028:
case 2641:
case 2893:
case 3318:
case 2040:
case 1599:
case 935:
case 432:
case 2995:
case 2434:
case 3859:
case 2363:
case 3657:
case 3944:
case 1141:
case 1339:
case 99:
case 701:
case 262:
case 3747:
case 3890:
case 3074:
case 1155:
case 1533:
case 1822:
case 1025:
case 2569:
case 1909:
case 3158:
case 332:
case 743:
case 1160:
case 3337:
case 2921:
case 2166:
case 3193:
case 2425:
case 1933:
case 2080:
case 692:
case 3292:
case 3704:
case 2969:
case 2595:
case 1690:
case 2014:
case 279:
case 1034:
case 2138:
case 3573:
case 2696:
case 3663:
case 3622:
case 95:
case 2357:
case 2480:
case 1513:
case 1726:
case 2863:
case 3178:
case 3896:
case 2533:
case 1521:
case 1100:
case 3359:
case 89:
case 162:
case 441:
case 4052:
case 1637:
case 703:
case 2249:
case 3881:
case 3390:
case 2414:
case 1995:
case 3135:
case 2749:
case 3998:
case 609:
case 3567:
case 2091:
case 1595:
case 3054:
case 3264:
case 1913:
case 1226:
case 2857:
case 3124:
case 1803:
case 2933:
case 913:
case 2160:
case 1175:
case 2220:
case 403:
case 2659:
case 55:
case 158:
case 741:
case 2666:
case 1378:
case 2576:
case 618:
case 2181:
case 3508:
case 2675:
case 961:
case 1061:
case 120:
case 2835:
case 1012:
case 2565:
case 2999:
case 2638:
case 3916:
case 587:
case 3855:
case 3119:
case 1618:
case 2196:
case 3930:
case 194:
case 2315:
case 937:
case 1335:
case 3762:
case 3723:
case 1893:
case 3027:
case 3711:
case 154:
case 2046:
case 1858:
case 1745:
case 4054:
case 3818:
case 2271:
case 482:
case 1655:
case 985:
case 247:
case 1324:
case 3908:
case 2429:
case 2137:
case 226:
case 1970:
case 2412:
case 2001:
case 646:
case 535:
case 3375:
case 1117:
case 1505:
case 2461:
case 2358:
case 1432:
case 1624:
case 850:
case 2841:
case 3576:
case 1984:
case 1355:
case 3181:
case 1306:
case 565:
case 2658:
case 3032:
case 376:
case 865:
case 3565:
case 1427:
case 874:
case 3638:
case 2916:
case 1702:
case 2806:
case 621:
case 2855:
case 2119:
case 2122:
case 574:
case 143:
case 3440:
case 3878:
case 1936:
case 2930:
case 996:
case 3315:
case 1083:
case 4025:
case 1910:
case 1794:
case 3599:
case 2157:
case 2762:
case 1202:
case 2723:
case 2516:
case 1731:
case 4086:
case 2248:
case 1866:
case 671:
case 2711:
case 956:
case 2530:
case 1635:
case 1287:
case 1510:
case 967:
case 2615:
case 2818:
case 1942:
case 1678:
case 3550:
case 3179:
case 581:
case 4091:
case 3789:
case 3976:
case 1584:
case 590:
case 347:
case 881:
case 2908:
case 1360:
case 1997:
case 326:
case 3600:
case 2375:
case 3358:
case 312:
case 2764:
case 1204:
case 578:
case 2788:
case 3863:
case 3822:
case 3819:
case 3155:
case 1381:
case 517:
case 2359:
case 1890:
case 1747:
case 542:
case 2428:
case 3339:
case 3141:
case 1944:
case 712:
case 3249:
case 859:
case 4032:
case 1657:
case 476:
case 1973:
case 1396:
case 705:
case 1507:
case 2390:
case 2967:
case 3377:
case 1859:
case 1115:
case 2879:
case 3118:
case 1663:
case 902:
case 405:
case 599:
case 2639:
case 776:
case 1982:
case 3034:
case 3091:
case 2837:
case 282:
case 3690:
case 1817:
case 3509:
case 2288:
case 1292:
case 12:
case 2124:
case 3933:
case 1193:
case 828:
case 1247:
case 3086:
case 3220:
case 2317:
case 3659:
case 2474:
case 94:
case 3444:
case 3098:
case 1290:
case 3219:
case 1914:
case 430:
case 2296:
case 3222:
case 3053:
case 699:
case 3162:
case 2495:
case 2991:
case 1980:
case 3647:
case 3954:
case 2737:
case 3385:
case 1151:
case 786:
case 2189:
case 628:
case 36:
case 3692:
case 753:
case 2626:
case 2281:
case 222:
case 2685:
case 4030:
case 2413:
case 3554:
case 642:
case 4016:
case 678:
case 453:
case 2781:
case 793:
case 1364:
case 2586:
case 1388:
case 23:
case 3820:
case 1790:
case 1514:
case 3407:
case 3722:
case 1095:
case 2534:
case 3257:
case 3067:
case 659:
case 2864:
case 2591:
case 3345:
case 3235:
case 46:
case 3687:
case 393:
case 119:
case 244:
case 1311:
case 1738:
case 571:
case 3410:
case 2394:
case 2149:
case 1323:
case 1775:
case 1450:
case 2076:
case 166:
case 157:
case 973:
case 2760:
case 4053:
case 1200:
case 3351:
case 3468:
case 330:
case 3724:
case 3278:
case 1529:
case 2811:
case 1512:
case 690:
case 2532:
case 3442:
case 2120:
case 665:
case 1275:
case 1887:
case 4067:
case 2651:
case 197:
case 2050:
case 923:
case 934:
case 584:
case 3497:
case 3778:
case 3224:
case 1929:
case 2848:
case 1266:
case 1912:
case 1005:
case 2470:
case 3164:
case 1689:
case 1802:
case 1126:
case 884:
case 2387:
case 386:
case 3016:
case 1540:
case 353:
case 3694:
case 1348:
case 1238:
case 3631:
case 3030:
case 2302:
case 2218:
case 2927:
case 448:
case 73:
case 191:
case 2687:
case 180:
case 1851:
case 1215:
case 2436:
case 716:
case 3241:
case 2410:
case 472:
case 3718:
case 3149:
case 1583:
case 846:
case 1042:
case 3760:
case 2351:
case 230:
case 800:
case 3255:
case 3065:
case 3862:
case 827:
case 1104:
case 3532:
case 1258:
case 3651:
case 136:
case 1408:
case 1147:
case 2497:
case 2778:
case 2224:
case 3848:
case 3706:
case 577:
case 2164:
case 469:
case 2188:
case 3387:
case 43:
case 748:
case 2735:
case 286:
case 2952:
case 253:
case 1623:
case 4009:
case 687:
case 925:
case 2871:
case 3302:
case 3218:
case 509:
case 495:
case 992:
case 2473:
case 968:
case 1885:
case 1277:
case 611:
case 2111:
case 2263:
case 2222:
case 1194:
case 1007:
case 2757:
case 2162:
case 1349:
case 3495:
case 1131:
case 3033:
case 189:
case 3525:
case 1543:
case 3281:
case 3304:
case 1928:
case 3986:
case 3685:
case 2554:
case 3237:
case 3009:
case 3421:
case 3925:
case 316:
case 949:
case 1943:
case 3586:
case 2326:
case 1528:
case 1974:
case 3279:
case 33:
case 3392:
case 1187:
case 455:
case 2820:
case 369:
case 1777:
case 2482:
case 1044:
case 1498:
case 2148:
case 2722:
case 1203:
case 2257:
case 3534:
case 460:
case 1739:
case 3864:
case 1186:
case 1612:
case 4003:
case 1571:
case 1060:
case 2632:
case 1661:
case 3268:
case 2075:
case 2455:
case 3840:
case 183:
case 695:
case 3797:
case 2066:
case 2256:
case 1827:
case 167:
case 2180:
case 281:
case 1191:
case 3502:
case 1299:
case 3994:
case 233:
case 1018:
case 2327:
case 2441:
case 3587:
case 2945:
case 3902:
case 3736:
case 1438:
case 1041:
case 3627:
case 75:
case 363:
case 49:
case 541:
case 3710:
case 2545:
case 711:
case 3332:
case 1475:
case 2883:
case 3242:
case 2601:
case 943:
case 2460:
case 250:
case 2551:
case 196:
case 1125:
case 3297:
case 1852:
case 2756:
case 35:
case 1101:
case 763:
case 2526:
case 1328:
case 3386:
case 115:
case 1209:
case 3904:
case 3814:
case 2721:
case 1459:
case 672:
case 2481:
case 3547:
case 228:
case 582:
case 92:
case 3172:
case 4093:
case 3273:
case 1146:
case 882:
case 2496:
case 1854:
case 3422:
case 3463:
case 3419:
case 2295:
case 3880:
case 311:
case 435:
case 3744:
case 3183:
case 1614:
case 97:
case 2691:
case 2634:
case 1096:
case 735:
case 2795:
case 3457:
case 1374:
case 3992:
case 2213:
case 2926:
case 2686:
case 1233:
case 2437:
case 3325:
case 217:
case 1680:
case 3654:
case 4015:
case 2592:
case 1834:
case 3526:
case 2386:
case 1643:
case 3769:
case 1891:
case 4038:
case 424:
case 3721:
case 433:
case 2547:
case 979:
case 3354:
case 328:
case 1380:
case 2391:
case 481:
case 639:
case 3828:
case 4066:
case 1886:
case 1477:
case 2782:
case 4075:
case 113:
case 3140:
case 3295:
case 2880:
case 211:
case 1127:
case 2744:
case 2183:
case 3090:
case 3874:
case 3843:
case 3691:
case 1298:
case 790:
case 1403:
case 2039:
case 962:
case 2207:
case 1767:
case 1063:
case 998:
case 342:
case 3213:
case 2504:
case 3686:
case 3221:
case 1628:
case 733:
case 474:
case 3129:
case 724:
case 2947:
case 317:
case 378:
case 805:
case 2128:
case 2301:
case 512:
case 2742:
case 3632:
case 759:
case 812:
case 2058:
case 3075:
case 505:
case 3770:
case 3455:
case 3951:
case 2478:
case 3066:
case 3205:
case 1024:
case 381:
case 847:
case 1216:
case 2435:
case 778:
case 2931:
case 1801:
case 2994:
case 428:
case 1415:
case 1683:
case 1548:
case 2346:
case 333:
case 1230:
case 324:
case 742:
case 3327:
case 3441:
case 2210:
case 728:
case 1562:
case 1523:
case 686:
case 2594:
case 1832:
case 653:
case 2861:
case 1035:
case 1511:
case 2812:
case 1672:
case 161:
case 1730:
case 2627:
case 4059:
case 263:
case 3418:
case 442:
case 2710:
case 3545:
case 1361:
case 2332:
case 3000:
case 3883:
case 2242:
case 799:
case 1208:
case 365:
case 576:
case 459:
case 3551:
case 3270:
case 1493:
case 2297:
case 137:
case 1078:
case 3423:
case 4047:
case 3411:
case 9:
case 586:
case 553:
case 1246:
case 40:
case 4092:
case 3087:
case 2316:
case 1518:
case 853:
case 3783:
case 1445:
case 91:
case 218:
case 951:
case 384:
case 277:
case 2900:
case 2489:
case 1071:
case 1560:
case 3593:
case 140:
case 2836:
case 488:
case 125:
case 2676:
case 1109:
case 1816:
case 676:
case 2975:
case 2471:
case 980:
case 1656:
case 1397:
case 1960:
case 227:
case 3993:
case 2308:
case 2966:
case 530:
case 2229:
case 2051:
case 1701:
case 2113:
case 200:
case 830:
case 175:
case 605:
case 788:
case 1342:
case 164:
case 2938:
case 4004:
case 3182:
case 593:
case 2045:
case 2699:
case 1746:
case 1918:
case 2842:
case 1541:
case 2449:
case 3110:
case 3977:
case 2367:
case 2990:
case 3503:
case 1996:
case 484:
case 3698:
case 152:
case 2280:
case 3895:
case 30:
case 3092:
case 2959:
case 1537:
case 3168:
case 1613:
case 1981:
case 1485:
case 4002:
case 3184:
case 3047:
case 771:
case 1579:
case 1621:
case 3774:
case 1286:
case 2844:
case 1150:
case 1426:
case 3488:
case 192:
case 1853:
case 2780:
case 2917:
case 3464:
case 2170:
case 1225:
case 2807:
case 168:
case 2559:
case 56:
case 4031:
case 2609:
case 3274:
case 1786:
case 3728:
case 2420:
case 471:
case 3577:
case 989:
case 1307:
case 2590:
case 784:
case 1382:
case 2714:
case 539:
case 1791:
case 3813:
case 1734:
case 3539:
case 700:
case 1395:
case 288:
case 2653:
case 2977:
case 314:
case 1963:
case 477:
case 1922:
case 2136:
case 2503:
case 908:
case 1919:
case 3214:
case 2698:
case 1682:
case 1557:
case 3105:
case 3280:
case 3517:
case 3026:
case 1088:
case 2092:
case 1064:
case 2168:
case 822:
case 3873:
case 2184:
case 98:
case 2047:
case 3633:
case 2228:
case 816:
case 3844:
case 2488:
case 548:
case 3170:
case 4045:
case 848:
case 2004:
case 2197:
case 1321:
case 1108:
case 872:
case 3609:
case 2243:
case 3882:
case 2274:
case 1313:
case 3420:
case 1369:
case 3353:
case 4051:
case 400:
case 446:
case 1644:
case 1563:
case 3398:
case 427:
case 3714:
case 1833:
case 309:
case 1957:
case 1673:
case 1431:
case 2423:
case 2856:
case 1048:
case 2411:
case 997:
case 2002:
case 2915:
case 3330:
case 641:
case 3884:
case 4026:
case 3868:
case 2173:
case 3316:
case 1850:
case 2783:
case 1356:
case 3810:
case 1305:
case 709:
case 555:
case 3575:
case 1697:
case 284:
case 855:
case 3665:
case 377:
case 3712:
case 860:
case 3566:
case 1524:
case 1642:
case 3729:
case 1899:
case 560:
case 2958:
case 3975:
case 595:
case 3471:
case 895:
case 1370:
case 327:
case 2993:
case 3966:
case 3212:
case 714:
case 3229:
case 1578:
case 2376:
case 3113:
case 1684:
case 3169:
case 1402:
case 844:
case 966:
case 2630:
case 2031:
case 957:
case 3897:
case 1062:
case 544:
case 2515:
case 173:
case 2107:
case 2094:
case 1876:
case 3045:
case 3842:
case 3816:
case 3109:
case 897:
case 3201:
case 306:
case 325:
case 3732:
case 2978:
case 2642:
case 3368:
case 340:
case 3451:
case 3560:
case 184:
case 2356:
case 3670:
case 955:
case 1399:
case 3445:
case 3518:
case 1144:
case 1087:
case 3246:
case 768:
case 234:
case 804:
case 1915:
case 1002:
case 223:
case 2048:
case 1856:
case 2494:
case 2227:
case 1423:
case 504:
case 1462:
case 121:
case 2431:
case 1772:
case 3541:
case 3746:
case 468:
case 519:
case 2198:
case 2876:
case 2610:
case 1107:
case 2023:
case 1515:
case 1031:
case 364:
case 2727:
case 1630:
case 171:
case 2153:
case 2402:
case 857:
case 566:
case 375:
case 3232:
case 3701:
case 1376:
case 2578:
case 2924:
case 4049:
case 3555:
case 3506:
case 1993:
case 3960:
case 3397:
case 3656:
case 3605:
case 1958:
case 3621:
case 1228:
case 3579:
case 3669:
case 3485:
case 3613:
case 2254:
case 67:
case 3867:
case 352:
case 1939:
case 93:
case 3344:
case 2116:
case 3291:
case 2809:
case 2919:
case 3373:
case 4071:
case 349:
case 2922:
case 2130:
case 916:
case 88:
case 1653:
case 425:
case 188:
case 58:
case 775:
case 948:
case 2673:
case 1813:
case 1869:
case 4089:
case 2519:
case 2833:
case 2563:
case 2522:
case 2644:
case 3307:
case 740:
case 3049:
case 475:
case 972:
case 725:
case 2369:
case 464:
case 2313:
case 1274:
case 3176:
case 632:
case 2108:
case 2447:
case 3581:
case 3937:
case 2754:
case 368:
case 3225:
case 1464:
case 3165:
case 392:
case 3426:
case 2150:
case 662:
case 2286:
case 2579:
case 2020:
case 423:
case 1873:
case 2981:
case 773:
case 434:
case 1280:
case 252:
case 1156:
case 1105:
case 3557:
case 2344:
case 3682:
case 1214:
case 2373:
case 249:
case 114:
case 3130:
case 1990:
case 1367:
case 1449:
case 679:
case 3673:
case 3957:
case 2791:
case 109:
case 2596:
case 3563:
case 3522:
case 2695:
case 2049:
case 4011:
case 3313:
case 4023:
case 4062:
case 2176:
case 2898:
case 723:
case 3108:
case 589:
case 3321:
case 3447:
case 2937:
case 3754:
case 268:
case 2225:
case 1917:
case 1780:
case 2853:
case 34:
case 620:
case 1676:
case 2201:
case 1761:
case 206:
case 836:
case 2732:
case 225:
case 1836:
case 3978:
case 536:
case 1729:
case 645:
case 3524:
case 3642:
case 240:
case 2955:
case 1712:
case 2451:
case 2560:
case 1489:
case 1900:
case 177:
case 986:
case 1665:
case 2830:
case 1810:
case 3356:
case 2941:
case 438:
case 2445:
case 694:
case 1316:
case 2518:
case 4088:
case 1868:
case 1884:
case 4064:
case 1538:
case 2336:
case 3167:
case 1330:
case 334:
case 3752:
case 3048:
case 2310:
case 1195:
case 591:
case 880:
case 3636:
case 2918:
case 738:
case 2808:
case 2746:
case 1045:
case 891:
case 3198:
case 1938:
case 930:
case 3062:
case 264:
case 3535:
case 3153:
case 3402:
case 2342:
case 3684:
case 275:
case 1261:
case 3578:
case 1229:
case 3924:
case 2555:
case 1966:
case 146:
case 127:
case 1500:
case 2656:
case 1471:
case 1975:
case 415:
case 912:
case 1652:
case 331:
case 2230:
case 691:
case 2548:
case 2911:
case 2415:
case 285:
case 854:
case 1994:
case 3299:
case 3372:
case 1502:
case 1931:
case 2962:
case 680:
case 1435:
case 2216:
case 2024:
case 367:
case 3827:
case 1478:
case 356:
case 570:
case 3400:
case 1268:
case 2708:
case 3629:
case 3571:
case 3060:
case 3250:
case 1128:
case 3006:
case 237:
case 807:
case 3852:
case 61:
case 2493:
case 3125:
case 396:
case 3466:
case 3276:
case 2329:
case 1143:
case 520:
case 2312:
case 845:
case 545:
case 2458:
case 2361:
case 0:
case 163:
case 2730:
case 1627:
case 3041:
case 261:
case 3438:
case 702:
case 651:
case 2672:
case 1812:
case 2948:
case 2511:
case 4081:
case 3799:
case 2716:
case 1015:
case 2562:
case 2439:
case 1003:
case 2057:
case 1419:
case 3854:
case 3146:
case 483:
case 2477:
case 2798:
case 1334:
case 1172:
case 3949:
case 879:
case 1391:
case 467:
case 2380:
case 3079:
case 3459:
case 2674:
case 3733:
case 2891:
case 3209:
case 3037:
case 2588:
case 315:
case 689:
case 3328:
case 3101:
case 2834:
case 15:
case 3920:
case 1654:
case 3343:
case 1504:
case 3709:
case 862:
case 19:
case 3132:
case 3374:
case 2063:
case 2253:
case 3096:
case 2767:
case 1207:
case 2403:
case 529:
case 1773:
case 783:
case 756:
case 4006:
case 3614:
case 1744:
case 3127:
case 3439:
case 3057:
case 1140:
case 313:
case 199:
case 1496:
case 3314:
case 2146:
case 2490:
case 3477:
case 3886:
case 2949:
case 4024:
case 1625:
case 485:
case 128:
case 1354:
case 2079:
case 2459:
case 3674:
case 832:
case 532:
case 3643:
case 3564:
case 1526:
case 1713:
case 785:
case 1479:
case 2680:
case 87:
case 2343:
case 1221:
case 1686:
case 1112:
case 2417:
case 2709:
case 3988:
case 1213:
case 1161:
case 142:
case 1795:
case 3063:
case 3022:
case 3253:
case 159:
case 68:
case 3152:
case 1634:
case 2549:
case 1945:
case 1441:
case 1038:
case 231:
case 501:
case 124:
case 133:
case 3683:
case 385:
case 2372:
case 2134:
case 1180:
case 267:
case 1205:
case 2827:
case 283:
case 3154:
case 256:
case 190:
case 1770:
case 666:
case 2400:
case 2989:
case 2776:
case 3708:
case 1632:
case 2571:
case 2060:
case 903:
case 2612:
case 657:
case 2186:
case 3078:
case 2265:
case 2852:
case 3493:
case 2125:
case 1270:
case 296:
case 1551:
case 2466:
case 2276:
case 3329:
case 1460:
case 165:
case 3208:
case 1601:
case 713:
case 1883:
case 4022:
case 1000:
case 941:
case 2971:
case 3458:
case 3361:
case 4019:
case 2640:
case 543:
case 3672:
case 3511:
case 3716:
case 3523:
case 3562:
case 2383:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1746082802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,];
var gg_b = "1746082802/";

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
