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

function gg_s(h) { var m = /(..)(.)\$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

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
case 3123:
case 2202:
case 1339:
case 642:
case 912:
case 3822:
case 254:
case 475:
case 2874:
case 3475:
case 2398:
case 991:
case 1221:
case 3942:
case 3714:
case 413:
case 2115:
case 2845:
case 2259:
case 2969:
case 299:
case 3056:
case 2894:
case 2884:
case 298:
case 3485:
case 3592:
case 1641:
case 3650:
case 2274:
case 2439:
case 1941:
case 1765:
case 72:
case 1526:
case 269:
case 1488:
case 83:
case 1563:
case 4034:
case 1337:
case 1035:
case 935:
case 2294:
case 3905:
case 1190:
case 267:
case 3353:
case 2257:
case 2751:
case 2245:
case 1844:
case 194:
case 2246:
case 157:
case 2681:
case 859:
case 2210:
case 1924:
case 858:
case 3278:
case 44:
case 3619:
case 2508:
case 2853:
case 715:
case 499:
case 3049:
case 2626:
case 159:
case 882:
case 2433:
case 1058:
case 1348:
case 3298:
case 2401:
case 1630:
case 773:
case 2062:
case 1525:
case 1766:
case 275:
case 1422:
case 454:
case 3127:
case 1875:
case 2963:
case 3486:
case 1285:
case 3780:
case 3055:
case 3047:
case 3790:
case 3496:
case 3345:
case 2971:
case 3394:
case 2116:
case 2541:
case 2926:
case 3878:
case 3000:
case 3165:
case 2448:
case 3476:
case 1275:
case 3770:
case 3606:
case 2764:
case 2718:
case 732:
case 3374:
case 822:
case 2322:
case 1624:
case 2360:
case 164:
case 101:
case 3898:
case 2297:
case 2287:
case 1838:
case 1150:
case 3811:
case 3516:
case 3719:
case 2254:
case 2964:
case 286:
case 1212:
case 3970:
case 939:
case 1730:
case 3373:
case 2771:
case 2529:
case 2726:
case 2001:
case 746:
case 3507:
case 1060:
case 1022:
case 1334:
case 937:
case 3361:
case 1105:
case 4037:
case 2932:
case 1238:
case 3717:
case 3211:
case 3086:
case 1142:
case 353:
case 477:
case 1256:
case 1843:
case 2299:
case 1113:
case 793:
case 3108:
case 1923:
case 874:
case 3706:
case 2618:
case 3021:
case 2048:
case 2358:
case 3509:
case 3670:
case 3076:
case 479:
case 2877:
case 2279:
case 174:
case 2434:
case 1724:
case 553:
case 321:
case 3836:
case 1564:
case 2951:
case 2767:
case 2261:
case 4033:
case 1518:
case 2273:
case 2335:
case 2037:
case 950:
case 3705:
case 621:
case 3354:
case 3044:
case 3397:
case 521:
case 1255:
case 3456:
case 3085:
case 2293:
case 1119:
case 1411:
case 2039:
case 278:
case 3379:
case 2873:
case 717:
case 279:
case 1800:
case 1665:
case 4048:
case 2523:
case 1088:
case 1532:
case 1098:
case 3968:
case 636:
case 381:
case 3914:
case 2769:
case 2172:
case 2566:
case 426:
case 1249:
case 581:
case 2883:
case 718:
case 3742:
case 200:
case 971:
case 3515:
case 3713:
case 1078:
case 2651:
case 1708:
case 2192:
case 681:
case 3178:
case 223:
case 356:
case 1936:
case 2252:
case 2920:
case 2962:
case 1214:
case 2146:
case 2511:
case 2816:
case 1268:
case 796:
case 3655:
case 470:
case 3315:
case 3017:
case 3786:
case 3480:
case 3589:
case 3490:
case 407:
case 161:
case 4069:
case 2366:
case 135:
case 1024:
case 2807:
case 656:
case 4025:
case 3721:
case 3227:
case 93:
case 556:
case 3829:
case 2748:
case 409:
case 3776:
case 3649:
case 3019:
case 3900:
case 2153:
case 3587:
case 2091:
case 283:
case 1814:
case 1144:
case 1868:
case 2852:
case 930:
case 3229:
case 1175:
case 2432:
case 766:
case 1760:
case 1466:
case 245:
case 3265:
case 3577:
case 3331:
case 4067:
case 2733:
case 1658:
case 3303:
case 0:
case 1636:
case 2701:
case 2207:
case 2025:
case 2102:
case 2069:
case 208:
case 209:
case 2831:
case 1465:
case 1562:
case 1176:
case 922:
case 1911:
case 2558:
case 2803:
case 3013:
case 1778:
case 3643:
case 2451:
case 207:
case 1880:
case 333:
case 1890:
case 1186:
case 3042:
case 3612:
case 3561:
case 2737:
case 445:
case 572:
case 3912:
case 3160:
case 4026:
case 2329:
case 672:
case 3050:
case 3340:
case 3785:
case 1611:
case 3656:
case 2145:
case 3468:
case 2157:
case 3583:
case 3744:
case 1935:
case 3593:
case 2425:
case 3824:
case 392:
case 2872:
case 2161:
case 2469:
case 3574:
case 1698:
case 3230:
case 384:
case 2522:
case 1688:
case 3985:
case 4064:
case 1533:
case 249:
case 1806:
case 1501:
case 29:
case 2204:
case 1029:
case 787:
case 2639:
case 2173:
case 684:
case 3743:
case 1408:
case 3584:
case 3328:
case 2051:
case 3975:
case 3712:
case 247:
case 974:
case 260:
case 2937:
case 3545:
case 1219:
case 941:
case 1817:
case 511:
case 1147:
case 2183:
case 434:
case 405:
case 562:
case 6:
case 3675:
case 4032:
case 1325:
case 3405:
case 2804:
case 2272:
case 1548:
case 3224:
case 837:
case 324:
case 3:
case 1441:
case 3450:
case 2308:
case 1217:
case 3738:
case 3685:
case 1819:
case 1149:
case 416:
case 2282:
case 624:
case 3014:
case 839:
case 838:
case 362:
case 137:
case 1813:
case 2901:
case 2197:
case 3696:
case 3417:
case 3686:
case 2228:
case 955:
case 1960:
case 1922:
case 3755:
case 1391:
case 1250:
case 1537:
case 2734:
case 2177:
case 3304:
case 3700:
case 3406:
case 1205:
case 449:
case 1371:
case 2018:
case 448:
case 2330:
case 3621:
case 2948:
case 3419:
case 1850:
case 3749:
case 46:
case 3208:
case 2189:
case 150:
case 2199:
case 2598:
case 1805:
case 2032:
case 2324:
case 1622:
case 1066:
case 3986:
case 1430:
case 850:
case 2633:
case 2179:
case 703:
case 2426:
case 2762:
case 363:
case 3312:
case 3580:
case 934:
case 3489:
case 3652:
case 3590:
case 1293:
case 2849:
case 3728:
case 3343:
case 2119:
case 2965:
case 346:
case 10:
case 2929:
case 3820:
case 3916:
case 3570:
case 3126:
case 1767:
case 3479:
case 2564:
case 2518:
case 3234:
case 1261:
case 1104:
case 4022:
case 4060:
case 1037:
case 1273:
case 3163:
case 646:
case 1883:
case 2249:
case 593:
case 2927:
case 100:
case 3909:
case 3338:
case 3640:
case 1651:
case 3497:
case 3356:
case 3487:
case 3616:
case 179:
case 1039:
case 800:
case 2106:
case 178:
case 2800:
case 877:
case 753:
case 2098:
case 441:
case 2088:
case 1725:
case 3220:
case 3262:
case 1861:
case 3834:
case 393:
case 1172:
case 3607:
case 3477:
case 1277:
case 702:
case 1420:
case 1726:
case 3167:
case 165:
case 2666:
case 131:
case 886:
case 3074:
case 2334:
case 1287:
case 2243:
case 3615:
case 1781:
case 3347:
case 3045:
case 1297:
case 3355:
case 990:
case 2150:
case 2838:
case 865:
case 3084:
case 186:
case 2856:
case 831:
case 3931:
case 319:
case 895:
case 1048:
case 3631:
case 1664:
case 1618:
case 3473:
case 3603:
case 3002:
case 1279:
case 947:
case 3461:
case 455:
case 1877:
case 3125:
case 3915:
case 3772:
case 2724:
case 1527:
case 3568:
case 1932:
case 1854:
case 126:
case 3493:
case 618:
case 2142:
case 948:
case 519:
case 1299:
case 3349:
case 714:
case 518:
case 2113:
case 949:
case 3792:
case 520:
case 1626:
case 742:
case 813:
case 3992:
case 1020:
case 3982:
case 2723:
case 2525:
case 1732:
case 2569:
case 3474:
case 620:
case 2460:
case 2766:
case 3604:
case 3386:
case 1152:
case 2168:
case 2844:
case 1246:
case 1691:
case 951:
case 430:
case 3972:
case 38:
case 320:
case 3513:
case 875:
case 3484:
case 1448:
case 3703:
case 1764:
case 2567:
case 1718:
case 2275:
case 1034:
case 907:
case 3061:
case 1360:
case 1322:
case 3672:
case 52:
case 201:
case 970:
case 3505:
case 264:
case 380:
case 3904:
case 1253:
case 1963:
case 2244:
case 3692:
case 1116:
case 1846:
case 1541:
case 2930:
case 43:
case 1810:
case 1926:
case 230:
case 3752:
case 1925:
case 482:
case 1857:
case 3089:
case 515:
case 3453:
case 198:
case 199:
case 14:
case 2011:
case 854:
case 3506:
case 4058:
case 3709:
case 4036:
case 2339:
case 197:
case 983:
case 1437:
case 154:
case 898:
case 2221:
case 1388:
case 899:
case 315:
case 606:
case 868:
case 2591:
case 2896:
case 2180:
case 332:
case 3410:
case 3519:
case 2478:
case 1257:
case 3097:
case 1245:
case 1967:
case 1751:
case 3395:
case 1859:
case 3385:
case 3087:
case 1530:
case 923:
case 1274:
case 632:
case 3928:
case 3164:
case 2729:
case 2821:
case 2170:
case 464:
case 1669:
case 2498:
case 1802:
case 2337:
case 2563:
case 532:
case 3233:
case 3945:
case 3761:
case 1734:
case 2537:
case 244:
case 3575:
case 3472:
case 1177:
case 2205:
case 4029:
case 3773:
case 1330:
case 1018:
case 3994:
case 389:
case 1064:
case 3031:
case 388:
case 792:
case 3595:
case 979:
case 589:
case 3482:
case 1197:
case 588:
case 2813:
case 1901:
case 711:
case 2842:
case 688:
case 2112:
case 2922:
case 3783:
case 3544:
case 2960:
case 2391:
case 3793:
case 2381:
case 3974:
case 387:
case 1032:
case 7:
case 2660:
case 3404:
case 1324:
case 328:
case 2066:
case 329:
case 439:
case 3959:
case 1471:
case 3867:
case 2736:
case 1426:
case 527:
case 1720:
case 3225:
case 3306:
case 762:
case 90:
case 1633:
case 2242:
case 1578:
case 2156:
case 1948:
case 327:
case 2850:
case 1481:
case 437:
case 1491:
case 2213:
case 528:
case 529:
case 3015:
case 1189:
case 1882:
case 45:
case 1892:
case 3040:
case 1051:
case 1341:
case 3291:
case 3610:
case 1937:
case 3754:
case 89:
case 147:
case 2155:
case 848:
case 1161:
case 3134:
case 1872:
case 3226:
case 471:
case 3007:
case 2735:
case 1522:
case 1469:
case 444:
case 2698:
case 2065:
case 3263:
case 148:
case 2029:
case 1173:
case 1639:
case 2501:
case 1204:
case 19:
case 890:
case 16:
case 376:
case 3313:
case 2819:
case 2988:
case 1292:
case 3799:
case 237:
case 3891:
case 2027:
case 2206:
case 1637:
case 190:
case 86:
case 503:
case 2978:
case 3521:
case 1272:
case 603:
case 3910:
case 3162:
case 3120:
case 3871:
case 986:
case 3779:
case 1467:
case 239:
case 3687:
case 525:
case 3416:
case 3697:
case 2778:
case 3440:
case 2008:
case 107:
case 809:
case 2196:
case 696:
case 2186:
case 808:
case 170:
case 3654:
case 3677:
case 4024:
case 2798:
case 2788:
case 1327:
case 461:
case 1536:
case 396:
case 3864:
case 109:
case 325:
case 108:
case 2121:
case 1739:
case 1803:
case 2429:
case 1558:
case 2176:
case 807:
case 3232:
case 3753:
case 2611:
case 3028:
case 2041:
case 2290:
case 1194:
case 1145:
case 1815:
case 1157:
case 975:
case 3977:
case 3547:
case 412:
case 343:
case 666:
case 87:
case 3218:
case 2534:
case 3954:
case 913:
case 151:
case 543:
case 3679:
case 566:
case 3101:
case 3987:
case 3997:
case 204:
case 1366:
case 261:
case 1209:
case 3072:
case 510:
case 2024:
case 967:
case 3661:
case 1634:
case 1807:
case 1748:
case 3673:
case 3139:
case 1464:
case 1418:
case 4008:
case 1110:
case 2958:
case 1146:
case 3538:
case 969:
case 1252:
case 3693:
case 3683:
case 61:
case 3004:
case 3137:
case 3774:
case 3993:
case 1063:
case 1535:
case 2722:
case 1071:
case 1733:
case 998:
case 2318:
case 772:
case 2030:
case 2636:
case 1026:
case 94:
case 1153:
case 845:
case 3543:
case 3784:
case 31:
case 1081:
case 954:
case 1091:
case 997:
case 3961:
case 3757:
case 1240:
case 2814:
case 1216:
case 3415:
case 946:
case 1959:
case 1269:
case 424:
case 3601:
case 1867:
case 1306:
case 3762:
case 3588:
case 827:
case 3598:
case 963:
case 2372:
case 128:
case 3463:
case 129:
case 2996:
case 305:
case 3481:
case 1902:
case 739:
case 4014:
case 3189:
case 505:
case 738:
case 1015:
case 2921:
case 2419:
case 2392:
case 1694:
case 829:
case 2510:
case 3948:
case 127:
case 3828:
case 2976:
case 2841:
case 2111:
case 1003:
case 887:
case 1994:
case 189:
case 1031:
case 3330:
case 1984:
case 3648:
case 1957:
case 1267:
case 1945:
case 1869:
case 1472:
case 492:
case 3177:
case 2304:
case 2417:
case 2696:
case 152:
case 2755:
case 2747:
case 1544:
case 187:
case 2080:
case 3228:
case 2553:
case 1492:
case 1319:
case 1052:
case 2068:
case 1586:
case 1881:
case 590:
case 1596:
case 1891:
case 103:
case 262:
case 690:
case 1428:
case 176:
case 2:
case 36:
case 1313:
case 2685:
case 2224:
case 1521:
case 1826:
case 1009:
case 3272:
case 1120:
case 1871:
case 750:
case 224:
case 2158:
case 1863:
case 3637:
case 2675:
case 66:
case 2545:
case 1754:
case 3937:
case 4090:
case 2712:
case 3183:
case 648:
case 2442:
case 3882:
case 1016:
case 918:
case 3341:
case 1797:
case 1040:
case 771:
case 2328:
case 2584:
case 349:
case 2995:
case 1953:
case 1263:
case 660:
case 3639:
case 3161:
case 292:
case 2824:
case 3425:
case 1305:
case 2944:
case 3522:
case 284:
case 3560:
case 211:
case 3469:
case 2574:
case 272:
case 3157:
case 2744:
case 2583:
case 1547:
case 2638:
case 1753:
case 2795:
case 651:
case 166:
case 37:
case 2316:
case 885:
case 3194:
case 1500:
case 712:
case 98:
case 791:
case 57:
case 2943:
case 3365:
case 67:
case 2866:
case 1954:
case 185:
case 1218:
case 1264:
case 3231:
case 3174:
case 2005:
case 351:
case 3203:
case 1314:
case 2612:
case 2042:
case 370:
case 1654:
case 2352:
case 4017:
case 3215:
case 1687:
case 761:
case 2643:
case 2013:
case 508:
case 3159:
case 704:
case 735:
case 1697:
case 3451:
case 1440:
case 1549:
case 456:
case 125:
case 1148:
case 3536:
case 196:
case 1864:
case 308:
case 3558:
case 2309:
case 3803:
case 4006:
case 2223:
case 3102:
case 1407:
case 507:
case 1989:
case 3733:
case 1370:
case 906:
case 3071:
case 2331:
case 3620:
case 3662:
case 3026:
case 3207:
case 2303:
case 3809:
case 81:
case 2827:
case 1004:
case 2229:
case 4005:
case 1137:
case 2577:
case 2265:
case 2947:
case 3081:
case 1512:
case 1745:
case 3091:
case 915:
case 472:
case 3216:
case 545:
case 2019:
case 3153:
case 2900:
case 645:
case 2649:
case 11:
case 4050:
case 2587:
case 1973:
case 2597:
case 1794:
case 523:
case 2227:
case 2006:
case 810:
case 1673:
case 2721:
case 3418:
case 2865:
case 3464:
case 2600:
case 1431:
case 1702:
case 3366:
case 2198:
case 2188:
case 1072:
case 932:
case 3634:
case 2315:
case 4042:
case 2655:
case 2647:
case 2796:
case 2490:
case 433:
case 110:
case 2599:
case 1851:
case 323:
case 1759:
case 2178:
case 3816:
case 1082:
case 4013:
case 3146:
case 1538:
case 1092:
case 3311:
case 3651:
case 1640:
case 2713:
case 774:
case 578:
case 3182:
case 236:
case 1356:
case 988:
case 1497:
case 989:
case 3192:
case 1487:
case 2443:
case 4086:
case 2389:
case 679:
case 678:
case 2258:
case 2914:
case 214:
case 2968:
case 952:
case 1220:
case 3172:
case 1607:
case 3566:
case 987:
case 2236:
case 3769:
case 379:
case 3873:
case 3039:
case 600:
case 3523:
case 4021:
case 677:
case 1053:
case 3293:
case 2456:
case 2095:
case 30:
case 2438:
case 1181:
case 163:
case 1191:
case 1580:
case 1312:
case 2614:
case 2044:
case 928:
case 1590:
case 2354:
case 1489:
case 3104:
case 2377:
case 60:
case 3335:
case 846:
case 1820:
case 2503:
case 1126:
case 50:
case 1234:
case 927:
case 3261:
case 3951:
case 2531:
case 1479:
case 1461:
case 1002:
case 3279:
case 1125:
case 3877:
case 526:
case 3527:
case 414:
case 1169:
case 2509:
case 3358:
case 2670:
case 119:
case 3618:
case 2706:
case 2400:
case 1473:
case 1603:
case 817:
case 3289:
case 3897:
case 436:
case 1349:
case 3299:
case 1782:
case 1792:
case 2211:
case 2680:
case 1568:
case 1514:
case 117:
case 3932:
case 2552:
case 2447:
case 395:
case 3854:
case 1493:
case 818:
case 2507:
case 686:
case 903:
case 1074:
case 2980:
case 2361:
case 3632:
case 976:
case 1167:
case 3128:
case 2719:
case 2516:
case 2141:
case 1084:
case 2970:
case 2540:
case 4085:
case 1094:
case 3918:
case 631:
case 3254:
case 3781:
case 4044:
case 565:
case 3791:
case 1045:
case 2383:
case 1347:
case 402:
case 1402:
case 3034:
case 1061:
case 1672:
case 3107:
case 2374:
case 2888:
case 1505:
case 1703:
case 2165:
case 3718:
case 1073:
case 3764:
case 1839:
case 2770:
case 2476:
case 880:
case 3541:
case 4043:
case 1692:
case 3971:
case 996:
case 2528:
case 3926:
case 2878:
case 180:
case 2496:
case 2047:
case 2790:
case 2055:
case 2357:
case 1093:
case 3253:
case 2617:
case 3732:
case 1239:
case 943:
case 1604:
case 2302:
case 3433:
case 730:
case 613:
case 1992:
case 966:
case 3671:
case 4038:
case 18:
case 120:
case 4056:
case 1484:
case 3853:
case 1494:
case 1386:
case 3152:
case 985:
case 3246:
case 1445:
case 2278:
case 3681:
case 3210:
case 1715:
case 442:
case 1716:
case 1519:
case 1740:
case 1446:
case 1097:
case 1087:
case 2043:
case 3859:
case 1054:
case 2642:
case 4055:
case 2012:
case 4047:
case 669:
case 367:
case 340:
case 1201:
case 3802:
case 567:
case 1375:
case 1233:
case 2222:
case 667:
case 2950:
case 3103:
case 3530:
case 3439:
case 640:
case 368:
case 1848:
case 1164:
case 2485:
case 1453:
case 2346:
case 2495:
case 815:
case 4049:
case 3894:
case 3378:
case 2592:
case 34:
case 2038:
case 597:
case 242:
case 1517:
case 2714:
case 1099:
case 1089:
case 2444:
case 3115:
case 173:
case 397:
case 1132:
case 354:
case 3388:
case 699:
case 806:
case 115:
case 2572:
case 1833:
case 2123:
case 2390:
case 2745:
case 2961:
case 312:
case 2380:
case 2415:
case 3144:
case 466:
case 1900:
case 1019:
case 3185:
case 2794:
case 1597:
case 1587:
case 751:
case 3318:
case 3364:
case 3658:
case 2370:
case 3423:
case 612:
case 3636:
case 1229:
case 2004:
case 2983:
case 3722:
case 3760:
case 3466:
case 1265:
case 1955:
case 2993:
case 1577:
case 485:
case 2774:
case 709:
case 2683:
case 504:
case 708:
case 1315:
case 2693:
case 535:
case 1589:
case 1178:
case 2556:
case 2092:
case 661:
case 3268:
case 2538:
case 3214:
case 1006:
case 1227:
case 2139:
case 2403:
case 1829:
case 1865:
case 1600:
case 1188:
case 2702:
case 1198:
case 2661:
case 3332:
case 856:
case 2072:
case 1823:
case 2679:
case 2133:
case 2997:
case 872:
case 2218:
case 1866:
case 1561:
case 285:
case 3534:
case 1775:
case 4004:
case 1160:
case 3427:
case 1005:
case 1468:
case 2689:
case 2452:
case 2555:
case 3935:
case 243:
case 2547:
case 1795:
case 3351:
case 41:
case 1050:
case 3611:
case 2028:
case 2753:
case 1656:
case 745:
case 2232:
case 3176:
case 1309:
case 3911:
case 723:
case 3635:
case 4072:
case 1223:
case 2999:
case 3880:
case 133:
case 410:
case 2368:
case 2697:
case 4082:
case 2710:
case 4092:
case 2746:
case 1136:
case 2910:
case 637:
case 2521:
case 339:
case 2946:
case 2779:
case 1830:
case 338:
case 2576:
case 2871:
case 2120:
case 1502:
case 428:
case 429:
case 3027:
case 537:
case 3325:
case 1014:
case 824:
case 3998:
case 4015:
case 2342:
case 2891:
case 337:
case 2586:
case 2799:
case 276:
case 1450:
case 427:
case 1:
case 2428:
case 1685:
case 2653:
case 3217:
case 1738:
case 1695:
case 705:
case 2313:
case 4031:
case 489:
case 3065:
case 488:
case 3367:
case 4003:
case 3501:
case 1824:
case 2305:
case 2007:
case 2134:
case 2271:
case 1574:
case 2777:
case 184:
case 1230:
case 1712:
case 1557:
case 2754:
case 1442:
case 452:
case 3147:
case 3155:
case 1413:
case 2281:
case 3408:
case 1584:
case 1743:
case 1328:
case 2291:
case 2350:
case 2040:
case 403:
case 2015:
case 2317:
case 1510:
case 1382:
case 2694:
case 1419:
case 3850:
case 1841:
case 227:
case 2867:
case 3430:
case 3736:
case 3539:
case 2269:
case 902:
case 1372:
case 2404:
case 76:
case 1996:
case 228:
case 550:
case 3112:
case 981:
case 749:
case 3842:
case 748:
case 2974:
case 2793:
case 1755:
case 3391:
case 2544:
case 3960:
case 1090:
case 571:
case 1747:
case 1808:
case 2595:
case 4016:
case 2492:
case 2482:
case 3326:
case 3205:
case 1700:
case 1676:
case 3371:
case 288:
case 2984:
case 2031:
case 289:
case 2575:
case 65:
case 3363:
case 2869:
case 2761:
case 344:
case 2957:
case 3537:
case 2945:
case 3424:
case 2602:
case 2825:
case 371:
case 1135:
case 4007:
case 2707:
case 2233:
case 2375:
case 63:
case 3035:
case 3571:
case 3876:
case 956:
case 2928:
case 3765:
case 1950:
case 3941:
case 3729:
case 2118:
case 2519:
case 33:
case 3608:
case 2385:
case 1353:
case 2740:
case 1613:
case 3886:
case 3591:
case 3896:
case 4093:
case 3276:
case 1475:
case 2248:
case 1166:
case 1942:
case 3221:
case 2709:
case 1913:
case 1123:
case 3908:
case 630:
case 2833:
case 842:
case 1346:
case 1056:
case 206:
case 1485:
case 1310:
case 1038:
case 3011:
case 2628:
case 1650:
case 775:
case 2517:
case 142:
case 2752:
case 2089:
case 1444:
case 1384:
case 3930:
case 4087:
case 2151:
case 22:
case 2904:
case 1617:
case 4054:
case 1790:
case 3295:
case 1047:
case 501:
case 1357:
case 933:
case 1374:
case 2402:
case 2061:
case 4077:
case 1898:
case 301:
case 1000:
case 3301:
case 1165:
case 1770:
case 1476:
case 3275:
case 2839:
case 1606:
case 2731:
case 1129:
case 3567:
case 1906:
case 558:
case 3895:
case 406:
case 1359:
case 3114:
case 3844:
case 2457:
case 3168:
case 473:
case 2715:
case 659:
case 1278:
case 3924:
case 658:
case 3525:
case 2837:
case 3422:
case 3460:
case 74:
case 3875:
case 359:
case 358:
case 694:
case 2982:
case 3348:
case 1288:
case 657:
case 4046:
case 3843:
case 641:
case 2792:
case 217:
case 2568:
case 1680:
case 1211:
case 992:
case 3238:
case 778:
case 2514:
case 3142:
case 1086:
case 911:
case 1096:
case 3966:
case 2125:
case 493:
case 1835:
case 2915:
case 1706:
case 3320:
case 218:
case 1509:
case 777:
case 853:
case 2603:
case 1076:
case 1811:
case 1516:
case 2903:
case 3838:
case 2931:
case 1540:
case 4053:
case 924:
case 1970:
case 3212:
case 2355:
case 2057:
case 2347:
case 2615:
case 463:
case 2704:
case 3666:
case 3334:
case 1361:
case 1980:
case 962:
case 3436:
case 3623:
case 2220:
case 1914:
case 181:
case 1258:
case 1968:
case 3098:
case 114:
case 1124:
case 2834:
case 2607:
case 3435:
case 3629:
case 419:
case 726:
case 3800:
case 2640:
case 3078:
case 1713:
case 655:
case 2616:
case 1443:
case 2487:
case 136:
case 4059:
case 2497:
case 2046:
case 1412:
case 1742:
case 555:
case 4074:
case 1377:
case 1705:
case 3200:
case 1858:
case 121:
case 3518:
case 2479:
case 1531:
case 1836:
case 2126:
case 246:
case 3255:
case 1456:
case 3741:
case 3247:
case 3849:
case 4094:
case 1387:
case 2343:
case 2907:
case 2590:
case 1354:
case 2652:
case 1668:
case 4045:
case 4057:
case 2499:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1742770801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,];
var gg_b = "1742770801/";

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
