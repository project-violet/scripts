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
case 3836:
case 2569:
case 2493:
case 2297:
case 3622:
case 1380:
case 2012:
case 220:
case 1775:
case 1847:
case 1038:
case 493:
case 2038:
case 1767:
case 653:
case 2847:
case 2775:
case 2349:
case 3641:
case 842:
case 804:
case 120:
case 3574:
case 1012:
case 3685:
case 3166:
case 15:
case 2380:
case 3924:
case 1196:
case 2411:
case 1493:
case 353:
case 3983:
case 871:
case 1304:
case 1630:
case 1449:
case 1132:
case 291:
case 1029:
case 3103:
case 3406:
case 3242:
case 1960:
case 1480:
case 2164:
case 1164:
case 2311:
case 2288:
case 2960:
case 4064:
case 1926:
case 1678:
case 2834:
case 3363:
case 704:
case 4018:
case 3892:
case 2132:
case 3335:
case 742:
case 1118:
case 3350:
case 689:
case 2601:
case 2174:
case 3024:
case 3807:
case 2810:
case 2938:
case 2872:
case 2199:
case 972:
case 3337:
case 213:
case 389:
case 894:
case 931:
case 2912:
case 3169:
case 715:
case 1199:
case 1938:
case 1872:
case 3698:
case 61:
case 1655:
case 1953:
case 758:
case 324:
case 4074:
case 1758:
case 794:
case 3828:
case 3233:
case 2777:
case 3258:
case 3532:
case 2579:
case 1295:
case 1503:
case 1026:
case 1446:
case 3687:
case 2446:
case 2143:
case 428:
case 1060:
case 3277:
case 362:
case 2295:
case 2733:
case 3090:
case 1881:
case 3616:
case 1929:
case 2202:
case 201:
case 891:
case 2889:
case 1498:
case 720:
case 2571:
case 3455:
case 3260:
case 132:
case 3988:
case 2058:
case 1290:
case 2387:
case 355:
case 2840:
case 956:
case 1760:
case 2033:
case 1316:
case 3790:
case 1033:
case 2760:
case 1726:
case 1921:
case 3856:
case 590:
case 1387:
case 171:
case 3095:
case 232:
case 1571:
case 2077:
case 2942:
case 1065:
case 621:
case 934:
case 85:
case 42:
case 1416:
case 1113:
case 4013:
case 2637:
case 1525:
case 2650:
case 2487:
case 2609:
case 3368:
case 1673:
case 2152:
case 142:
case 820:
case 1398:
case 944:
case 242:
case 902:
case 2975:
case 3997:
case 521:
case 1283:
case 3646:
case 2525:
case 3161:
case 1637:
case 3108:
case 3724:
case 2113:
case 2416:
case 405:
case 1958:
case 774:
case 500:
case 919:
case 1817:
case 1319:
case 2422:
case 1965:
case 2042:
case 3902:
case 2886:
case 1635:
case 1441:
case 1021:
case 2527:
case 1527:
case 2635:
case 2441:
case 1886:
case 2933:
case 3229:
case 3330:
case 449:
case 2965:
case 98:
case 3088:
case 1977:
case 3859:
case 3800:
case 2663:
case 1770:
case 957:
case 300:
case 3270:
case 2738:
case 294:
case 2075:
case 992:
case 2322:
case 3125:
case 3513:
case 3478:
case 1712:
case 1385:
case 2385:
case 3182:
case 2712:
case 3591:
case 1148:
case 886:
case 3253:
case 1075:
case 1738:
case 439:
case 2067:
case 3430:
case 1753:
case 1606:
case 1105:
case 4051:
case 4005:
case 1545:
case 1151:
case 1894:
case 2358:
case 2244:
case 2087:
case 412:
case 1581:
case 760:
case 3660:
case 888:
case 3957:
case 2919:
case 102:
case 144:
case 3162:
case 4092:
case 244:
case 904:
case 202:
case 2377:
case 2581:
case 1087:
case 661:
case 1244:
case 3832:
case 3978:
case 559:
case 361:
case 3528:
case 617:
case 1333:
case 2105:
case 3302:
case 2250:
case 2683:
case 499:
case 1098:
case 3055:
case 1477:
case 1273:
case 3001:
case 3068:
case 860:
case 2985:
case 2746:
case 3014:
case 2941:
case 256:
case 3773:
case 1866:
case 2136:
case 2237:
case 359:
case 3402:
case 1237:
case 2866:
case 1941:
case 3539:
case 156:
case 3750:
case 2572:
case 2510:
case 1458:
case 3737:
case 3507:
case 2273:
case 1624:
case 1465:
case 2098:
case 3147:
case 234:
case 659:
case 1562:
case 3592:
case 2916:
case 2704:
case 994:
case 1263:
case 2534:
case 2342:
case 640:
case 1467:
case 1019:
case 292:
case 3505:
case 3293:
case 872:
case 3735:
case 3497:
case 2987:
case 3211:
case 192:
case 4028:
case 3388:
case 1475:
case 1342:
case 831:
case 1916:
case 1711:
case 3843:
case 2321:
case 2876:
case 445:
case 383:
case 1869:
case 540:
case 772:
case 2749:
case 2022:
case 2442:
case 630:
case 1367:
case 2107:
case 3110:
case 1041:
case 2547:
case 3612:
case 2041:
case 4007:
case 958:
case 1206:
case 616:
case 2367:
case 1998:
case 1139:
case 28:
case 1442:
case 1022:
case 3968:
case 4039:
case 3280:
case 3706:
case 2085:
case 2869:
case 260:
case 1338:
case 3115:
case 2312:
case 991:
case 1429:
case 2370:
case 1861:
case 1808:
case 1353:
case 2741:
case 2697:
case 3973:
case 426:
case 3667:
case 1697:
case 2808:
case 1370:
case 2861:
case 3950:
case 2429:
case 834:
case 1312:
case 744:
case 2722:
case 3241:
case 160:
case 3730:
case 756:
case 3559:
case 1011:
case 1156:
case 2470:
case 95:
case 920:
case 1230:
case 288:
case 1586:
case 3757:
case 3189:
case 1004:
case 2438:
case 2827:
case 2230:
case 844:
case 3621:
case 1470:
case 2156:
case 2257:
case 2688:
case 1517:
case 3944:
case 1278:
case 141:
case 1882:
case 3037:
case 2825:
case 2201:
case 2980:
case 1123:
case 2255:
case 1426:
case 2460:
case 1046:
case 1184:
case 2184:
case 480:
case 3714:
case 3073:
case 2123:
case 1980:
case 2515:
case 3490:
case 364:
case 433:
case 1798:
case 664:
case 522:
case 3755:
case 3768:
case 1949:
case 901:
case 3906:
case 88:
case 241:
case 2554:
case 1993:
case 3483:
case 857:
case 3665:
case 3287:
case 4000:
case 2904:
case 1602:
case 3556:
case 4059:
case 719:
case 3633:
case 272:
case 3935:
case 131:
case 1787:
case 3216:
case 564:
case 78:
case 2100:
case 622:
case 172:
case 443:
case 2602:
case 1716:
case 2993:
case 3677:
case 322:
case 2695:
case 2589:
case 2068:
case 2001:
case 1147:
case 3250:
case 3624:
case 2055:
case 3209:
case 3237:
case 3136:
case 3433:
case 159:
case 2896:
case 955:
case 2014:
case 1539:
case 502:
case 2709:
case 1773:
case 2539:
case 1014:
case 544:
case 3572:
case 463:
case 3477:
case 1055:
case 3273:
case 448:
case 2246:
case 334:
case 3510:
case 2737:
case 2495:
case 496:
case 1134:
case 161:
case 1744:
case 4034:
case 2930:
case 1302:
case 1528:
case 2864:
case 556:
case 3365:
case 3087:
case 3244:
case 3358:
case 1978:
case 1832:
case 2660:
case 2626:
case 4062:
case 2395:
case 3192:
case 2978:
case 2832:
case 344:
case 3690:
case 3377:
case 302:
case 438:
case 602:
case 1864:
case 3016:
case 990:
case 2744:
case 3894:
case 3151:
case 534:
case 261:
case 3545:
case 3022:
case 1955:
case 2172:
case 3375:
case 3442:
case 116:
case 3998:
case 319:
case 1280:
case 1653:
case 2397:
case 1968:
case 1901:
case 619:
case 592:
case 2612:
case 230:
case 1249:
case 2110:
case 722:
case 2249:
case 2638:
case 4010:
case 1612:
case 1397:
case 3869:
case 183:
case 4072:
case 2536:
case 1670:
case 785:
case 3085:
case 2706:
case 3367:
case 216:
case 1172:
case 3711:
case 900:
case 240:
case 357:
case 2763:
case 1843:
case 2735:
case 2497:
case 2505:
case 657:
case 2078:
case 3534:
case 2145:
case 481:
case 1388:
case 3475:
case 1551:
case 2057:
case 2388:
case 3263:
case 3467:
case 3987:
case 1735:
case 3562:
case 1763:
case 764:
case 3321:
case 4081:
case 140:
case 3793:
case 1181:
case 822:
case 688:
case 2140:
case 560:
case 465:
case 3470:
case 1944:
case 2642:
case 2730:
case 2559:
case 3093:
case 1778:
case 388:
case 3586:
case 2778:
case 3329:
case 3230:
case 3438:
case 1189:
case 3011:
case 1500:
case 1730:
case 970:
case 2063:
case 3453:
case 1937:
case 2006:
case 2115:
case 3312:
case 1241:
case 2675:
case 1285:
case 3131:
case 660:
case 3946:
case 3697:
case 3741:
case 2973:
case 1909:
case 3353:
case 3861:
case 2950:
case 859:
case 3808:
case 2285:
case 2667:
case 2813:
case 1675:
case 3080:
case 3722:
case 1584:
case 1523:
case 3338:
case 1115:
case 3429:
case 1006:
case 2937:
case 717:
case 672:
case 2665:
case 1390:
case 2186:
case 840:
case 2963:
case 1216:
case 1117:
case 44:
case 185:
case 2556:
case 3904:
case 372:
case 4017:
case 3602:
case 3540:
case 1556:
case 285:
case 477:
case 331:
case 3159:
case 716:
case 2117:
case 3100:
case 3326:
case 4086:
case 3871:
case 3695:
case 1963:
case 1658:
case 3589:
case 541:
case 2390:
case 1665:
case 3993:
case 2677:
case 1755:
case 3825:
case 1906:
case 2848:
case 2037:
case 3460:
case 1073:
case 2009:
case 2050:
case 1714:
case 2383:
case 3201:
case 962:
case 2490:
case 2298:
case 3184:
case 641:
case 3426:
case 1009:
case 3123:
case 3882:
case 1037:
case 2531:
case 341:
case 2755:
case 1335:
case 2103:
case 2406:
case 1892:
case 391:
case 1179:
case 818:
case 1221:
case 55:
case 2788:
case 2543:
case 3118:
case 1619:
case 3164:
case 855:
case 425:
case 3721:
case 3678:
case 1851:
case 3960:
case 451:
case 3834:
case 821:
case 1242:
case 790:
case 687:
case 1990:
case 2805:
case 1543:
case 4003:
case 1788:
case 3630:
case 2221:
case 387:
case 2179:
case 2892:
case 1406:
case 3449:
case 2335:
case 1599:
case 1267:
case 2120:
case 3070:
case 35:
case 1463:
case 1166:
case 591:
case 3569:
case 153:
case 1983:
case 170:
case 2622:
case 3493:
case 3767:
case 718:
case 65:
case 2306:
case 1641:
case 1435:
case 2641:
case 2797:
case 2435:
case 2574:
case 3038:
case 3411:
case 3380:
case 270:
case 253:
case 1836:
case 890:
case 587:
case 1120:
case 2685:
case 3053:
case 2599:
case 3777:
case 3594:
case 3929:
case 2795:
case 2437:
case 1564:
case 2828:
case 3060:
case 1176:
case 2265:
case 2687:
case 2450:
case 1518:
case 1090:
case 2532:
case 3881:
case 2258:
case 162:
case 513:
case 1258:
case 1344:
case 1532:
case 2518:
case 3143:
case 1265:
case 1409:
case 2277:
case 2176:
case 586:
case 1233:
case 2564:
case 1795:
case 1437:
case 3758:
case 3765:
case 2024:
case 3655:
case 3810:
case 2083:
case 124:
case 800:
case 2309:
case 1169:
case 40:
case 1596:
case 3614:
case 4069:
case 3938:
case 3199:
case 2839:
case 11:
case 386:
case 1839:
case 3520:
case 985:
case 2596:
case 3912:
case 189:
case 1309:
case 2373:
case 1350:
case 3346:
case 3970:
case 224:
case 2698:
case 1444:
case 501:
case 1807:
case 1161:
case 2314:
case 3191:
case 1783:
case 3582:
case 1724:
case 2355:
case 3967:
case 3283:
case 3815:
case 2368:
case 1997:
case 3609:
case 2301:
case 1301:
case 3673:
case 1368:
case 2997:
case 47:
case 1355:
case 3975:
case 917:
case 1831:
case 2724:
case 2783:
case 290:
case 604:
case 3113:
case 2548:
case 870:
case 532:
case 2108:
case 2161:
case 1095:
case 4027:
case 3058:
case 3065:
case 3644:
case 3889:
case 2260:
case 3033:
case 2790:
case 121:
case 1002:
case 671:
case 3921:
case 255:
case 3760:
case 2856:
case 753:
case 155:
case 770:
case 959:
case 221:
case 3316:
case 632:
case 2226:
case 3077:
case 332:
case 3942:
case 3498:
case 118:
case 2095:
case 200:
case 1823:
case 1238:
case 1552:
case 1649:
case 3753:
case 1884:
case 3148:
case 2097:
case 2513:
case 1591:
case 2478:
case 3738:
case 3561:
case 394:
case 2270:
case 1253:
case 3075:
case 1457:
case 2253:
case 1270:
case 3067:
case 1478:
case 3712:
case 3385:
case 4025:
case 558:
case 2591:
case 1097:
case 2884:
case 3341:
case 515:
case 2238:
case 100:
case 1212:
case 824:
case 498:
case 1088:
case 3977:
case 1611:
case 3042:
case 983:
case 1800:
case 446:
case 2995:
case 3527:
case 1330:
case 930:
case 2902:
case 3886:
case 4071:
case 3933:
case 358:
case 615:
case 724:
case 2604:
case 2171:
case 3021:
case 3817:
case 71:
case 2800:
case 916:
case 2611:
case 658:
case 3319:
case 2088:
case 2969:
case 3112:
case 3801:
case 3610:
case 29:
case 2489:
case 3096:
case 3672:
case 1066:
case 470:
case 3814:
case 823:
case 2440:
case 269:
case 1440:
case 169:
case 3456:
case 3153:
case 1020:
case 366:
case 1639:
case 1354:
case 3974:
case 2898:
case 3138:
case 666:
case 1782:
case 3748:
case 393:
case 1969:
case 847:
case 723:
case 1094:
case 2976:
case 2340:
case 2771:
case 3943:
case 2628:
case 3431:
case 3645:
case 251:
case 675:
case 3018:
case 2389:
case 2003:
case 2887:
case 3590:
case 3032:
case 747:
case 1887:
case 1003:
case 3129:
case 1415:
case 984:
case 1389:
case 1454:
case 2816:
case 1771:
case 2094:
case 1976:
case 2636:
case 2553:
case 1417:
case 528:
case 1885:
case 303:
case 1069:
case 603:
case 2708:
case 2252:
case 810:
case 1920:
case 2183:
case 2486:
case 3713:
case 3074:
case 1512:
case 854:
case 424:
case 2124:
case 1124:
case 2512:
case 3791:
case 3647:
case 1486:
case 4024:
case 2920:
case 2841:
case 1966:
case 1761:
case 1252:
case 567:
case 2069:
case 2885:
case 3400:
case 2213:
case 3459:
case 746:
case 1822:
case 94:
case 3261:
case 3208:
case 1636:
case 20:
case 754:
case 2386:
case 328:
case 1190:
case 462:
case 1076:
case 3160:
case 1651:
case 1317:
case 178:
case 1903:
case 1605:
case 1819:
case 2727:
case 1727:
case 3857:
case 898:
case 2819:
case 278:
case 846:
case 311:
case 736:
case 1979:
case 2317:
case 3634:
case 3227:
case 3423:
case 3484:
case 3964:
case 1529:
case 367:
case 3830:
case 851:
case 4002:
case 1334:
case 3743:
case 3588:
case 1811:
case 2893:
case 3436:
case 769:
case 3133:
case 395:
case 1027:
case 1804:
case 2521:
case 3686:
case 2362:
case 1447:
case 3165:
case 208:
case 1195:
case 2195:
case 3835:
case 2447:
case 2243:
case 2804:
case 418:
case 2027:
case 237:
case 825:
case 2102:
case 3617:
case 2334:
case 1776:
case 2600:
case 2274:
case 1623:
case 938:
case 2462:
case 1347:
case 147:
case 27:
case 1925:
case 3336:
case 869:
case 1880:
case 2299:
case 490:
case 1008:
case 1434:
case 595:
case 2567:
case 751:
case 1567:
case 2061:
case 32:
case 1299:
case 3451:
case 2575:
case 3013:
case 3405:
case 2880:
case 614:
case 123:
case 3774:
case 2925:
case 247:
case 1462:
case 3799:
case 1982:
case 2684:
case 3948:
case 373:
case 350:
case 539:
case 1558:
case 1232:
case 2381:
case 3407:
case 3595:
case 3203:
case 2577:
case 649:
case 2218:
case 2794:
case 3502:
case 3640:
case 3732:
case 1533:
case 3328:
case 4088:
case 146:
case 2472:
case 2927:
case 3294:
case 2188:
case 1345:
case 906:
case 2656:
case 1794:
case 3121:
case 2071:
case 3764:
case 3279:
case 605:
case 1381:
case 2558:
case 2372:
case 3175:
case 997:
case 3220:
case 136:
case 3339:
case 2631:
case 2445:
case 3837:
case 1082:
case 339:
case 2197:
case 639:
case 254:
case 3850:
case 1846:
case 2766:
case 3615:
case 952:
case 1720:
case 3809:
case 2481:
case 1481:
case 3991:
case 2720:
case 505:
case 1197:
case 1296:
case 2082:
case 1445:
case 1631:
case 236:
case 1025:
case 3952:
case 3700:
case 1829:
case 3530:
case 3286:
case 3759:
case 776:
case 1945:
case 2062:
case 97:
case 1200:
case 1981:
case 2519:
case 3557:
case 1461:
case 2034:
case 3116:
case 3217:
case 2786:
case 2981:
case 599:
case 2200:
case 612:
case 2327:
case 207:
case 2945:
case 1717:
case 3092:
case 56:
case 784:
case 3723:
case 829:
case 1853:
case 2114:
case 3784:
case 1522:
case 3391:
case 1910:
case 3352:
case 1223:
case 2155:
case 1838:
case 296:
case 908:
case 248:
case 876:
case 2101:
case 2812:
case 399:
case 884:
case 4055:
case 3939:
case 196:
case 4001:
case 2427:
case 937:
case 66:
case 2972:
case 2838:
case 1674:
case 1585:
case 36:
case 3313:
case 1699:
case 2522:
case 1114:
case 2853:
case 765:
case 699:
case 1157:
case 2425:
case 2045:
case 2664:
case 1962:
case 4057:
case 2178:
case 1482:
case 3028:
case 877:
case 3448:
case 3992:
case 1740:
case 3756:
case 1632:
case 4030:
case 1371:
case 252:
case 1130:
case 910:
case 509:
case 2081:
case 1081:
case 3890:
case 1618:
case 2130:
case 2826:
case 2371:
case 1860:
case 3679:
case 2632:
case 281:
case 1516:
case 73:
case 84:
case 2482:
case 1178:
case 1045:
case 936:
case 1425:
case 2789:
case 4078:
case 335:
case 1754:
case 2010:
case 3883:
case 1471:
case 609:
case 2598:
case 3254:
case 3620:
case 2231:
case 2947:
case 3039:
case 2072:
case 3122:
case 483:
case 206:
case 946:
case 3666:
case 3141:
case 1598:
case 430:
case 3555:
case 2471:
case 3731:
case 3501:
case 3936:
case 2754:
case 1494:
case 2239:
case 2320:
case 3464:
case 3031:
case 1710:
case 863:
case 951:
case 229:
case 738:
case 848:
case 276:
case 2403:
case 2106:
case 3432:
case 626:
case 2479:
case 1207:
case 176:
case 3739:
case 982:
case 2772:
case 1546:
case 3550:
case 2710:
case 1054:
case 1320:
case 326:
case 1239:
case 3682:
case 2366:
case 2494:
case 925:
case 679:
case 3900:
case 1135:
case 2858:
case 1379:
case 796:
case 748:
case 838:
case 4035:
case 1877:
case 2865:
case 3318:
case 99:
case 3193:
case 763:
case 165:
case 1781:
case 1986:
case 2833:
case 1466:
case 3056:
case 2466:
case 1833:
case 2986:
case 265:
case 579:
case 526:
case 3728:
case 2379:
case 3895:
case 3671:
case 1858:
case 2135:
case 807:
case 2652:
case 543:
case 380:
case 3:
case 2549:
case 2150:
case 2109:
case 633:
case 1173:
case 1476:
case 464:
case 2236:
case 2137:
case 797:
case 1915:
case 3897:
case 6:
case 568:
case 3399:
case 680:
case 527:
case 1875:
case 2613:
case 1691:
case 2915:
case 1236:
case 2476:
case 1109:
case 3023:
case 1150:
case 3443:
case 4009:
case 3736:
case 1652:
case 4050:
case 2842:
case 277:
case 1762:
case 5:
case 2511:
case 1017:
case 897:
case 3792:
case 343:
case 1469:
case 1821:
case 1940:
case 1376:
case 3262:
case 3705:
case 3535:
case 2292:
case 3627:
case 1144:
case 1086:
case 2376:
case 2940:
case 4044:
case 2821:
case 1504:
case 2469:
case 627:
case 2017:
case 706:
case 3059:
case 1511:
case 2593:
case 2762:
case 3888:
case 2989:
case 1842:
case 1313:
case 538:
case 696:
case 1669:
case 363:
case 3870:
case 2784:
case 648:
case 348:
case 434:
case 3812:
case 663:
case 3101:
case 995:
case 3674:
case 1198:
case 2939:
case 3284:
case 3047:
case 3972:
case 879:
case 3522:
case 1784:
case 1723:
case 3361:
case 26:
case 2907:
case 826:
case 2313:
case 1391:
case 456:
case 563:
case 2530:
case 338:
case 2286:
case 2759:
case 638:
case 596:
case 1413:
case 1005:
case 1217:
case 726:
case 3259:
case 3786:
case 2413:
case 1491:
case 3200:
case 3981:
case 3408:
case 3034:
case 92:
case 1557:
case 2051:
case 1759:
case 1187:
case 2928:
case 950:
case 1530:
case 2676:
case 307:
case 1452:
case 3327:
case 4087:
case 212:
case 914:
case 3945:
case 8:
case 3598:
case 3010:
case 1936:
case 1568:
case 2007:
case 2122:
case 833:
case 3696:
case 145:
case 1514:
case 743:
case 48:
case 2620:
case 2185:
case 1620:
case 1254:
case 109:
case 245:
case 1122:
case 306:
case 419:
case 1824:
case 606:
case 1215:
case 1007:
case 2568:
case 2936:
case 727:
case 2141:
case 2555:
case 3471:
case 3178:
case 2448:
case 3425:
case 135:
case 733:
case 3045:
case 3664:
case 2905:
case 3081:
case 697:
case 3618:
case 1890:
case 780:
case 352:
case 2951:
case 3860:
case 506:
case 2679:
case 1951:
case 3826:
case 681:
case 3740:
case 1289:
case 1756:
case 2119:
case 235:
case 3789:
case 1992:
case 381:
case 1448:
case 2694:
case 1028:
case 2318:
case 3858:
case 4004:
case 529:
case 1728:
case 2959:
case 1895:
case 3917:
case 4011:
case 1802:
case 2193:
case 2496:
case 3228:
case 3833:
case 1364:
case 365:
case 2111:
case 2802:
case 3781:
case 584:
case 2056:
case 4093:
case 3163:
case 1245:
case 2895:
case 3379:
case 2728:
case 993:
case 2544:
case 812:
case 1281:
case 1318:
case 665:
case 2104:
case 488:
case 3877:
case 2464:
case 1707:
case 3648:
case 2923:
case 2984:
case 1682:
case 126:
case 3320:
case 3239:
case 3403:
case 3207:
case 3015:
case 1149:
case 2210:
case 1550:
case 2418:
case 2573:
case 1739:
case 2509:
case 899:
case 1210:
case 712:
case 279:
case 565:
case 2432:
case 2149:
case 3479:
case 3366:
case 226:
case 1923:
case 684:
case 1625:
case 1031:
case 2537:
case 243:
case 1000:
case 903:
case 3842:
case 2563:
case 709:
case 0:
case 1888:
case 2535:
case 3144:
case 3086:
case 677:
case 127:
case 2751:
case 1343:
case 1751:
case 2343:
case 1262:
case 168:
case 227:
case 3821:
case 53:
case 1474:
case 3292:
case 2627:
case 1705:
case 1535:
case 3762:
case 1563:
case 34:
case 2234:
case 835:
case 3469:
case 143:
case 745:
case 3593:
case 3205:
case 2059:
case 1443:
case 3109:
case 1506:
case 4046:
case 3652:
case 3549:
case 1931:
case 928:
case 3747:
case 441:
case 3236:
case 1897:
case 3915:
case 911:
case 845:
case 3369:
case 735:
case 2661:
case 33:
case 1399:
case 2931:
case 1:
case 2736:
case 63:
case 967:
case 2247:
case 2064:
case 2431:
case 351:
case 3454:
case 3340:
case 1356:
case 3628:
case 2943:
case 3003:
case 3415:
case 1032:
case 487:
case 895:
case 3887:
case 4029:
case 2018:
case 275:
case 3526:
case 2271:
case 382:
case 3560:
case 491:
case 773:
case 1681:
case 625:
case 1590:
case 2032:
case 714:
case 2129:
case 1943:
case 2356:
case 3816:
case 72:
case 1064:
case 682:
case 1138:
case 3607:
case 795:
case 1748:
case 1583:
case 669:
case 2801:
case 3782:
case 3020:
case 2814:
case 3248:
case 1974:
case 1282:
case 4053:
case 3639:
case 2282:
case 4070:
case 2456:
case 1814:
case 2153:
case 1225:
case 1170:
case 1801:
case 814:
case 293:
case 1610:
case 420:
case 850:
case 4012:
case 525:
case 3725:
case 1855:
case 2999:
case 1484:
case 1227:
case 2160:
case 1423:
case 1126:
case 3529:
case 167:
case 980:
case 1964:
case 2662:
case 228:
case 4026:
case 1857:
case 849:
case 3727:
case 401:
case 1918:
case 2878:
case 933:
case 1300:
case 3979:
case 111:
case 211:
case 3651:
case 378:
case 2300:
case 805:
case 2634:
case 1932:
case 2918:
case 3605:
case 2857:
case 3819:
case 3190:
case 267:
case 2126:
case 1160:
case 3076:
case 678:
case 2484:
case 3291:
case 1459:
case 943:
case 1261:
case 1752:
case 3553:
case 3822:
case 1791:
case 2713:
case 3486:
case 2074:
case 3761:
case 3708:
case 1384:
case 2384:
case 2323:
case 927:
case 3512:
case 2996:
case 1074:
case 578:
case 2647:
case 30:
case 2208:
case 3570:
case 2261:
case 2400:
case 3885:
case 474:
case 2459:
case 3213:
case 114:
case 623:
case 1492:
case 173:
case 1948:
case 3982:
case 3299:
case 1451:
case 323:
case 2336:
case 1774:
case 508:
case 3880:
case 2405:
case 2597:
case 2013:
case 2774:
case 2269:
case 647:
case 22:
case 3008:
case 866:
case 3849:
case 2948:
case 2492:
case 912:
case 347:
case 893:
case 3925:
case 3893:
case 3776:
case 1863:
case 57:
case 2588:
case 3971:
case 1351:
case 608:
case 308:
case 1835:
case 2158:
case 523:
case 875:
case 3521:
case 295:
case 1177:
case 3243:
case 1686:
case 1165:
case 3447:
case 195:
case 793:
case 471:
case 337:
case 2276:
case 3027:
case 999:
case 4065:
case 1158:
case 766:
case 1743:
case 2351:
case 2617:
case 3600:
case 547:
case 3334:
case 1133:
case 637:
case 96:
case 3811:
case 2837:
case 2048:
case 3197:
case 3025:
case 2220:
case 3631:
case 3445:
case 2913:
case 310:
case 354:
case 3908:
case 1873:
case 3766:
case 1615:
case 546:
case 2873:
case 3720:
case 1850:
case 1307:
case 598:
case 2991:
case 1913:
case 336:
case 1220:
case 2952:
case 1654:
case 935:
case 494:
case 139:
case 1837:
case 4075:
case 458:
case 828:
case 3218:
case 2689:
case 2203:
case 1279:
case 2407:
case 2142:
case 554:
case 2732:
case 2640:
case 909:
case 3264:
case 398:
case 1502:
case 4042:
case 1640:
case 2718:
case 3188:
case 811:
case 1142:
case 2279:
case 1203:
case 1595:
case 2764:
case 1844:
case 3232:
case 1689:
case 867:
case 698:
case 3071:
case 2121:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756152002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,];
var gg_b = "1756152002/";

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
