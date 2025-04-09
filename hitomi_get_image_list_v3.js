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
case 1916:
case 1413:
case 1898:
case 3561:
case 2001:
case 2121:
case 294:
case 424:
case 2395:
case 992:
case 2461:
case 2979:
case 3010:
case 3871:
case 149:
case 3234:
case 2264:
case 419:
case 2055:
case 2249:
case 3978:
case 3170:
case 73:
case 78:
case 2183:
case 1370:
case 2238:
case 3268:
case 1870:
case 761:
case 1058:
case 1286:
case 898:
case 122:
case 2244:
case 8:
case 855:
case 665:
case 2820:
case 3925:
case 2320:
case 3773:
case 2199:
case 2937:
case 175:
case 2697:
case 3156:
case 2452:
case 3541:
case 3503:
case 369:
case 703:
case 1856:
case 1991:
case 426:
case 4073:
case 1631:
case 2194:
case 296:
case 1254:
case 2034:
case 3064:
case 1676:
case 972:
case 1451:
case 2992:
case 2779:
case 988:
case 3193:
case 67:
case 938:
case 1259:
case 2039:
case 546:
case 1384:
case 3409:
case 687:
case 2614:
case 553:
case 3747:
case 1729:
case 3189:
case 311:
case 643:
case 724:
case 3687:
case 2346:
case 925:
case 3243:
case 3201:
case 181:
case 2626:
case 1889:
case 2619:
case 3790:
case 1724:
case 3184:
case 4047:
case 195:
case 403:
case 3767:
case 3725:
case 3651:
case 2866:
case 3836:
case 477:
case 1526:
case 2077:
case 2366:
case 3618:
case 2233:
case 3263:
case 1462:
case 373:
case 1200:
case 797:
case 3778:
case 3044:
case 1107:
case 280:
case 461:
case 34:
case 951:
case 1487:
case 4082:
case 1609:
case 1002:
case 2068:
case 3508:
case 3822:
case 3322:
case 1122:
case 864:
case 654:
case 3255:
case 544:
case 4078:
case 48:
case 1065:
case 124:
case 2081:
case 1113:
case 2216:
case 781:
case 2759:
case 1964:
case 2897:
case 1595:
case 1279:
case 2161:
case 1831:
case 3521:
case 1274:
case 1710:
case 1471:
case 2754:
case 339:
case 389:
case 2840:
case 1698:
case 3599:
case 292:
case 2141:
case 2103:
case 2556:
case 3902:
case 1938:
case 2023:
case 3758:
case 2695:
case 3330:
case 3965:
case 2935:
case 3711:
case 3594:
case 691:
case 1073:
case 126:
case 2494:
case 2700:
case 2291:
case 2570:
case 758:
case 994:
case 197:
case 3456:
case 1237:
case 475:
case 2499:
case 2057:
case 4045:
case 3636:
case 2589:
case 3818:
case 2959:
case 3493:
case 3851:
case 251:
case 2115:
case 980:
case 3351:
case 3996:
case 3685:
case 3517:
case 1546:
case 3484:
case 1809:
case 1047:
case 542:
case 3104:
case 3016:
case 652:
case 481:
case 3281:
case 431:
case 2417:
case 1142:
case 976:
case 2593:
case 3342:
case 3607:
case 1304:
case 3489:
case 508:
case 1090:
case 3109:
case 3024:
case 834:
case 3305:
case 1376:
case 1067:
case 1025:
case 1280:
case 3257:
case 529:
case 1162:
case 1933:
case 2488:
case 177:
case 886:
case 495:
case 1105:
case 968:
case 150:
case 225:
case 3176:
case 1078:
case 1744:
case 2646:
case 13:
case 1350:
case 514:
case 3887:
case 4065:
case 1850:
case 1738:
case 3223:
case 2814:
case 857:
case 1684:
case 2786:
case 2819:
case 722:
case 2326:
case 2319:
case 3958:
case 2826:
case 1082:
case 4002:
case 1187:
case 3150:
case 3162:
case 3436:
case 2777:
case 473:
case 3876:
case 3693:
case 1257:
case 769:
case 206:
case 2273:
case 303:
case 3105:
case 1091:
case 793:
case 1362:
case 2808:
case 2768:
case 1702:
case 3738:
case 2126:
case 3078:
case 218:
case 3744:
case 3350:
case 1572:
case 33:
case 2617:
case 38:
case 2955:
case 1887:
case 4044:
case 3187:
case 584:
case 3749:
case 361:
case 808:
case 1958:
case 1588:
case 829:
case 1818:
case 2688:
case 4069:
case 536:
case 2739:
case 4064:
case 3910:
case 910:
case 3151:
case 2315:
case 3546:
case 60:
case 633:
case 2943:
case 557:
case 2446:
case 3309:
case 3809:
case 814:
case 1104:
case 1016:
case 3047:
case 3090:
case 3804:
case 1109:
case 1024:
case 1842:
case 1275:
case 1902:
case 3938:
case 2968:
case 74:
case 2621:
case 3944:
case 2160:
case 2278:
case 3520:
case 1711:
case 3949:
case 1594:
case 1758:
case 2341:
case 2841:
case 2352:
case 2763:
case 469:
case 2977:
case 2420:
case 326:
case 3073:
case 105:
case 707:
case 2225:
case 2080:
case 4033:
case 773:
case 1671:
case 1498:
case 2701:
case 2290:
case 2683:
case 324:
case 590:
case 1813:
case 2912:
case 2948:
case 1796:
case 2694:
case 2934:
case 2140:
case 319:
case 3595:
case 139:
case 3471:
case 2939:
case 1945:
case 2197:
case 3656:
case 1521:
case 2361:
case 3710:
case 2092:
case 1336:
case 4091:
case 3519:
case 1618:
case 2388:
case 395:
case 1767:
case 3405:
case 1651:
case 601:
case 1725:
case 2957:
case 2615:
case 846:
case 3200:
case 3791:
case 3462:
case 904:
case 3136:
case 2166:
case 1038:
case 1508:
case 3532:
case 853:
case 663:
case 202:
case 3107:
case 1044:
case 41:
case 3487:
case 1450:
case 14:
case 3027:
case 1049:
case 3065:
case 2035:
case 3604:
case 3122:
case 1782:
case 2426:
case 3393:
case 918:
case 3451:
case 940:
case 3254:
case 3259:
case 1662:
case 2608:
case 1193:
case 111:
case 1515:
case 1687:
case 3650:
case 441:
case 2817:
case 3884:
case 1409:
case 3384:
case 3716:
case 3889:
case 1404:
case 578:
case 844:
case 3724:
case 3442:
case 564:
case 2981:
case 1201:
case 679:
case 2383:
case 2883:
case 2265:
case 322:
case 2460:
case 3370:
case 3870:
case 3058:
case 1982:
case 1033:
case 1156:
case 2253:
case 1925:
case 2530:
case 1773:
case 2000:
case 1967:
case 375:
case 3631:
case 193:
case 405:
case 2757:
case 169:
case 2928:
case 3991:
case 923:
case 3398:
case 1561:
case 259:
case 3929:
case 1212:
case 1947:
case 3916:
case 3540:
case 3597:
case 3924:
case 598:
case 2641:
case 741:
case 2781:
case 1198:
case 3096:
case 2652:
case 2059:
case 2245:
case 1239:
case 2054:
case 2440:
case 2513:
case 1010:
case 563:
case 3432:
case 1408:
case 2053:
case 2136:
case 2791:
case 837:
case 1233:
case 3728:
case 2200:
case 3372:
case 15:
case 3872:
case 599:
case 3615:
case 425:
case 295:
case 2405:
case 3388:
case 1866:
case 4028:
case 1077:
case 3775:
case 1706:
case 2604:
case 2122:
case 3035:
case 2065:
case 348:
case 2027:
case 310:
case 472:
case 1576:
case 180:
case 2487:
case 302:
case 3562:
case 2532:
case 3086:
case 4075:
case 792:
case 2002:
case 2609:
case 3414:
case 451:
case 3296:
case 682:
case 1992:
case 3608:
case 2045:
case 1034:
case 664:
case 854:
case 1504:
case 2254:
case 2451:
case 678:
case 517:
case 2393:
case 2676:
case 950:
case 168:
case 281:
case 3551:
case 2442:
case 3146:
case 3981:
case 174:
case 2724:
case 3518:
case 1619:
case 2716:
case 2884:
case 1614:
case 2650:
case 3317:
case 1346:
case 1846:
case 738:
case 2286:
case 788:
case 1441:
case 2370:
case 492:
case 2011:
case 222:
case 2430:
case 3265:
case 89:
case 1249:
case 3383:
case 196:
case 1780:
case 2631:
case 3661:
case 3000:
case 2560:
case 1199:
case 3253:
case 127:
case 1121:
case 1895:
case 3603:
case 997:
case 2597:
case 2540:
case 2413:
case 359:
case 3321:
case 2898:
case 3821:
case 1792:
case 1461:
case 751:
case 1269:
case 3652:
case 3059:
case 3497:
case 655:
case 865:
case 698:
case 1974:
case 6:
case 3522:
case 1832:
case 277:
case 981:
case 2105:
case 1472:
case 125:
case 3273:
case 662:
case 813:
case 2025:
case 96:
case 2693:
case 476:
case 2876:
case 3037:
case 2376:
case 2933:
case 3132:
case 1108:
case 1075:
case 1819:
case 1326:
case 2566:
case 4068:
case 1319:
case 2082:
case 2689:
case 3536:
case 138:
case 430:
case 1735:
case 261:
case 2749:
case 340:
case 3617:
case 172:
case 318:
case 3585:
case 3126:
case 3119:
case 2738:
case 1314:
case 3672:
case 2546:
case 547:
case 2151:
case 3739:
case 4034:
case 3734:
case 3688:
case 4039:
case 3074:
case 1115:
case 2292:
case 871:
case 1593:
case 304:
case 2304:
case 3712:
case 2804:
case 474:
case 4012:
case 3446:
case 468:
case 160:
case 958:
case 2142:
case 995:
case 1695:
case 3303:
case 3841:
case 2949:
case 1360:
case 1935:
case 1860:
case 2130:
case 2944:
case 828:
case 3755:
case 2698:
case 3968:
case 1483:
case 730:
case 1141:
case 75:
case 427:
case 776:
case 1499:
case 3225:
case 2237:
case 835:
case 496:
case 3420:
case 323:
case 3977:
case 3352:
case 3852:
case 2733:
case 3763:
case 4001:
case 1081:
case 4043:
case 891:
case 3495:
case 768:
case 1216:
case 2670:
case 224:
case 3683:
case 1224:
case 3290:
case 3743:
case 3701:
case 1421:
case 2274:
case 2710:
case 3699:
case 3361:
case 2331:
case 1598:
case 690:
case 1840:
case 2656:
case 3939:
case 219:
case 1397:
case 3140:
case 3934:
case 2279:
case 1161:
case 3694:
case 3948:
case 3216:
case 1495:
case 3229:
case 969:
case 459:
case 3081:
case 993:
case 1701:
case 2498:
case 2313:
case 3224:
case 1290:
case 528:
case 2945:
case 3840:
case 3754:
case 239:
case 1939:
case 4059:
case 1861:
case 0:
case 3598:
case 2131:
case 1694:
case 3620:
case 3397:
case 535:
case 3897:
case 1934:
case 1140:
case 2711:
case 2594:
case 3360:
case 1278:
case 3935:
case 3860:
case 2830:
case 591:
case 2758:
case 1341:
case 1841:
case 3023:
case 3483:
case 2902:
case 702:
case 1282:
case 3103:
case 1160:
case 392:
case 3057:
case 2456:
case 3152:
case 2953:
case 3291:
case 3570:
case 2228:
case 3700:
case 3494:
case 205:
case 1739:
case 3584:
case 1672:
case 642:
case 1315:
case 94:
case 2996:
case 608:
case 2351:
case 1688:
case 3666:
case 2636:
case 3589:
case 2109:
case 104:
case 2024:
case 2607:
case 2842:
case 973:
case 2342:
case 2281:
case 3417:
case 1901:
case 1943:
case 567:
case 2176:
case 325:
case 3472:
case 1273:
case 2362:
case 1522:
case 2753:
case 614:
case 847:
case 1132:
case 1507:
case 2305:
case 911:
case 3900:
case 2765:
case 3735:
case 21:
case 2727:
case 3075:
case 4086:
case 3326:
case 3826:
case 629:
case 3319:
case 571:
case 3786:
case 1126:
case 1119:
case 2702:
case 2572:
case 1617:
case 448:
case 2387:
case 3646:
case 1955:
case 372:
case 118:
case 1585:
case 3895:
case 1641:
case 3395:
case 1603:
case 704:
case 905:
case 3043:
case 3001:
case 1321:
case 1821:
case 2561:
case 159:
case 1195:
case 1440:
case 3792:
case 2010:
case 3461:
case 3979:
case 2239:
case 1059:
case 3244:
case 2982:
case 3906:
case 3183:
case 939:
case 740:
case 1383:
case 1227:
case 3249:
case 1399:
case 1120:
case 423:
case 1661:
case 1928:
case 3640:
case 706:
case 1253:
case 2503:
case 3697:
case 3452:
case 4080:
case 845:
case 3820:
case 1530:
case 3320:
case 2069:
case 899:
case 3632:
case 1608:
case 543:
case 3509:
case 600:
case 537:
case 587:
case 3415:
case 3992:
case 1296:
case 3048:
case 2605:
case 3504:
case 2184:
case 3626:
case 3619:
case 2201:
case 3346:
case 2687:
case 1317:
case 1817:
case 2515:
case 2747:
case 2189:
case 3614:
case 57:
case 1372:
case 35:
case 1872:
case 3980:
case 1615:
case 376:
case 1166:
case 1432:
case 1728:
case 3233:
case 2618:
case 1388:
case 2836:
case 3866:
case 2336:
case 723:
case 2973:
case 440:
case 148:
case 110:
case 3706:
case 1419:
case 2782:
case 2508:
case 1258:
case 1562:
case 1211:
case 2778:
case 102:
case 2094:
case 2800:
case 3905:
case 3272:
case 345:
case 1976:
case 1333:
case 1833:
case 2163:
case 3288:
case 3056:
case 2932:
case 752:
case 2692:
case 2099:
case 485:
case 435:
case 559:
case 1580:
case 4030:
case 1950:
case 19:
case 1111:
case 2914:
case 649:
case 1158:
case 2423:
case 3070:
case 3811:
case 428:
case 3311:
case 3918:
case 3581:
case 622:
case 3673:
case 3896:
case 3110:
case 3951:
case 1810:
case 1731:
case 767:
case 2293:
case 2740:
case 1071:
case 1909:
case 221:
case 3098:
case 2021:
case 491:
case 1246:
case 3217:
case 675:
case 2101:
case 1904:
case 880:
case 1750:
case 830:
case 3787:
case 1478:
case 282:
case 232:
case 2386:
case 3802:
case 1338:
case 2168:
case 264:
case 3690:
case 1482:
case 3865:
case 1007:
case 3930:
case 2960:
case 3144:
case 278:
case 3827:
case 1849:
case 1425:
case 1776:
case 735:
case 4062:
case 1506:
case 2088:
case 317:
case 1153:
case 934:
case 2177:
case 3853:
case 2732:
case 137:
case 3294:
case 413:
case 1220:
case 4005:
case 143:
case 876:
case 1295:
case 502:
case 3416:
case 3429:
case 2017:
case 1579:
case 3678:
case 658:
case 301:
case 3742:
case 3221:
case 936:
case 874:
case 791:
case 3682:
case 3089:
case 1704:
case 3718:
case 154:
case 467:
case 970:
case 2637:
case 3093:
case 4051:
case 2148:
case 266:
case 709:
case 2529:
case 4018:
case 1369:
case 3345:
case 3845:
case 2134:
case 185:
case 2157:
case 3373:
case 3696:
case 1232:
case 3208:
case 3936:
case 2463:
case 624:
case 1756:
case 2654:
case 1610:
case 1173:
case 2380:
case 3985:
case 3555:
case 420:
case 128:
case 2455:
case 2123:
case 1219:
case 1226:
case 3922:
case 2003:
case 1214:
case 22:
case 2250:
case 49:
case 1030:
case 523:
case 1633:
case 4071:
case 465:
case 2892:
case 955:
case 3543:
case 9:
case 3771:
case 109:
case 1984:
case 2204:
case 1554:
case 2443:
case 2510:
case 2401:
case 2946:
case 3611:
case 1559:
case 3050:
case 4007:
case 872:
case 1260:
case 3444:
case 3203:
case 3241:
case 3438:
case 2468:
case 257:
case 1970:
case 3382:
case 1465:
case 1427:
case 504:
case 113:
case 3076:
case 2337:
case 443:
case 4085:
case 2837:
case 2128:
case 1664:
case 487:
case 2766:
case 437:
case 2008:
case 3645:
case 1167:
case 236:
case 1125:
case 3785:
case 286:
case 152:
case 1329:
case 3847:
case 2569:
case 1829:
case 1784:
case 3602:
case 1638:
case 650:
case 603:
case 3548:
case 2635:
case 3665:
case 1042:
case 1324:
case 1824:
case 3534:
case 1789:
case 2412:
case 2995:
case 1018:
case 851:
case 2874:
case 1051:
case 2448:
case 2374:
case 932:
case 1793:
case 982:
case 978:
case 2015:
case 3653:
case 506:
case 3971:
case 1297:
case 1445:
case 401:
case 2717:
case 3644:
case 3190:
case 3816:
case 1539:
case 3316:
case 2545:
case 214:
case 2668:
case 1009:
case 1602:
case 4089:
case 3324:
case 2213:
case 3824:
case 1534:
case 1129:
case 588:
case 1004:
case 1890:
case 1116:
case 4084:
case 1548:
case 371:
case 3649:
case 1627:
case 3051:
case 900:
case 61:
case 463:
case 953:
case 1512:
case 2677:
case 1653:
case 1971:
case 367:
case 2174:
case 2486:
case 2553:
case 3182:
case 1203:
case 1241:
case 2106:
case 2014:
case 2983:
case 10:
case 1378:
case 2230:
case 1444:
case 2435:
case 3427:
case 2875:
case 2375:
case 2612:
case 2788:
case 2634:
case 551:
case 216:
case 2648:
case 3535:
case 1825:
case 641:
case 1076:
case 2527:
case 2994:
case 1867:
case 3005:
case 2137:
case 133:
case 1785:
case 183:
case 352:
case 3453:
case 944:
case 3669:
case 2639:
case 417:
case 3586:
case 2328:
case 3891:
case 2828:
case 3956:
case 2663:
case 479:
case 2459:
case 2218:
case 2454:
case 1771:
case 309:
case 1501:
case 2251:
case 1543:
case 1410:
case 2242:
case 2655:
case 592:
case 3554:
case 701:
case 3989:
case 3559:
case 605:
case 3232:
case 4056:
case 2558:
case 717:
case 2794:
case 2511:
case 2180:
case 1373:
case 1873:
case 1696:
case 3173:
case 3610:
case 445:
case 2799:
case 1985:
case 2783:
case 639:
case 1922:
case 2601:
case 328:
case 2643:
case 2287:
case 1907:
case 3458:
case 1563:
case 916:
case 3579:
case 673:
case 1416:
case 3295:
case 1429:
case 4004:
case 580:
case 530:
case 607:
case 244:
case 2675:
case 4009:
case 1089:
case 1742:
case 1751:
case 2348:
case 2474:
case 1667:
case 942:
case 1718:
case 2834:
case 3145:
case 354:
case 3364:
case 1169:
case 2839:
case 2339:
case 3369:
case 55:
case 1845:
case 3691:
case 2715:
case 3629:
case 1528:
case 2868:
case 1149:
case 3478:
case 2135:
case 1144:
case 4050:
case 40:
case 1365:
case 1827:
case 1327:
case 3624:
case 1138:
case 3482:
case 2903:
case 2186:
case 3506:
case 2952:
case 1575:
case 2582:
case 914:
case 1299:
case 3467:
case 433:
case 1705:
case 1294:
case 246:
case 4076:
case 1353:
case 1762:
case 2708:
case 337:
case 1491:
case 387:
case 527:
case 1581:
case 2154:
case 1918:
case 2159:
case 596:
case 179:
case 2657:
case 2915:
case 2343:
case 3909:
case 669:
case 1217:
case 3246:
case 3333:
case 1523:
case 1905:
case 415:
case 3473:
case 2480:
case 1056:
case 733:
case 1962:
case 70:
case 2207:
case 3111:
case 320:
case 2681:
case 2573:
case 2222:
case 2703:
case 1358:
case 1298:
case 952:
case 831:
case 2574:
case 3812:
case 344:
case 1112:
case 434:
case 1148:
case 3715:
case 3479:
case 680:
case 3961:
case 3628:
case 2869:
case 3839:
case 1529:
case 2369:
case 3339:
case 3590:
case 3271:
case 254:
case 1637:
case 4015:
case 3474:
case 1726:
case 457:
case 2482:
case 3903:
case 2624:
case 3406:
case 164:
case 3567:
case 3525:
case 1835:
case 1335:
case 470:
case 256:
case 2478:
case 2165:
case 2844:
case 300:
case 2127:
case 3868:
case 1714:
case 3368:
case 790:
case 1270:
case 1886:
case 2629:
case 1386:
case 2616:
case 287:
case 1732:
case 243:
case 346:
case 971:
case 1679:
case 2776:
case 3437:
case 858:
case 668:
case 2425:
case 3952:
case 674:
case 2506:
case 4008:
case 2731:
case 3761:
case 1293:
case 2310:
case 3657:
case 3915:
case 2810:
case 593:
case 1354:
case 1859:
case 1359:
case 1797:
case 4061:
case 928:
case 1143:
case 1481:
case 784:
case 2246:
case 734:
case 1284:
case 3623:
case 627:
case 2904:
case 1289:
case 762:
case 1021:
case 696:
case 3301:
case 985:
case 3343:
case 3801:
case 935:
case 736:
case 2266:
case 3908:
case 786:
case 1163:
case 991:
case 1692:
case 1099:
case 3480:
case 1457:
case 3020:
case 1300:
case 2976:
case 2333:
case 3863:
case 1423:
case 3703:
case 3222:
case 822:
case 198:
case 3573:
case 1760:
case 1:
case 220:
case 3681:
case 2950:
case 757:
case 42:
case 2158:
case 1083:
case 4003:
case 987:
case 2789:
case 1412:
case 1564:
case 3213:
case 2824:
case 134:
case 2784:
case 3545:
case 314:
case 3668:
case 2329:
case 1569:
case 1686:
case 721:
case 2644:
case 3921:
case 1746:
case 625:
case 3717:
case 672:
case 3174:
case 267:
case 2297:
case 329:
case 2018:
case 1231:
case 466:
case 3179:
case 638:
case 1874:
case 688:
case 1374:
case 3612:
case 3019:
case 541:
case 3875:
case 432:
case 3435:
case 651:
case 2465:
case 2178:
case 478:
case 83:
case 3014:
case 157:
case 1175:
case 954:
case 3486:
case 3328:
case 877:
case 2391:
case 1538:
case 1008:
case 4088:
case 136:
case 2125:
case 803:
case 3999:
case 3772:
case 1549:
case 2005:
case 1837:
case 316:
case 213:
case 2535:
case 1766:
case 1477:
case 3788:
case 1128:
case 3634:
case 2664:
case 1061:
case 3251:
case 692:
case 766:
case 3040:
case 2633:
case 3097:
case 819:
case 99:
case 4021:
case 3381:
case 1209:
case 1795:
case 2989:
case 1204:
case 2984:
case 2013:
case 3242:
case 2798:
case 3721:
case 1181:
case 3655:
case 1443:
case 2756:
case 897:
case 3972:
case 3205:
case 539:
case 3357:
case 3799:
case 1880:
case 1720:
case 826:
case 3794:
case 285:
case 3511:
case 3988:
case 1052:
case 1659:
case 1463:
case 2232:
case 3558:
case 2214:
case 4083:
case 1003:
case 2458:
case 3060:
case 2030:
case 2411:
case 4:
case 498:
case 3601:
case 3643:
case 965:
case 228:
case 2219:
case 2226:
case 3783:
case 1972:
case 215:
case 2555:
case 1799:
case 1357:
case 3880:
case 3659:
case 3052:
case 1988:
case 2936:
case 1262:
case 3966:
case 3157:
case 2873:
case 2696:
case 1400:
case 1794:
case 805:
case 1287:
case 3250:
case 979:
case 3533:
case 2563:
case 1323:
case 3003:
case 712:
case 3041:
case 2922:
case 3123:
case 1783:
case 3455:
case 524:
case 390:
case 839:
case 1454:
case 2771:
case 889:
case 3061:
case 597:
case 2031:
case 3392:
case 1251:
case 3892:
case 2543:
case 3600:
case 1097:
case 3209:
case 3795:
case 1596:
case 1381:
case 1242:
case 945:
case 3443:
case 4095:
case 81:
case 453:
case 1435:
case 2707:
case 400:
case 108:
case 1019:
case 2382:
case 2882:
case 1026:
case 1875:
case 3306:
case 999:
case 3468:
case 1983:
case 2438:
case 1486:
case 2722:
case 2203:
case 142:
case 2444:
case 370:
case 20:
case 2050:
case 233:
case 2785:
case 901:
case 1328:
case 2252:
case 1828:
case 1502:
case 247:
case 3008:
case 1639:
case 1032:
case 3766:
case 2736:
case 1634:
case 3549:
case 3337:
case 446:
case 2367:
case 1994:
case 3837:
case 2825:
case 3920:
case 1565:
case 2129:
case 561:
case 3995:
case 2116:
case 334:
case 3564:
case 2548:
case 2665:
case 3635:
case 606:
case 362:
case 2124:
case 53:
case 1668:
case 2602:
case 58:
case 3686:
case 2539:
case 550:
case 2971:
case 3015:
case 1174:
case 640:
case 3379:
case 577:
case 2261:
case 1179:
case 3874:
case 2512:
case 1677:
case 129:
case 2464:
case 3692:
case 549:
case 1480:
case 1908:
case 869:
case 2288:
case 2056:
case 1752:
case 1863:
case 1285:
case 3094:
case 3800:
case 245:
case 3:
case 3760:
case 355:
case 3155:
case 3423:
case 2070:
case 3926:
case 2858:
case 1222:
case 2358:
case 3919:
case 1741:
case 3083:
case 4060:
case 2987:
case 1355:
case 2557:
case 3854:
case 279:
case 3740:
case 1159:
case 3680:
case 2110:
case 2896:
case 2673:
case 2396:
case 2951:
case 3797:
case 3359:
case 575:
case 2918:
case 1154:
case 1095:
case 915:
case 3143:
case 2942:
case 1843:
case 1801:
case 3289:
case 2827:
case 1525:
case 2144:
case 2930:
case 2365:
case 1941:
case 531:
case 2690:
case 1903:
case 3726:
case 1186:
case 3475:
case 2283:
case 3168:
case 1406:
case 2802:
case 2528:
case 2302:
case 3270:
case 1368:
case 3886:
case 382:
case 153:
case 332:
case 2149:
case 100:
case 2787:
case 84:
case 146:
case 1578:
case 2294:
case 3072:
case 2491:
case 807:
case 3428:
case 3177:
case 2353:
case 1377:
case 1877:
case 4032:
case 3088:
case 3256:
case 2575:
case 2705:
case 2299:
case 3674:
case 1812:
case 2424:
case 983:
case 933:
case 3017:
case 2084:
case 3112:
case 429:
case 2345:
case 1628:
case 2845:
case 3134:
case 2164:
case 299:
case 3529:
case 1339:
case 3516:
case 3148:
case 263:
case 602:
case 1479:
case 2667:
case 3637:
case 90:
case 2625:
case 1848:
case 558:
case 2169:
case 595:
case 1834:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1744225201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,];
var gg_b = "1744225201/";

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
