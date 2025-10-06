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
case 744:
case 3738:
case 445:
case 975:
case 3630:
case 3701:
case 1340:
case 3142:
case 1441:
case 1079:
case 3571:
case 3936:
case 3033:
case 962:
case 1529:
case 269:
case 151:
case 1849:
case 1004:
case 3694:
case 4082:
case 1269:
case 947:
case 4077:
case 1207:
case 3373:
case 1532:
case 89:
case 3547:
case 920:
case 2716:
case 3216:
case 3973:
case 1939:
case 729:
case 2108:
case 2123:
case 828:
case 1414:
case 2030:
case 3266:
case 2386:
case 2804:
case 2049:
case 2471:
case 2297:
case 4035:
case 1922:
case 309:
case 1757:
case 648:
case 2393:
case 32:
case 187:
case 2617:
case 2285:
case 1597:
case 536:
case 3934:
case 1163:
case 3861:
case 293:
case 578:
case 814:
case 367:
case 2984:
case 27:
case 1488:
case 2741:
case 1896:
case 70:
case 3990:
case 3856:
case 4051:
case 1726:
case 2591:
case 2962:
case 3407:
case 2609:
case 1113:
case 3811:
case 1656:
case 761:
case 1006:
case 342:
case 1928:
case 1903:
case 3469:
case 2424:
case 3315:
case 252:
case 745:
case 3148:
case 3524:
case 3214:
case 3732:
case 1350:
case 2777:
case 221:
case 3390:
case 1192:
case 2232:
case 3491:
case 3277:
case 2714:
case 2507:
case 510:
case 591:
case 3105:
case 3334:
case 1644:
case 750:
case 2764:
case 2806:
case 2229:
case 777:
case 338:
case 959:
case 1501:
case 2457:
case 1466:
case 284:
case 275:
case 2955:
case 3409:
case 2057:
case 3134:
case 2607:
case 487:
case 262:
case 318:
case 2902:
case 2184:
case 894:
case 1749:
case 325:
case 2112:
case 1638:
case 1601:
case 3190:
case 3559:
case 3352:
case 1730:
case 1150:
case 1599:
case 3091:
case 247:
case 3474:
case 1128:
case 4006:
case 3801:
case 1276:
case 1913:
case 1016:
case 985:
case 3305:
case 3727:
case 2246:
case 1561:
case 357:
case 3897:
case 220:
case 2574:
case 1857:
case 3657:
case 3007:
case 756:
case 2459:
case 3905:
case 2517:
case 1697:
case 370:
case 590:
case 3746:
case 74:
case 2227:
case 3115:
case 2193:
case 2355:
case 1363:
case 883:
case 1556:
case 2567:
case 516:
case 2816:
case 2302:
case 1511:
case 2691:
case 3019:
case 2509:
case 608:
case 3942:
case 1267:
case 1847:
case 3626:
case 2186:
case 2170:
case 1337:
case 1209:
case 3647:
case 2071:
case 2449:
case 2211:
case 699:
case 1064:
case 3756:
case 3136:
case 4079:
case 422:
case 1014:
case 2841:
case 28:
case 3476:
case 2345:
case 3381:
case 2261:
case 3480:
case 2323:
case 2308:
case 3761:
case 1527:
case 2331:
case 3744:
case 3671:
case 2299:
case 952:
case 921:
case 2706:
case 1629:
case 81:
case 3206:
case 3530:
case 2026:
case 3799:
case 2244:
case 1759:
case 895:
case 1871:
case 3421:
case 2882:
case 1398:
case 3358:
case 2814:
case 3342:
case 3433:
case 381:
case 1479:
case 1632:
case 2877:
case 3832:
case 259:
case 161:
case 3594:
case 984:
case 1035:
case 639:
case 1122:
case 3320:
case 460:
case 704:
case 2858:
case 1250:
case 2842:
case 3314:
case 2425:
case 622:
case 231:
case 1203:
case 2443:
case 2790:
case 3762:
case 809:
case 1518:
case 3712:
case 2540:
case 3234:
case 1568:
case 223:
case 3784:
case 2675:
case 3941:
case 2985:
case 236:
case 656:
case 3037:
case 2154:
case 373:
case 584:
case 1042:
case 3265:
case 3341:
case 1586:
case 1058:
case 3845:
case 1623:
case 1608:
case 3808:
case 3823:
case 1645:
case 1570:
case 3793:
case 2929:
case 296:
case 3179:
case 1753:
case 1887:
case 291:
case 3982:
case 3543:
case 3672:
case 3104:
case 1473:
case 3439:
case 3525:
case 3977:
case 3687:
case 2127:
case 3215:
case 3075:
case 1969:
case 3351:
case 412:
case 1725:
case 3428:
case 1174:
case 192:
case 1391:
case 2060:
case 1907:
case 463:
case 1655:
case 2663:
case 739:
case 838:
case 569:
case 3450:
case 2156:
case 3678:
case 1167:
case 3553:
case 3366:
case 2286:
case 2111:
case 3786:
case 3500:
case 1434:
case 1109:
case 3236:
case 2901:
case 3063:
case 3966:
case 2997:
case 2095:
case 4034:
case 1860:
case 153:
case 1240:
case 1319:
case 2692:
case 916:
case 1512:
case 1222:
case 2338:
case 3660:
case 2805:
case 1584:
case 3610:
case 3951:
case 1369:
case 4090:
case 132:
case 1562:
case 1789:
case 3106:
case 314:
case 1307:
case 3273:
case 799:
case 1810:
case 2503:
case 1612:
case 383:
case 3413:
case 112:
case 1974:
case 931:
case 1684:
case 1169:
case 1917:
case 3306:
case 3884:
case 3812:
case 4005:
case 1298:
case 3862:
case 3258:
case 2720:
case 857:
case 978:
case 3242:
case 802:
case 1065:
case 2956:
case 2101:
case 2742:
case 936:
case 2000:
case 1119:
case 870:
case 2138:
case 2758:
case 3220:
case 2911:
case 1367:
case 453:
case 2563:
case 3166:
case 2311:
case 1502:
case 1787:
case 996:
case 2815:
case 108:
case 432:
case 3893:
case 3600:
case 991:
case 3050:
case 1374:
case 2865:
case 3151:
case 3723:
case 3708:
case 3281:
case 910:
case 2245:
case 2223:
case 719:
case 3578:
case 2781:
case 3116:
case 3003:
case 1452:
case 574:
case 1317:
case 1800:
case 818:
case 2089:
case 881:
case 1545:
case 1670:
case 4081:
case 1980:
case 230:
case 3039:
case 1976:
case 1213:
case 1686:
case 2327:
case 3702:
case 732:
case 2255:
case 645:
case 3135:
case 3022:
case 395:
case 1795:
case 419:
case 1321:
case 3498:
case 3379:
case 575:
case 3643:
case 1710:
case 2472:
case 1889:
case 60:
case 1618:
case 4042:
case 3689:
case 3164:
case 4020:
case 2873:
case 2354:
case 3904:
case 1380:
case 748:
case 3868:
case 666:
case 2946:
case 211:
case 3252:
case 3114:
case 520:
case 2640:
case 1668:
case 2752:
case 3177:
case 2575:
case 2748:
case 3205:
case 2236:
case 3111:
case 2500:
case 3938:
case 995:
case 3397:
case 2553:
case 3286:
case 2366:
case 852:
case 1412:
case 821:
case 1196:
case 91:
case 4093:
case 1484:
case 2802:
case 2450:
case 3663:
case 2855:
case 2351:
case 2092:
case 117:
case 468:
case 2428:
case 2403:
case 2013:
case 2916:
case 3144:
case 3503:
case 3528:
case 87:
case 1289:
case 437:
case 3773:
case 1739:
case 1159:
case 3199:
case 3550:
case 2660:
case 158:
case 4012:
case 3805:
case 3453:
case 580:
case 1652:
case 3301:
case 1493:
case 3268:
case 3400:
case 3852:
case 664:
case 3997:
case 1957:
case 3734:
case 52:
case 3212:
case 1194:
case 1371:
case 215:
case 273:
case 1486:
case 3284:
case 336:
case 3087:
case 2784:
case 29:
case 2941:
case 4068:
case 3540:
case 1470:
case 598:
case 1149:
case 934:
case 1008:
case 1023:
case 3820:
case 2377:
case 1130:
case 672:
case 1573:
case 3539:
case 1728:
case 3425:
case 2314:
case 331:
case 2382:
case 1898:
case 1947:
case 1620:
case 983:
case 1045:
case 665:
case 600:
case 3932:
case 2687:
case 1837:
case 2525:
case 2982:
case 310:
case 571:
case 2439:
case 2104:
case 2914:
case 3146:
case 3715:
case 2964:
case 3929:
case 396:
case 1468:
case 2179:
case 2823:
case 4070:
case 885:
case 1971:
case 538:
case 4086:
case 1183:
case 869:
case 2845:
case 3293:
case 3385:
case 2265:
case 2341:
case 3202:
case 2379:
case 606:
case 2135:
case 2755:
case 295:
case 2498:
case 1949:
case 2587:
case 3185:
case 2702:
case 1068:
case 21:
case 2040:
case 3327:
case 1018:
case 4031:
case 3836:
case 2039:
case 1126:
case 2870:
case 4008:
case 4023:
case 4045:
case 2304:
case 1147:
case 330:
case 3346:
case 3089:
case 1581:
case 601:
case 1822:
case 502:
case 1445:
case 914:
case 3640:
case 557:
case 2177:
case 3132:
case 1330:
case 3752:
case 2868:
case 1431:
case 3043:
case 1840:
case 2114:
case 2248:
case 1408:
case 390:
case 1260:
case 235:
case 3873:
case 3354:
case 2979:
case 2818:
case 2689:
case 3129:
case 1558:
case 3598:
case 1349:
case 1983:
case 1542:
case 1673:
case 2437:
case 915:
case 3138:
case 2220:
case 2463:
case 1828:
case 3742:
case 2510:
case 3000:
case 3650:
case 1850:
case 2242:
case 99:
case 1093:
case 3890:
case 2188:
case 3603:
case 3628:
case 3053:
case 2862:
case 3720:
case 2812:
case 234:
case 654:
case 2306:
case 197:
case 3478:
case 3399:
case 3592:
case 3961:
case 2906:
case 1665:
case 2492:
case 862:
case 2745:
case 294:
case 3999:
case 3361:
case 3245:
case 875:
case 3865:
case 2731:
case 4002:
case 581:
case 458:
case 1737:
case 103:
case 1615:
case 1287:
case 3563:
case 2315:
case 3424:
case 1178:
case 1809:
case 1044:
case 2811:
case 2407:
case 3059:
case 1867:
case 617:
case 2990:
case 2856:
case 3102:
case 3674:
case 59:
case 643:
case 3912:
case 740:
case 7:
case 479:
case 1195:
case 3735:
case 1438:
case 393:
case 515:
case 2419:
case 2241:
case 2365:
case 3312:
case 2844:
case 658:
case 3457:
case 4038:
case 1497:
case 2264:
case 3384:
case 3229:
case 238:
case 326:
case 3764:
case 2067:
case 701:
case 1606:
case 276:
case 727:
case 164:
case 2899:
case 1588:
case 3232:
case 3777:
case 2152:
case 1160:
case 352:
case 1061:
case 2148:
case 3569:
case 2649:
case 3447:
case 189:
case 2854:
case 1027:
case 896:
case 1769:
case 1925:
case 46:
case 4032:
case 1224:
case 369:
case 1707:
case 2694:
case 165:
case 3426:
case 3680:
case 2120:
case 2021:
case 1485:
case 4029:
case 918:
case 3201:
case 2630:
case 3368:
case 891:
case 2142:
case 2158:
case 2738:
case 3986:
case 3083:
case 810:
case 1880:
case 3676:
case 3094:
case 3766:
case 209:
case 1172:
case 3804:
case 3386:
case 15:
case 3471:
case 2846:
case 3879:
case 3918:
case 836:
case 1833:
case 3751:
case 1791:
case 3030:
case 2526:
case 970:
case 2973:
case 3108:
case 3123:
case 2683:
case 3145:
case 2181:
case 957:
case 2080:
case 779:
case 902:
case 2251:
case 1343:
case 514:
case 3633:
case 1679:
case 1774:
case 583:
case 4027:
case 3308:
case 3323:
case 2761:
case 1635:
case 465:
case 3345:
case 3261:
case 2381:
case 534:
case 3430:
case 3841:
case 4046:
case 38:
case 127:
case 101:
case 1143:
case 1029:
case 1767:
case 2756:
case 2136:
case 967:
case 2920:
case 3449:
case 3211:
case 1709:
case 890:
case 1454:
case 3186:
case 2711:
case 2626:
case 92:
case 2942:
case 4054:
case 2320:
case 2832:
case 938:
case 155:
case 1614:
case 2342:
case 1085:
case 2433:
case 1677:
case 3168:
case 45:
case 1:
case 2530:
case 2799:
case 3908:
case 2173:
case 224:
case 2206:
case 2829:
case 971:
case 441:
case 3576:
case 3118:
case 1446:
case 1664:
case 1427:
case 2671:
case 2744:
case 374:
case 3945:
case 1259:
case 1780:
case 2305:
case 347:
case 154:
case 1688:
case 2801:
case 2417:
case 3619:
case 2352:
case 2348:
case 75:
case 3162:
case 1807:
case 1294:
case 225:
case 1310:
case 3112:
case 3254:
case 1456:
case 741:
case 3496:
case 3669:
case 1097:
case 313:
case 1249:
case 2754:
case 179:
case 3607:
case 1100:
case 3691:
case 1910:
case 980:
case 3355:
case 464:
case 1395:
case 765:
case 3851:
case 1733:
case 535:
case 3193:
case 2746:
case 3227:
case 1378:
case 3704:
case 3517:
case 1499:
case 270:
case 1666:
case 2204:
case 2897:
case 320:
case 2727:
case 2069:
case 2952:
case 202:
case 637:
case 1704:
case 1459:
case 3378:
case 421:
case 2561:
case 2406:
case 244:
case 1574:
case 2857:
case 3444:
case 3038:
case 2783:
case 905:
case 3910:
case 426:
case 1302:
case 2511:
case 1691:
case 1509:
case 3651:
case 1851:
case 2088:
case 3891:
case 1193:
case 1355:
case 433:
case 3283:
case 769:
case 3395:
case 3616:
case 162:
case 3456:
case 94:
case 1184:
case 1669:
case 1496:
case 2749:
case 1254:
case 3097:
case 2066:
case 3249:
case 3411:
case 1955:
case 1057:
case 1607:
case 3995:
case 837:
case 3869:
case 2824:
case 147:
case 354:
case 2103:
case 3230:
case 688:
case 2913:
case 3776:
case 2638:
case 2280:
case 2601:
case 1888:
case 2599:
case 2150:
case 4030:
case 1576:
case 3446:
case 1118:
case 3:
case 1923:
case 1244:
case 2139:
case 2404:
case 1047:
case 1299:
case 174:
case 793:
case 3259:
case 266:
case 1706:
case 611:
case 2629:
case 3427:
case 3664:
case 2554:
case 355:
case 2937:
case 3972:
case 2035:
case 1483:
case 2122:
case 1882:
case 4049:
case 1814:
case 3987:
case 2140:
case 2479:
case 20:
case 1168:
case 2632:
case 3677:
case 1170:
case 3372:
case 3579:
case 1071:
case 1449:
case 2796:
case 1521:
case 2064:
case 987:
case 3387:
case 3296:
case 3454:
case 2998:
case 3709:
case 4083:
case 1308:
case 784:
case 2685:
case 36:
case 3641:
case 2975:
case 726:
case 277:
case 1331:
case 2274:
case 3717:
case 3504:
case 327:
case 18:
case 3143:
case 3635:
case 2082:
case 469:
case 1345:
case 630:
case 1261:
case 532:
case 3821:
case 1108:
case 341:
case 762:
case 1751:
case 3325:
case 2414:
case 3791:
case 691:
case 2291:
case 3679:
case 474:
case 610:
case 1716:
case 944:
case 205:
case 1766:
case 260:
case 2757:
case 3054:
case 2137:
case 3604:
case 553:
case 3535:
case 696:
case 459:
case 3187:
case 2940:
case 2627:
case 3541:
case 1049:
case 1471:
case 636:
case 256:
case 3876:
case 2322:
case 929:
case 2529:
case 1970:
case 1986:
case 2435:
case 1368:
case 2340:
case 3027:
case 2175:
case 1318:
case 3925:
case 2207:
case 185:
case 2532:
case 3577:
case 1447:
case 169:
case 2654:
case 251:
case 3707:
case 2849:
case 365:
case 300:
case 2269:
case 3943:
case 3582:
case 631:
case 2451:
case 1782:
case 3160:
case 420:
case 152:
case 2350:
case 1777:
case 4024:
case 2538:
case 961:
case 3110:
case 1312:
case 2699:
case 2466:
case 3497:
case 184:
case 3271:
case 364:
case 2771:
case 3588:
case 1764:
case 3953:
case 3606:
case 1912:
case 1984:
case 462:
case 2488:
case 1741:
case 1393:
case 3566:
case 3353:
case 3195:
case 413:
case 475:
case 2163:
case 193:
case 204:
case 2656:
case 759:
case 2903:
case 2928:
case 3516:
case 3178:
case 3867:
case 2950:
case 2896:
case 2726:
case 3247:
case 1059:
case 3272:
case 2309:
case 2787:
case 3084:
case 208:
case 854:
case 2367:
case 1356:
case 731:
case 2555:
case 2772:
case 2034:
case 1223:
case 1460:
case 1944:
case 1781:
case 2448:
case 2452:
case 4078:
case 1513:
case 2693:
case 2374:
case 2853:
case 2405:
case 3062:
case 620:
case 1361:
case 3505:
case 188:
case 263:
case 550:
case 3634:
case 2107:
case 1399:
case 1834:
case 577:
case 2974:
case 397:
case 1478:
case 3124:
case 2169:
case 662:
case 1650:
case 2119:
case 3798:
case 1495:
case 1138:
case 1758:
case 919:
case 1911:
case 613:
case 710:
case 2298:
case 3093:
case 1890:
case 2065:
case 3402:
case 3520:
case 496:
case 659:
case 86:
case 1129:
case 1487:
case 3394:
case 1873:
case 3839:
case 3210:
case 3086:
case 1639:
case 2710:
case 801:
case 2618:
case 953:
case 806:
case 3792:
case 1927:
case 1640:
case 1025:
case 1132:
case 544:
case 3330:
case 1575:
case 3408:
case 190:
case 1622:
case 410:
case 1705:
case 2380:
case 3431:
case 111:
case 2073:
case 2976:
case 3126:
case 855:
case 1327:
case 3930:
case 2778:
case 3636:
case 68:
case 3713:
case 3147:
case 2980:
case 130:
case 3763:
case 2458:
case 2795:
case 299:
case 2321:
case 436:
case 1202:
case 1537:
case 2825:
case 2843:
case 478:
case 4087:
case 423:
case 3949:
case 3295:
case 889:
case 3681:
case 2020:
case 3971:
case 908:
case 872:
case 1929:
case 788:
case 1765:
case 416:
case 3200:
case 1293:
case 2631:
case 3253:
case 1385:
case 800:
case 865:
case 2058:
case 3183:
case 2608:
case 3837:
case 2872:
case 1146:
case 411:
case 3347:
case 490:
case 110:
case 2473:
case 3750:
case 3130:
case 1443:
case 1539:
case 1790:
case 3573:
case 3658:
case 3926:
case 3008:
case 3023:
case 963:
case 2518:
case 2176:
case 669:
case 3620:
case 430:
case 3947:
case 2180:
case 3045:
case 2081:
case 1858:
case 3728:
case 1842:
case 2250:
case 3703:
case 1425:
case 131:
case 1284:
case 1522:
case 3875:
case 841:
case 1072:
case 587:
case 1734:
case 1154:
case 3371:
case 3486:
case 3149:
case 123:
case 1675:
case 178:
case 1453:
case 3002:
case 3652:
case 1301:
case 626:
case 3493:
case 1692:
case 1338:
case 358:
case 1805:
case 3648:
case 684:
case 1997:
case 3605:
case 2860:
case 2240:
case 1528:
case 3739:
case 3159:
case 3324:
case 2369:
case 3289:
case 621:
case 2562:
case 2907:
case 3515:
case 522:
case 1663:
case 2005:
case 716:
case 2743:
case 488:
case 3225:
case 2117:
case 3243:
case 3924:
case 2725:
case 2602:
case 2052:
case 2174:
case 2048:
case 864:
case 1111:
case 999:
case 343:
case 2109:
case 4000:
case 67:
case 1901:
case 1736:
case 1156:
case 711:
case 248:
case 4053:
case 556:
case 3565:
case 2593:
case 54:
case 3357:
case 693:
case 2431:
case 2840:
case 1252:
case 1114:
case 2408:
case 2423:
case 1182:
case 3380:
case 2260:
case 3481:
case 2822:
case 2445:
case 3760:
case 4075:
case 2792:
case 1177:
case 3668:
case 2330:
case 43:
case 681:
case 3618:
case 850:
case 2983:
case 2673:
case 1437:
case 2394:
case 2839:
case 339:
case 958:
case 3036:
case 3933:
case 649:
case 2949:
case 2295:
case 49:
case 866:
case 579:
case 428:
case 1379:
case 3825:
case 1643:
case 1135:
case 3458:
case 714:
case 4037:
case 943:
case 2713:
case 3670:
case 554:
case 80:
case 3778:
case 2636:
case 917:
case 2278:
case 2018:
case 861:
case 3523:
case 3073:
case 1039:
case 3213:
case 1870:
case 657:
case 2062:
case 1723:
case 3374:
case 3191:
case 1050:
case 540:
case 79:
case 237:
case 1906:
case 1653:
case 2665:
case 1492:
case 3693:
case 829:
case 1745:
case 1116:
case 670:
case 715:
case 3448:
case 2737:
case 2157:
case 1166:
case 2615:
case 1595:
case 3555:
case 2084:
case 2850:
case 1242:
case 3967:
case 2093:
case 1188:
case 3065:
case 3298:
case 2798:
case 3909:
case 625:
case 3662:
case 1220:
case 2828:
case 1510:
case 312:
case 3974:
case 2124:
case 3684:
case 73:
case 2548:
case 3169:
case 2359:
case 183:
case 56:
case 527:
case 501:
case 3107:
case 3917:
case 2505:
case 1306:
case 3275:
case 3015:
case 2324:
case 887:
case 1718:
case 3369:
case 4050:
case 2590:
case 541:
case 114:
case 494:
case 3239:
case 3810:
case 3789:
case 4003:
case 1106:
case 1388:
case 2534:
case 676:
case 2957:
case 546:
case 2648:
case 1768:
case 2493:
case 3512:
case 2740:
case 1366:
case 3593:
case 1988:
case 2196:
case 2484:
case 1678:
case 3878:
case 3919:
case 698:
case 1786:
case 1500:
case 3048:
case 572:
case 3895:
case 3969:
case 2243:
case 589:
case 1092:
case 392:
case 3052:
case 500:
case 3743:
case 1802:
case 2225:
case 3005:
case 1982:
case 1439:
case 1104:
case 3473:
case 1914:
case 937:
case 1977:
case 1687:
case 1075:
case 2326:
case 3872:
case 1525:
case 2837:
case 1098:
case 3608:
case 3623:
case 1845:
case 3042:
case 1440:
case 1964:
case 2468:
case 564:
case 1831:
case 3133:
case 2200:
case 1179:
case 1823:
case 3121:
case 2971:
case 1784:
case 4040:
case 3436:
case 1037:
case 319:
case 2371:
case 794:
case 495:
case 2486:
case 4022:
case 1364:
case 2875:
case 128:
case 997:
case 3250:
case 1314:
case 1290:
case 2947:
case 3180:
case 2045:
case 3081:
case 1762:
case 2658:
case 2023:
case 4039:
case 3176:
case 3228:
case 2750:
case 2130:
case 2642:
case 2987:
case 3140:
case 1342:
case 2085:
case 30:
case 480:
case 3398:
case 964:
case 635:
case 2972:
case 3035:
case 1832:
case 3554:
case 1594:
case 366:
case 3629:
case 72:
case 2427:
case 1671:
case 4080:
case 899:
case 1530:
case 2:
case 240:
case 1799:
case 537:
case 3404:
case 1173:
case 124:
case 767:
case 798:
case 2446:
case 3082:
case 3546:
case 3274:
case 350:
case 3014:
case 2717:
case 3685:
case 3217:
case 3077:
case 2641:
case 738:
case 839:
case 3527:
case 3998:
case 2709:
case 2454:
case 1626:
case 1711:
case 345:
case 3267:
case 1942:
case 2387:
case 1583:
case 2029:
case 3796:
case 3064:
case 771:
case 1756:
case 4033:
case 206:
case 3209:
case 2372:
case 3826:
case 695:
case 1647:
case 2579:
case 2283:
case 3556:
case 2395:
case 2721:
case 2153:
case 2733:
case 476:
case 1165:
case 946:
case 2891:
case 4067:
case 812:
case 1279:
case 2651:
case 0:
case 863:
case 2910:
case 157:
case 1204:
case 1897:
case 1948:
case 344:
case 2444:
case 2960:
case 3857:
case 1727:
case 3992:
case 1069:
case 1952:
case 3406:
case 4074:
case 1746:
case 471:
case 941:
case 1657:
case 3313:
case 1007:
case 1905:
case 170:
case 694:
case 1190:
case 3392:
case 1091:
case 3599:
case 3150:
case 965:
case 900:
case 3280:
case 780:
case 1838:
case 3016:
case 2461:
case 2978:
case 2688:
case 1474:
case 3544:
case 2869:
case 3824:
case 282:
case 3794:
case 2249:
case 2411:
case 3066:
case 1754:
case 1134:
case 279:
case 2995:
case 2807:
case 125:
case 329:
case 1624:
case 892:
case 1965:
case 2056:
case 2953:
case 2606:
case 176:
case 264:
case 1334:
case 1899:
case 3771:
case 3859:
case 2588:
case 2110:
case 1659:
case 1009:
case 2011:
case 2271:
case 2497:
case 1264:
case 955:
case 138:
case 4019:
case 1214:
case 1074:
case 1152:
case 3350:
case 1390:
case 3192:
case 1282:
case 2160:
case 3416:
case 1105:
case 9:
case 1017:
case 3451:
case 171:
case 2099:
case 2551:
case 1407:
case 3950:
case 927:
case 3896:
case 901:
case 1990:
case 781:
case 3656:
case 3006:
case 142:
case 3928:
case 1469:
case 3747:
case 2044:
case 2226:
case 304:
case 1811:
case 2195:
case 3163:
case 1557:
case 2401:
case 832:
case 1419:
case 2566:
case 12:
case 1241:
case 1365:
case 418:
case 1785:
case 198:
case 3661:
case 724:
case 1235:
case 2541:
case 1266:
case 3464:
case 2429:
case 1336:
case 3646:
case 3922:
case 1797:
case 305:
case 360:
case 3757:
case 3137:
case 109:
case 2172:
case 2604:
case 1181:
case 1080:
case 2343:
case 2432:
case 486:
case 2833:
case 241:
case 718:
case 3414:
case 424:
case 3482:
case 2821:
case 819:
case 1683:
case 2389:
case 2046:
case 2224:
case 2582:
case 322:
case 3004:
case 1694:
case 265:
case 1373:
case 3207:
case 3894:
case 2577:
case 1649:
case 3532:
case 2027:
case 3175:
case 2769:
case 272:
case 2925:
case 1288:
case 1630:
case 982:
case 3340:
case 1142:
case 1158:
case 3435:
case 757:
case 2880:
case 356:
case 615:
case 1021:
case 3219:
case 34:
case 1033:
case 2485:
case 3079:
case 3830:
case 628:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1759788002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,];
var gg_b = "1759788002/";

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
