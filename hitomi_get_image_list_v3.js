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
case 1274:
case 1857:
case 1295:
case 2014:
case 1484:
case 3744:
case 2496:
case 2103:
case 2346:
case 2822:
case 437:
case 2674:
case 3634:
case 887:
case 1184:
case 808:
case 132:
case 1978:
case 575:
case 3524:
case 3567:
case 2582:
case 1971:
case 2850:
case 2034:
case 2196:
case 2403:
case 1379:
case 3548:
case 2839:
case 2865:
case 972:
case 3045:
case 1384:
case 112:
case 3775:
case 447:
case 67:
case 428:
case 3823:
case 3980:
case 2251:
case 2689:
case 382:
case 1658:
case 2905:
case 142:
case 2303:
case 1651:
case 3089:
case 3879:
case 1805:
case 699:
case 3564:
case 209:
case 1010:
case 2480:
case 622:
case 493:
case 1318:
case 136:
case 2270:
case 1187:
case 2006:
case 3637:
case 3527:
case 1919:
case 2902:
case 1311:
case 3693:
case 3617:
case 3747:
case 1965:
case 2642:
case 3230:
case 2862:
case 3887:
case 1242:
case 2017:
case 3454:
case 491:
case 2585:
case 3761:
case 3305:
case 2729:
case 2088:
case 1553:
case 694:
case 204:
case 3259:
case 3681:
case 748:
case 534:
case 364:
case 1576:
case 1163:
case 3768:
case 2871:
case 1411:
case 3903:
case 3688:
case 277:
case 3733:
case 1431:
case 519:
case 3797:
case 3831:
case 3713:
case 2825:
case 1118:
case 981:
case 1438:
case 3354:
case 3863:
case 1387:
case 1922:
case 155:
case 2549:
case 1292:
case 3092:
case 1463:
case 660:
case 3505:
case 2244:
case 554:
case 2580:
case 3464:
case 2199:
case 3427:
case 2983:
case 1714:
case 1644:
case 4087:
case 826:
case 687:
case 3554:
case 1587:
case 900:
case 2941:
case 3364:
case 758:
case 3853:
case 3400:
case 156:
case 19:
case 1800:
case 1015:
case 3215:
case 2485:
case 1694:
case 3086:
case 975:
case 87:
case 3982:
case 1675:
case 4018:
case 2149:
case 115:
case 2816:
case 1621:
case 3758:
case 1960:
case 2185:
case 2836:
case 2228:
case 1531:
case 1628:
case 2991:
case 1563:
case 2449:
case 1176:
case 1069:
case 3235:
case 3269:
case 2221:
case 1035:
case 1538:
case 1584:
case 3498:
case 1936:
case 3348:
case 581:
case 1032:
case 822:
case 3232:
case 2860:
case 338:
case 3040:
case 250:
case 3949:
case 3491:
case 919:
case 2182:
case 4084:
case 3167:
case 3341:
case 3770:
case 1891:
case 1737:
case 1907:
case 28:
case 1647:
case 3198:
case 1793:
case 1717:
case 1672:
case 2272:
case 1867:
case 3383:
case 934:
case 3191:
case 949:
case 3212:
case 2482:
case 1012:
case 221:
case 1290:
case 4023:
case 2233:
case 107:
case 188:
case 327:
case 894:
case 1920:
case 3229:
case 161:
case 2690:
case 3391:
case 174:
case 1523:
case 457:
case 764:
case 3441:
case 1056:
case 1743:
case 3256:
case 3324:
case 4079:
case 2726:
case 773:
case 2964:
case 3502:
case 2927:
case 944:
case 2855:
case 3141:
case 860:
case 3483:
case 2213:
case 2330:
case 743:
case 3521:
case 2569:
case 988:
case 2038:
case 907:
case 1393:
case 1188:
case 3638:
case 3528:
case 974:
case 1974:
case 1225:
case 961:
case 2159:
case 1306:
case 3071:
case 3881:
case 3748:
case 2011:
case 378:
case 2678:
case 963:
case 1481:
case 713:
case 3611:
case 741:
case 3888:
case 3575:
case 144:
case 2018:
case 1337:
case 696:
case 2515:
case 536:
case 2842:
case 1262:
case 2087:
case 1493:
case 3062:
case 2877:
case 2254:
case 1417:
case 3724:
case 2430:
case 733:
case 3817:
case 2326:
case 2110:
case 70:
case 3170:
case 3687:
case 1654:
case 2662:
case 1381:
case 1989:
case 2958:
case 1406:
case 1605:
case 1193:
case 1117:
case 1080:
case 2951:
case 2410:
case 3280:
case 149:
case 3019:
case 1219:
case 2573:
case 353:
case 362:
case 2079:
case 2889:
case 895:
case 99:
case 3513:
case 3597:
case 1334:
case 956:
case 3679:
case 2556:
case 423:
case 692:
case 1851:
case 915:
case 2619:
case 2749:
case 629:
case 3451:
case 1753:
case 1046:
case 3158:
case 421:
case 1942:
case 3700:
case 84:
case 3568:
case 3065:
case 3151:
case 3039:
case 1265:
case 257:
case 3533:
case 1314:
case 3547:
case 1434:
case 48:
case 3572:
case 867:
case 3050:
case 8:
case 3834:
case 1509:
case 2512:
case 3959:
case 801:
case 1114:
case 4009:
case 3926:
case 3764:
case 2366:
case 3684:
case 1222:
case 1096:
case 3296:
case 2084:
case 2257:
case 2622:
case 512:
case 83:
case 2895:
case 100:
case 183:
case 2283:
case 3413:
case 3347:
case 3161:
case 1309:
case 343:
case 1813:
case 0:
case 2473:
case 1897:
case 1763:
case 3551:
case 311:
case 2944:
case 2655:
case 217:
case 2456:
case 313:
case 2566:
case 2173:
case 778:
case 3197:
case 2604:
case 3113:
case 2429:
case 1204:
case 3004:
case 3433:
case 2156:
case 181:
case 1711:
case 341:
case 2412:
case 3282:
case 1872:
case 1409:
case 1082:
case 2373:
case 936:
case 1534:
case 3397:
case 26:
case 3754:
case 30:
case 12:
case 2975:
case 4034:
case 2132:
case 563:
case 3969:
case 2921:
case 440:
case 1698:
case 2660:
case 3147:
case 3705:
case 574:
case 2780:
case 2291:
case 2928:
case 1691:
case 2432:
case 507:
case 588:
case 3333:
case 1514:
case 2298:
case 1543:
case 1207:
case 2435:
case 2636:
case 2469:
case 753:
case 695:
case 1049:
case 3249:
case 1821:
case 535:
case 3175:
case 3702:
case 3428:
case 1236:
case 1779:
case 1828:
case 2607:
case 4088:
case 2076:
case 2886:
case 1581:
case 3912:
case 3016:
case 942:
case 2947:
case 404:
case 3653:
case 2135:
case 2169:
case 3121:
case 2616:
case 64:
case 2746:
case 1588:
case 3494:
case 2559:
case 1723:
case 154:
case 477:
case 3475:
case 1894:
case 751:
case 3128:
case 2530:
case 1099:
case 545:
case 3299:
case 1517:
case 667:
case 2620:
case 2335:
case 3321:
case 824:
case 3144:
case 2933:
case 1220:
case 2968:
case 601:
case 291:
case 4093:
case 932:
case 2997:
case 3757:
case 2913:
case 1506:
case 4037:
case 3973:
case 1664:
case 293:
case 603:
case 2808:
case 720:
case 1844:
case 3375:
case 3052:
case 3956:
case 2796:
case 63:
case 2315:
case 59:
case 3394:
case 2437:
case 3005:
case 3508:
case 1951:
case 2870:
case 249:
case 682:
case 3142:
case 2381:
case 1130:
case 2989:
case 885:
case 3501:
case 3760:
case 2605:
case 577:
case 2117:
case 1110:
case 219:
case 1782:
case 2137:
case 435:
case 2654:
case 37:
case 2106:
case 1842:
case 2343:
case 1087:
case 2262:
case 2493:
case 2417:
case 1430:
case 3477:
case 239:
case 1310:
case 708:
case 509:
case 1459:
case 3859:
case 2271:
case 3586:
case 3704:
case 1011:
case 4015:
case 49:
case 3211:
case 456:
case 2995:
case 3755:
case 2188:
case 2974:
case 4035:
case 214:
case 2225:
case 1031:
case 1159:
case 921:
case 1330:
case 1063:
case 1426:
case 3263:
case 3238:
case 1038:
case 3826:
case 2393:
case 3284:
case 3345:
case 3696:
case 530:
case 1532:
case 3474:
case 673:
case 690:
case 200:
case 998:
case 3752:
case 360:
case 2657:
case 2222:
case 2134:
case 2096:
case 4032:
case 3943:
case 1799:
case 3174:
case 686:
case 848:
case 2114:
case 3195:
case 3720:
case 2434:
case 664:
case 3389:
case 2509:
case 2250:
case 3590:
case 1845:
case 3374:
case 2776:
case 4029:
case 3445:
case 2314:
case 461:
case 3395:
case 2753:
case 3993:
case 1529:
case 1785:
case 3866:
case 2977:
case 1665:
case 2942:
case 488:
case 102:
case 838:
case 3145:
case 1619:
case 2602:
case 1749:
case 399:
case 275:
case 3002:
case 2219:
case 3489:
case 1202:
case 4056:
case 1079:
case 3279:
case 3906:
case 1928:
case 3440:
case 3390:
case 3595:
case 1840:
case 3098:
case 137:
case 2260:
case 1329:
case 685:
case 1112:
case 3091:
case 1994:
case 858:
case 2667:
case 3140:
case 3682:
case 1975:
case 3024:
case 1132:
case 1412:
case 3067:
case 2872:
case 432:
case 2082:
case 2624:
case 523:
case 3812:
case 16:
case 2986:
case 3048:
case 1248:
case 3771:
case 4066:
case 147:
case 1890:
case 2868:
case 281:
case 3340:
case 1332:
case 387:
case 1566:
case 412:
case 268:
case 3829:
case 2861:
case 1604:
case 58:
case 3190:
case 2738:
case 1944:
case 1655:
case 1456:
case 283:
case 3083:
case 3873:
case 1283:
case 1129:
case 2255:
case 3725:
case 2309:
case 2731:
case 2897:
case 2901:
case 904:
case 618:
case 2844:
case 3064:
case 1510:
case 2252:
case 3408:
case 3722:
case 2537:
case 3386:
case 1913:
case 3027:
case 3401:
case 170:
case 1652:
case 627:
case 1933:
case 886:
case 2220:
case 4030:
case 191:
case 3750:
case 794:
case 3101:
case 940:
case 1961:
case 2593:
case 1335:
case 1616:
case 1415:
case 1746:
case 1053:
case 1559:
case 1200:
case 1886:
case 3739:
case 2600:
case 3909:
case 3685:
case 1135:
case 4059:
case 1972:
case 3719:
case 598:
case 2940:
case 2236:
case 2779:
case 2828:
case 1607:
case 2543:
case 869:
case 1636:
case 1469:
case 105:
case 2049:
case 3592:
case 3835:
case 3869:
case 2821:
case 930:
case 3058:
case 3555:
case 1146:
case 1819:
case 2123:
case 3419:
case 2289:
case 3051:
case 1251:
case 483:
case 1689:
case 831:
case 1735:
case 481:
case 3119:
case 1715:
case 3322:
case 1396:
case 833:
case 1645:
case 1954:
case 2179:
case 468:
case 1839:
case 3786:
case 3504:
case 2245:
case 2384:
case 476:
case 130:
case 3666:
case 3465:
case 678:
case 3911:
case 1582:
case 3803:
case 3319:
case 3234:
case 666:
case 2971:
case 1850:
case 1034:
case 1403:
case 232:
case 2184:
case 993:
case 110:
case 2978:
case 970:
case 3422:
case 3708:
case 843:
case 1346:
case 3938:
case 3896:
case 1674:
case 991:
case 3339:
case 3701:
case 2925:
case 2274:
case 2295:
case 811:
case 1014:
case 3214:
case 2484:
case 947:
case 3507:
case 3243:
case 928:
case 255:
case 703:
case 2463:
case 2111:
case 1773:
case 2431:
case 1692:
case 620:
case 3178:
case 1957:
case 3984:
case 216:
case 2576:
case 3659:
case 2163:
case 3790:
case 3516:
case 917:
case 454:
case 3471:
case 1585:
case 1729:
case 2553:
case 3288:
case 1878:
case 246:
case 2418:
case 3125:
case 701:
case 1862:
case 2363:
case 2277:
case 1599:
case 2242:
case 1017:
case 1093:
case 74:
case 2331:
case 1677:
case 3630:
case 3325:
case 3979:
case 459:
case 662:
case 1006:
case 3371:
case 3740:
case 1902:
case 1732:
case 653:
case 2311:
case 795:
case 109:
case 2010:
case 392:
case 506:
case 865:
case 3070:
case 3880:
case 2318:
case 1270:
case 2628:
case 2176:
case 1449:
case 245:
case 2069:
case 3407:
case 414:
case 2035:
case 1221:
case 3116:
case 2538:
case 957:
case 3849:
case 3436:
case 3320:
case 1998:
case 2960:
case 3789:
case 3107:
case 2694:
case 3615:
case 3416:
case 2511:
case 570:
case 1816:
case 3352:
case 1924:
case 3075:
case 1766:
case 1275:
case 3094:
case 3136:
case 2518:
case 256:
case 60:
case 2015:
case 878:
case 3899:
case 505:
case 866:
case 3152:
case 1820:
case 884:
case 198:
case 641:
case 3336:
case 75:
case 2904:
case 796:
case 643:
case 2714:
case 434:
case 2644:
case 4080:
case 2827:
case 1608:
case 3120:
case 2864:
case 1244:
case 780:
case 1580:
case 1601:
case 611:
case 1927:
case 1855:
case 3455:
case 3013:
case 56:
case 1297:
case 906:
case 2056:
case 252:
case 2743:
case 2697:
case 3104:
case 1726:
case 3673:
case 3792:
case 2952:
case 367:
case 2633:
case 3155:
case 274:
case 2781:
case 3068:
case 121:
case 3565:
case 724:
case 2661:
case 697:
case 207:
case 288:
case 2920:
case 3404:
case 537:
case 2916:
case 3047:
case 1247:
case 3072:
case 3976:
case 3550:
case 3209:
case 3742:
case 18:
case 1730:
case 3612:
case 4003:
case 34:
case 851:
case 3160:
case 2793:
case 3953:
case 2717:
case 2672:
case 3632:
case 862:
case 1640:
case 400:
case 3522:
case 2706:
case 3460:
case 2936:
case 792:
case 729:
case 665:
case 2032:
case 528:
case 2240:
case 3537:
case 1570:
case 1444:
case 1956:
case 3252:
case 3844:
case 700:
case 3664:
case 492:
case 2027:
case 1757:
case 2386:
case 1328:
case 621:
case 3990:
case 1020:
case 2108:
case 197:
case 1321:
case 3593:
case 1299:
case 3894:
case 2815:
case 68:
case 2000:
case 3723:
case 1494:
case 3588:
case 1344:
case 1285:
case 2308:
case 2486:
case 3216:
case 2685:
case 3581:
case 3600:
case 2765:
case 1194:
case 809:
case 1036:
case 3236:
case 1428:
case 650:
case 1702:
case 2719:
case 775:
case 165:
case 2649:
case 3821:
case 2835:
case 958:
case 1249:
case 1007:
case 3260:
case 2098:
case 1333:
case 131:
case 2440:
case 734:
case 2091:
case 3109:
case 1705:
case 1147:
case 1935:
case 1969:
case 719:
case 518:
case 32:
case 830:
case 1754:
case 1397:
case 1313:
case 3624:
case 2067:
case 3409:
case 3872:
case 133:
case 2490:
case 141:
case 3711:
case 208:
case 698:
case 538:
case 3868:
case 381:
case 2771:
case 2545:
case 1433:
case 1004:
case 1461:
case 376:
case 1197:
case 3648:
case 2829:
case 3861:
case 368:
case 2778:
case 990:
case 113:
case 3908:
case 1133:
case 3738:
case 3683:
case 2190:
case 111:
case 4058:
case 3901:
case 2589:
case 3897:
case 3813:
case 986:
case 3309:
case 1347:
case 1161:
case 1055:
case 1413:
case 1497:
case 2083:
case 2540:
case 759:
case 2474:
case 495:
case 2284:
case 2345:
case 3414:
case 1296:
case 3096:
case 1684:
case 3657:
case 1764:
case 1926:
case 2195:
case 821:
case 582:
case 4047:
case 2174:
case 1959:
case 3250:
case 3509:
case 1834:
case 1050:
case 2981:
case 2389:
case 1572:
case 1358:
case 677:
case 3434:
case 3003:
case 1547:
case 1203:
case 2720:
case 2716:
case 3314:
case 2445:
case 2646:
case 1039:
case 3265:
case 3239:
case 4061:
case 1065:
case 2374:
case 151:
case 4033:
case 2189:
case 1930:
case 1158:
case 401:
case 4068:
case 2917:
case 3753:
case 1451:
case 609:
case 1910:
case 4013:
case 2937:
case 222:
case 403:
case 1679:
case 1458:
case 3334:
case 162:
case 3858:
case 153:
case 2489:
case 3219:
case 2002:
case 586:
case 1280:
case 2508:
case 1544:
case 3388:
case 1470:
case 3437:
case 3193:
case 2760:
case 2177:
case 2680:
case 564:
case 2142:
case 1806:
case 1687:
case 72:
case 590:
case 1767:
case 573:
case 1893:
case 1817:
case 938:
case 2392:
case 3262:
case 2830:
case 2054:
case 27:
case 898:
case 2218:
case 3488:
case 781:
case 1594:
case 1741:
case 1888:
case 339:
case 1611:
case 610:
case 2192:
case 2211:
case 3481:
case 768:
case 3271:
case 3143:
case 776:
case 166:
case 1618:
case 3306:
case 4075:
case 314:
case 2231:
case 1025:
case 3974:
case 640:
case 1528:
case 1638:
case 1783:
case 2755:
case 3995:
case 2826:
case 3393:
case 3317:
case 927:
case 2238:
case 4028:
case 3443:
case 1521:
case 2377:
case 2263:
case 948:
case 1843:
case 3181:
case 2342:
case 2013:
case 2455:
case 2656:
case 499:
case 984:
case 1273:
case 755:
case 422:
case 3883:
case 1367:
case 670:
case 2519:
case 533:
case 2673:
case 118:
case 1148:
case 966:
case 2104:
case 4002:
case 3613:
case 50:
case 3697:
case 23:
case 3743:
case 3056:
case 3523:
case 374:
case 1391:
case 3668:
case 3841:
case 1229:
case 3788:
case 1448:
case 2404:
case 1398:
case 388:
case 2033:
case 307:
case 2629:
case 746:
case 3661:
case 3848:
case 3290:
case 691:
case 2068:
case 1090:
case 3012:
case 2209:
case 1191:
case 543:
case 3867:
case 1383:
case 494:
case 2355:
case 2953:
case 2160:
case 3824:
case 511:
case 1609:
case 2742:
case 857:
case 1424:
case 1167:
case 1341:
case 1491:
case 513:
case 2632:
case 541:
case 1040:
case 3898:
case 802:
case 3032:
case 2304:
case 2460:
case 1498:
case 736:
case 3584:
case 3538:
case 2116:
case 1269:
case 2021:
case 1235:
case 345:
case 951:
case 3176:
case 3563:
case 2525:
case 1100:
case 2789:
case 3960:
case 1758:
case 2320:
case 2635:
case 597:
case 742:
case 3621:
case 2436:
case 1327:
case 3675:
case 1982:
case 1876:
case 2416:
case 66:
case 2745:
case 1215:
case 3015:
case 3800:
case 2094:
case 2136:
case 356:
case 2075:
case 1400:
case 1853:
case 1364:
case 1127:
case 2562:
case 2899:
case 2307:
case 647:
case 3904:
case 732:
case 628:
case 47:
case 2152:
case 565:
case 3827:
case 3955:
case 2795:
case 3644:
case 3714:
case 1427:
case 1001:
case 4005:
case 3201:
case 2774:
case 1464:
case 617:
case 1008:
case 2044:
case 3111:
case 1226:
case 3463:
case 941:
case 3292:
case 1838:
case 2243:
case 3922:
case 893:
case 1863:
case 1354:
case 870:
case 1797:
case 913:
case 173:
case 763:
case 2626:
case 1733:
case 2471:
case 4000:
case 1811:
case 1688:
case 1903:
case 3138:
case 3411:
case 761:
case 2281:
case 1768:
case 3576:
case 164:
case 943:
case 186:
case 1818:
case 2125:
case 224:
case 3059:
case 346:
case 2288:
case 1305:
case 891:
case 3338:
case 2923:
case 3030:
case 1887:
case 3854:
case 1230:
case 931:
case 3939:
case 3965:
case 3709:
case 1105:
case 1772:
case 657:
case 779:
case 169:
case 2610:
case 2740:
case 1527:
case 1637:
case 2371:
case 3670:
case 1154:
case 3187:
case 4064:
case 566:
case 2880:
case 336:
case 584:
case 1405:
case 4027:
case 229:
case 2378:
case 1210:
case 3010:
case 3805:
case 3289:
case 1879:
case 2419:
case 1089:
case 3123:
case 2350:
case 745:
case 3479:
case 3802:
case 2555:
case 182:
case 4083:
case 2165:
case 1980:
case 2051:
case 2139:
case 3179:
case 1823:
case 2322:
case 408:
case 3066:
case 715:
case 1775:
case 158:
case 2465:
case 2666:
case 2439:
case 756:
case 1357:
case 312:
case 3384:
case 1045:
case 4041:
case 2786:
case 2234:
case 1302:
case 2450:
case 735:
case 2911:
case 1567:
case 847:
case 3978:
case 1157:
case 25:
case 2963:
case 3323:
case 997:
case 2708:
case 1744:
case 3484:
case 2560:
case 3295:
case 1095:
case 280:
case 3857:
case 2931:
case 1884:
case 1074:
case 817:
case 3925:
case 2365:
case 2339:
case 551:
case 350:
case 709:
case 2232:
case 238:
case 97:
case 2348:
case 875:
case 1304:
case 1460:
case 2498:
case 1522:
case 420:
case 2167:
case 3182:
case 3640:
case 195:
case 1632:
case 3710:
case 1953:
case 1160:
case 2198:
case 2985:
case 2609:
case 3730:
case 3900:
case 1742:
case 2424:
case 654:
case 2467:
case 3009:
case 3482:
case 1209:
case 1550:
case 2212:
case 2191:
case 1976:
case 3272:
case 2448:
case 1404:
case 2398:
case 227:
case 1033:
case 1360:
case 3233:
case 1539:
case 3804:
case 248:
case 3268:
case 101:
case 2090:
case 2999:
case 2391:
case 3690:
case 1:
case 451:
case 1155:
case 2229:
case 3261:
case 4039:
case 1061:
case 167:
case 1792:
case 462:
case 659:
case 3964:
case 3726:
case 218:
case 3213:
case 3297:
case 1013:
case 1455:
case 103:
case 3927:
case 3601:
case 3385:
case 683:
case 3983:
case 2427:
case 844:
case 839:
case 398:
case 4062:
case 960:
case 2127:
case 668:
case 3499:
case 3941:
case 1562:
case 676:
case 1899:
case 2215:
case 3686:
case 478:
case 819:
case 1136:
case 730:
case 4071:
case 2400:
case 3924:
case 2853:
case 1578:
case 1352:
case 3816:
case 2327:
case 2982:
case 999:
case 3967:
case 2876:
case 4078:
case 922:
case 2086:
case 1107:
case 1745:
case 1525:
case 2100:
case 3836:
case 1789:
case 834:
case 1320:
case 1635:
case 849:
case 1849:
case 2269:
case 3221:
case 1407:
case 1021:
case 3449:
case 3991:
case 2751:
case 3807:
case 2606:
case 3037:
case 1880:
case 1237:
case 2405:
case 1070:
case 526:
case 192:
case 3480:
case 1378:
case 2564:
case 309:
case 1610:
case 3732:
case 3006:
case 4052:
case 1162:
case 1979:
case 78:
case 1325:
case 1630:
case 3712:
case 1520:
case 2693:
case 2454:
case 1217:
case 3093:
case 3017:
case 1923:
case 2887:
case 4020:
case 1478:
case 286:
case 2818:
case 4016:
case 1125:
case 1288:
case 3088:
case 2761:
case 2305:
case 2733:
case 2811:
case 2688:
case 1516:
case 3871:
case 1790:
case 271:
case 2768:
case 1659:
case 859:
case 1536:
case 2643:
case 3825:
case 1984:
case 2713:
case 2797:
case 3957:
case 600:
case 290:
case 1178:
case 3692:
case 4007:
case 273:
case 723:
case 2226:
case 4036:
case 3549:
case 1507:
case 1171:
case 2996:
case 3043:
case 57:
case 2457:
case 2598:
case 2095:
case 180:
case 2884:
case 1701:
case 340:
case 3674:
case 1150:
case 883:
case 3822:
case 1938:
case 3346:
case 2614:
case 1708:
case 431:
case 1422:
case 2744:
case 644:
case 881:
case 310:
case 196:
case 1918:
case 868:
case 3034:
case 1234:
case 2302:
case 876:
case 1803:
case 1450:
case 40:
case 82:
case 925:
case 258:
case 1666:
case 330:
case 2357:
case 2045:
case 413:
case 3865:
case 1504:
case 3446:
case 3954:
case 1987:
case 3645:
case 1322:
case 4004:
case 1846:
case 1119:
case 560:
case 2266:
case 2541:
case 2775:
case 2721:
case 443:
case 3769:
case 634:
case 649:
case 594:
case 1051:
case 1139:
case 2879:
case 2089:
case 1350:
case 3819:
case 3146:
case 1555:
case 411:
case 3258:
case 1835:
case 125:
case 2249:
case 679:
case 473:
case 2007:
case 2421:
case 3636:
case 3435:
case 490:
case 2194:
case 2036:
case 3607:
case 2428:
case 836:
case 265:
case 2932:
case 1649:
case 2121:
case 2653:
case 1486:
case 1685:
case 1276:
case 1739:
case 1765:
case 3076:
case 2494:
case 464:
case 3053:
case 1308:
case 471:
case 2321:
case 3369:
case 3620:
case 1542:
case 674:
case 3530:
case 1577:
case 1699:
case 846:
case 3703:
case 4077:
case 2144:
case 1108:
case 297:
case 3652:
case 393:
case 370:
case 3227:
case 1027:
case 996:
case 2757:
case 95:
case 2394:
case 1722:
case 2956:
case 652:
case 469:
case 663:
case 1064:
case 3808:
case 924:
case 1589:
case 3473:
case 3312:
case 1725:
case 2347:
case 2161:
case 2055:
case 2413:
case 1873:
case 482:
case 2558:
case 317:
case 4089:
case 1190:
case 211:
case 2461:
case 3604:
case 2113:
case 2197:
case 458:
case 1829:
case 1778:
case 1041:
case 213:
case 4045:
case 3566:
case 187:
case 3332:
case 2468:
case 3156:
case 706:
case 347:
case 1545:
case 2433:
case 2004:
case 2447:
case 2397:
case 1812:
case 2809:
case 503:
case 615:
case 3373:
case 1067:
case 2282:
case 233:
case 929:
case 3412:
case 3132:
case 812:
case 1682:
case 1140:
case 3356:
case 20:
case 2915:
case 3994:
case 656:
case 3291:
case 645:
case 1091:
case 4095:
case 3780:
case 3112:
case 5:
case 2147:
case 2705:
case 3660:
case 3921:
case 4074:
case 337:
case 1832:
case 1098:
case 2060:
case 2333:
case 1595:
case 2368:
case 1390:
case 3928:
case 501:
case 2458:
case 418:
case 2513:
case 1736:
case 262:
case 705:
case 2019:
case 2451:
case 3749:
case 2910:
case 1937:
case 636:
case 55:
case 1145:
case 122:
case 596:
case 2679:
case 2700:
case 3466:
case 1223:
case 3639:
case 3665:
case 3023:
case 1189:
case 2158:
case 448:
case 3785:
case 2561:
case 1917:
case 2533:
case 580:
case 1646:
case 2039:
case 2151:
case 2065:
case 1590:
case 2834:
case 1981:
case 2572:
case 861:
case 1720:
case 2351:
case 791:
case 3650:
case 1174:
case 194:
case 2022:
case 2296:
case 3366:
case 655:
case 2814:
case 1474:
case 852:
case 3532:
case 1495:
case 3622:
case 616:
case 1696:
case 3874:
case 3257:
case 3084:
case 1826:
case 3892:
case 2521:
case 2631:
case 1263:
case 1492:
case 3063:
case 3330:
case 3625:
case 3031:
case 1231:
case 2663:
case 485:
case 2638:
case 717:
case 3126:
case 3678:
case 1704:
case 2748:
case 93:
case 1934:
case 2618:
case 284:
case 632:
case 126:
case 592:
case 3671:
case 306:
case 2594:
case 2575:
case 3310:
case 2611:
case 4086:
case 2078:
case 903:
case 728:
case 1392:
case 2724:
case 3254:
case 2062:
case 3877:
case 3087:
case 91:
case 76:
case 3842:
case 17:
case 612:
case 89:
case 3782:
case 995:
case 94:
case 1760:
case 1501:
case 3130:
case 4008:
case 1142:
case 2280:
case 642:
case 289:
case 4001:
case 3205:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1752231602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,];
var gg_b = "1752231602/";

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
