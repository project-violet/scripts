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
case 475:
case 1272:
case 855:
case 324:
case 2138:
case 393:
case 863:
case 3240:
case 4051:
case 1986:
case 3930:
case 2843:
case 2196:
case 4079:
case 1974:
case 3722:
case 3100:
case 3193:
case 1388:
case 339:
case 2301:
case 2444:
case 1622:
case 808:
case 2189:
case 3110:
case 2267:
case 632:
case 1981:
case 3975:
case 3303:
case 3390:
case 310:
case 996:
case 2908:
case 3958:
case 2646:
case 3467:
case 3942:
case 1067:
case 3232:
case 877:
case 2353:
case 197:
case 2127:
case 24:
case 3351:
case 793:
case 3244:
case 2641:
case 1868:
case 2440:
case 409:
case 3187:
case 3269:
case 3104:
case 710:
case 2072:
case 1245:
case 1882:
case 1743:
case 3643:
case 739:
case 3114:
case 711:
case 3163:
case 3945:
case 3235:
case 1102:
case 3657:
case 1633:
case 3620:
case 3421:
case 336:
case 525:
case 541:
case 892:
case 2423:
case 2297:
case 2030:
case 2486:
case 3360:
case 2161:
case 999:
case 3807:
case 1969:
case 788:
case 4064:
case 172:
case 2824:
case 1418:
case 4049:
case 1083:
case 1234:
case 2481:
case 2075:
case 2347:
case 3871:
case 933:
case 2499:
case 1408:
case 3859:
case 1719:
case 3281:
case 2058:
case 388:
case 1577:
case 406:
case 3299:
case 1724:
case 247:
case 4060:
case 3880:
case 614:
case 3528:
case 2539:
case 3364:
case 2283:
case 87:
case 2226:
case 2034:
case 45:
case 1230:
case 2857:
case 727:
case 2820:
case 645:
case 3349:
case 1625:
case 1831:
case 1365:
case 874:
case 621:
case 2676:
case 2562:
case 194:
case 1612:
case 3939:
case 4070:
case 630:
case 2321:
case 1567:
case 133:
case 3663:
case 1763:
case 1265:
case 1133:
case 3702:
case 58:
case 2180:
case 3119:
case 4035:
case 1375:
case 3381:
case 2666:
case 2383:
case 726:
case 584:
case 972:
case 3109:
case 3988:
case 459:
case 879:
case 218:
case 2171:
case 664:
case 2464:
case 1334:
case 4074:
case 3995:
case 3370:
case 923:
case 3124:
case 712:
case 994:
case 1342:
case 326:
case 2065:
case 2184:
case 2107:
case 3861:
case 2863:
case 478:
case 1125:
case 99:
case 2117:
case 3369:
case 3028:
case 1016:
case 1960:
case 3992:
case 2534:
case 40:
case 648:
case 196:
case 2542:
case 1006:
case 2558:
case 3256:
case 3477:
case 876:
case 1345:
case 2638:
case 3629:
case 2253:
case 170:
case 2755:
case 2689:
case 3610:
case 3411:
case 3850:
case 1710:
case 890:
case 2403:
case 1597:
case 1001:
case 3344:
case 249:
case 1793:
case 1700:
case 616:
case 1122:
case 1878:
case 542:
case 673:
case 1615:
case 2530:
case 2201:
case 329:
case 2810:
case 2650:
case 2095:
case 33:
case 3213:
case 1855:
case 3715:
case 3891:
case 280:
case 1053:
case 2893:
case 1521:
case 2367:
case 253:
case 1262:
case 1437:
case 281:
case 3203:
case 997:
case 2494:
case 785:
case 2206:
case 3508:
case 4032:
case 3143:
case 3965:
case 4044:
case 1949:
case 1239:
case 528:
case 1704:
case 3340:
case 3604:
case 3592:
case 4016:
case 2244:
case 1560:
case 3127:
case 10:
case 1822:
case 686:
case 496:
case 2958:
case 2467:
case 2942:
case 156:
case 2232:
case 4011:
case 850:
case 2114:
case 470:
case 3072:
case 471:
case 3440:
case 1997:
case 3469:
case 3782:
case 3196:
case 1328:
case 3316:
case 2240:
case 1564:
case 715:
case 1682:
case 638:
case 224:
case 2129:
case 293:
case 3306:
case 566:
case 3189:
case 2390:
case 2303:
case 1032:
case 3432:
case 211:
case 744:
case 1044:
case 3444:
case 1983:
case 22:
case 2722:
case 2100:
case 2313:
case 532:
case 3283:
case 3226:
case 703:
case 1434:
case 1759:
case 2880:
case 3470:
case 3539:
case 288:
case 1208:
case 433:
case 107:
case 347:
case 2624:
case 1458:
case 1967:
case 3221:
case 1776:
case 3562:
case 545:
case 1590:
case 1784:
case 4047:
case 382:
case 1707:
case 51:
case 3820:
case 3617:
case 1833:
case 1513:
case 2349:
case 689:
case 499:
case 2725:
case 2223:
case 1717:
case 3857:
case 159:
case 625:
case 3595:
case 747:
case 1074:
case 3474:
case 2884:
case 3731:
case 262:
case 3423:
case 1631:
case 2876:
case 640:
case 2360:
case 303:
case 2817:
case 2620:
case 2421:
case 236:
case 1825:
case 954:
case 2163:
case 2945:
case 2733:
case 2657:
case 3499:
case 1556:
case 1099:
case 3166:
case 906:
case 1780:
case 3736:
case 3075:
case 1081:
case 3680:
case 1636:
case 1475:
case 3347:
case 2871:
case 2426:
case 898:
case 368:
case 95:
case 3798:
case 178:
case 2270:
case 782:
case 3824:
case 3247:
case 2866:
case 2995:
case 746:
case 3464:
case 3397:
case 1544:
case 3117:
case 3863:
case 4026:
case 3449:
case 1049:
case 4083:
case 718:
case 1652:
case 3107:
case 2861:
case 3748:
case 3176:
case 1812:
case 1532:
case 226:
case 530:
case 2702:
case 1977:
case 2120:
case 1906:
case 2663:
case 346:
case 2386:
case 3092:
case 68:
case 1492:
case 2323:
case 49:
case 531:
case 3460:
case 519:
case 978:
case 2712:
case 15:
case 2939:
case 1131:
case 801:
case 1540:
case 2264:
case 3383:
case 1318:
case 1901:
case 3326:
case 1198:
case 800:
case 154:
case 2381:
case 2962:
case 3666:
case 1308:
case 494:
case 3572:
case 943:
case 2399:
case 684:
case 3180:
case 423:
case 1678:
case 3367:
case 353:
case 381:
case 2203:
case 3146:
case 3800:
case 3211:
case 3778:
case 3095:
case 23:
case 1495:
case 1727:
case 522:
case 2715:
case 2891:
case 3530:
case 229:
case 3201:
case 3627:
case 3810:
case 1750:
case 2889:
case 90:
case 2518:
case 2687:
case 3216:
case 3277:
case 3456:
case 956:
case 628:
case 567:
case 234:
case 749:
case 1094:
case 3494:
case 2854:
case 2477:
case 780:
case 3638:
case 2294:
case 5:
case 3542:
case 2406:
case 3558:
case 497:
case 781:
case 1754:
case 2992:
case 3534:
case 1796:
case 1182:
case 2416:
case 2028:
case 2251:
case 1488:
case 3088:
case 285:
case 2344:
case 349:
case 3062:
case 573:
case 1462:
case 1789:
case 2850:
case 260:
case 1090:
case 1655:
case 3403:
case 516:
case 1237:
case 3253:
case 1791:
case 1815:
case 3755:
case 1535:
case 2411:
case 2827:
case 1268:
case 4091:
case 3443:
case 4089:
case 2156:
case 2772:
case 1907:
case 2441:
case 1282:
case 1845:
case 479:
case 2387:
case 2925:
case 952:
case 26:
case 3350:
case 1971:
case 3985:
case 3832:
case 4054:
case 3667:
case 4038:
case 3502:
case 1563:
case 807:
case 3844:
case 38:
case 3391:
case 1355:
case 3936:
case 2552:
case 3389:
case 2310:
case 2548:
case 3101:
case 219:
case 878:
case 2867:
case 231:
case 2113:
case 198:
case 2300:
case 3116:
case 3931:
case 901:
case 384:
case 4027:
case 735:
case 3840:
case 3106:
case 2068:
case 618:
case 900:
case 2329:
case 3338:
case 3177:
case 843:
case 3823:
case 4066:
case 680:
case 1510:
case 2476:
case 1352:
case 490:
case 2407:
case 150:
case 2484:
case 995:
case 222:
case 653:
case 1231:
case 491:
case 53:
case 1593:
case 665:
case 1425:
case 3025:
case 1797:
case 3881:
case 4061:
case 2471:
case 3899:
case 328:
case 3280:
case 413:
case 3424:
case 742:
case 1946:
case 267:
case 534:
case 2036:
case 3870:
case 3708:
case 3366:
case 3147:
case 1834:
case 2273:
case 1009:
case 3409:
case 2098:
case 3271:
case 1726:
case 1842:
case 1783:
case 3683:
case 2922:
case 248:
case 3626:
case 1618:
case 1587:
case 3515:
case 561:
case 342:
case 102:
case 3982:
case 2674:
case 560:
case 216:
case 1721:
case 3420:
case 3207:
case 3621:
case 649:
case 3284:
case 2363:
case 2649:
case 3197:
case 615:
case 3261:
case 3522:
case 3307:
case 738:
case 2263:
case 1892:
case 64:
case 4080:
case 3376:
case 2052:
case 2568:
case 195:
case 463:
case 875:
case 2324:
case 3978:
case 3266:
case 455:
case 2664:
case 644:
case 2582:
case 951:
case 2915:
case 1385:
case 2847:
case 1950:
case 4017:
case 902:
case 3183:
case 3126:
case 1118:
case 593:
case 3864:
case 2181:
case 4007:
case 4076:
case 1336:
case 1543:
case 3463:
case 510:
case 266:
case 3849:
case 1938:
case 477:
case 4059:
case 3012:
case 2123:
case 1331:
case 4071:
case 2174:
case 2598:
case 1509:
case 2140:
case 2877:
case 3341:
case 740:
case 3487:
case 2343:
case 1839:
case 2816:
case 3414:
case 3948:
case 2656:
case 1014:
case 741:
case 2229:
case 3238:
case 3653:
case 3167:
case 1557:
case 3346:
case 2078:
case 1520:
case 1753:
case 1637:
case 152:
case 2679:
case 2531:
case 21:
case 2811:
case 2200:
case 2293:
case 2427:
case 682:
case 2450:
case 492:
case 3803:
case 3890:
case 221:
case 603:
case 3400:
case 3601:
case 1093:
case 1000:
case 3250:
case 2144:
case 101:
case 536:
case 2132:
case 325:
case 2762:
case 2489:
case 3410:
case 1010:
case 3611:
case 474:
case 1895:
case 1711:
case 3851:
case 1966:
case 340:
case 2690:
case 2055:
case 1706:
case 3429:
case 3616:
case 2454:
case 1628:
case 85:
case 2204:
case 3856:
case 2739:
case 2169:
case 2287:
case 3113:
case 1188:
case 1744:
case 2998:
case 331:
case 4004:
case 1732:
case 3103:
case 3190:
case 546:
case 3552:
case 3310:
case 612:
case 3548:
case 1162:
case 2111:
case 4014:
case 2391:
case 3632:
case 2936:
case 1919:
case 3243:
case 2177:
case 3933:
case 2840:
case 2106:
case 1468:
case 76:
case 1645:
case 284:
case 872:
case 3669:
case 1139:
case 2241:
case 2931:
case 192:
case 3925:
case 4093:
case 1740:
case 3304:
case 3387:
case 2869:
case 2443:
case 905:
case 823:
case 1566:
case 3314:
case 174:
case 719:
case 1973:
case 235:
case 1924:
case 2502:
case 3446:
case 2153:
case 1315:
case 2327:
case 17:
case 1195:
case 1222:
case 2512:
case 2985:
case 3922:
case 108:
case 348:
case 2259:
case 1498:
case 3098:
case 2718:
case 3699:
case 2147:
case 976:
case 3681:
case 3036:
case 3480:
case 1436:
case 1675:
case 2870:
case 913:
case 3224:
case 2708:
case 2366:
case 2420:
case 495:
case 3578:
case 163:
case 2033:
case 1302:
case 2284:
case 3363:
case 2505:
case 155:
case 373:
case 661:
case 2968:
case 767:
case 3674:
case 1550:
case 2217:
case 3160:
case 1723:
case 3730:
case 1786:
case 1431:
case 1630:
case 3686:
case 991:
case 2982:
case 3623:
case 660:
case 3821:
case 2025:
case 2697:
case 322:
case 1007:
case 1735:
case 1084:
case 3484:
case 1943:
case 1165:
case 2823:
case 581:
case 1076:
case 1589:
case 3257:
case 3758:
case 4063:
case 3826:
case 3742:
case 3883:
case 2473:
case 897:
case 1538:
case 3219:
case 177:
case 1658:
case 634:
case 2899:
case 228:
case 1059:
case 3459:
case 3734:
case 3209:
case 716:
case 3471:
case 1071:
case 3670:
case 2380:
case 2955:
case 190:
case 1066:
case 3466:
case 963:
case 450:
case 870:
case 3181:
case 2126:
case 624:
case 238:
case 451:
case 1541:
case 693:
case 332:
case 1692:
case 3174:
case 1760:
case 908:
case 610:
case 1130:
case 3123:
case 1929:
case 176:
case 4024:
case 113:
case 1546:
case 1333:
case 4073:
case 3320:
case 2463:
case 1665:
case 1448:
case 1914:
case 2376:
case 3052:
case 2307:
case 3135:
case 3765:
case 2384:
case 54:
case 2522:
case 3649:
case 2197:
case 286:
case 3847:
case 1764:
case 766:
case 3170:
case 4057:
case 317:
case 2978:
case 2266:
case 3568:
case 3905:
case 544:
case 3373:
case 1507:
case 662:
case 240:
case 3491:
case 1091:
case 3603:
case 1790:
case 1703:
case 3132:
case 2879:
case 3762:
case 503:
case 1576:
case 3489:
case 1089:
case 2611:
case 2250:
case 179:
case 714:
case 1517:
case 3144:
case 992:
case 1837:
case 1713:
case 2227:
case 369:
case 2601:
case 1322:
case 3739:
case 2856:
case 1096:
case 3496:
case 3287:
case 1639:
case 1054:
case 1571:
case 627:
case 2677:
case 721:
case 3438:
case 2429:
case 1963:
case 3902:
case 833:
case 2606:
case 2414:
case 2948:
case 3656:
case 2952:
case 2238:
case 3536:
case 1580:
case 3343:
case 547:
case 3816:
case 1172:
case 158:
case 3877:
case 2487:
case 2296:
case 3598:
case 498:
case 97:
case 3806:
case 3140:
case 2254:
case 1050:
case 2890:
case 1779:
case 321:
case 3679:
case 1027:
case 3293:
case 3200:
case 3427:
case 2346:
case 2533:
case 1478:
case 3078:
case 320:
case 2291:
case 582:
case 345:
case 105:
case 2653:
case 2960:
case 1814:
case 1534:
case 1696:
case 508:
case 3439:
case 1654:
case 2016:
case 1039:
case 2428:
case 1804:
case 357:
case 1887:
case 3738:
case 1542:
case 3168:
case 3947:
case 3462:
case 2710:
case 3090:
case 3003:
case 1403:
case 1490:
case 555:
case 1253:
case 3815:
case 1755:
case 1689:
case 2011:
case 2793:
case 2295:
case 3488:
case 3013:
case 1413:
case 2597:
case 838:
case 309:
case 149:
case 3574:
case 1095:
case 3495:
case 180:
case 2288:
case 1479:
case 2615:
case 3586:
case 3523:
case 1201:
case 650:
case 3750:
case 3678:
case 1367:
case 153:
case 181:
case 2053:
case 2605:
case 944:
case 683:
case 1146:
case 1893:
case 1211:
case 1277:
case 1456:
case 2372:
case 915:
case 1575:
case 3094:
case 709:
case 1494:
case 410:
case 2949:
case 1216:
case 1141:
case 411:
case 2704:
case 3492:
case 1661:
case 3060:
case 1460:
case 2848:
case 2852:
case 2612:
case 35:
case 1928:
case 3761:
case 3131:
case 2763:
case 2133:
case 3977:
case 1321:
case 2567:
case 488:
case 698:
case 146:
case 2990:
case 2903:
case 2047:
case 1666:
case 3766:
case 3308:
case 1572:
case 1180:
case 825:
case 592:
case 2913:
case 118:
case 1383:
case 1159:
case 3569:
case 2951:
case 1171:
case 3185:
case 2979:
case 2334:
case 1937:
case 1247:
case 1545:
case 75:
case 2956:
case 3648:
case 3812:
case 1752:
case 1176:
case 4008:
case 2994:
case 1397:
case 2292:
case 3544:
case 1117:
case 3802:
case 57:
case 1449:
case 3049:
case 2633:
case 437:
case 2757:
case 2021:
case 2553:
case 2720:
case 2102:
case 1161:
case 3074:
case 3551:
case 1474:
case 272:
case 1297:
case 1030:
case 2418:
case 2944:
case 168:
case 2234:
case 378:
case 1499:
case 426:
case 3099:
case 3780:
case 2719:
case 1736:
case 3081:
case 3636:
case 2242:
case 2258:
case 835:
case 307:
case 147:
case 2773:
case 2898:
case 1042:
case 2506:
case 3442:
case 1283:
case 3218:
case 1785:
case 3771:
case 743:
case 1034:
case 3434:
case 2836:
case 1671:
case 3070:
case 1470:
case 2516:
case 558:
case 1617:
case 3513:
case 2625:
case 1588:
case 2230:
case 3717:
case 3152:
case 1607:
case 3148:
case 652:
case 505:
case 3590:
case 778:
case 2831:
case 2365:
case 2511:
case 1435:
case 1306:
case 1377:
case 4037:
case 3445:
case 429:
case 1843:
case 3328:
case 949:
case 3564:
case 1154:
case 591:
case 2923:
case 2986:
case 1301:
case 704:
case 1444:
case 3983:
case 2388:
case 1565:
case 2999:
case 513:
case 1432:
case 1353:
case 3178:
case 3822:
case 3746:
case 1646:
case 2067:
case 115:
case 4028:
case 828:
case 3560:
case 1127:
case 14:
case 30:
case 2115:
case 3741:
case 485:
case 695:
case 1641:
case 980:
case 3997:
case 965:
case 304:
case 2547:
case 1072:
case 2245:
case 2882:
case 981:
case 3053:
case 3605:
case 2678:
case 3262:
case 4045:
case 1290:
case 1203:
case 817:
case 3615:
case 2586:
case 2079:
case 129:
case 583:
case 796:
case 3964:
case 2750:
case 1889:
case 2051:
case 2495:
case 1213:
case 3855:
case 1715:
case 3288:
case 3704:
case 1340:
case 3583:
case 1838:
case 134:
case 3714:
case 1854:
case 1965:
case 3729:
case 1294:
case 2738:
case 608:
case 396:
case 866:
case 2168:
case 3006:
case 1256:
case 1477:
case 257:
case 1629:
case 2796:
case 911:
case 2182:
case 1416:
case 2439:
case 2570:
case 3428:
case 2754:
case 3960:
case 1992:
case 44:
case 2805:
case 185:
case 3001:
case 1693:
case 209:
case 655:
case 1251:
case 3295:
case 161:
case 2013:
case 924:
case 370:
case 2815:
case 3011:
case 444:
case 993:
case 2462:
case 2789:
case 3710:
case 1850:
case 2003:
case 2655:
case 2237:
case 137:
case 845:
case 1173:
case 3342:
case 2185:
case 2064:
case 81:
case 821:
case 1866:
case 1995:
case 3951:
case 1370:
case 2049:
case 2544:
case 126:
case 814:
case 2465:
case 1335:
case 3567:
case 333:
case 1157:
case 1663:
case 927:
case 3133:
case 1702:
case 1120:
case 4034:
case 25:
case 1939:
case 2761:
case 112:
case 1249:
case 1386:
case 2060:
case 3848:
case 2540:
case 1264:
case 399:
case 2198:
case 1988:
case 2766:
case 2911:
case 2136:
case 1119:
case 3990:
case 1381:
case 1447:
case 1962:
case 3047:
case 482:
case 2759:
case 2070:
case 4092:
case 2685:
case 3516:
case 39:
case 86:
case 1364:
case 2218:
case 2434:
case 3773:
case 3275:
case 2967:
case 3506:
case 1299:
case 3724:
case 207:
case 1673:
case 2784:
case 3831:
case 1972:
case 2035:
case 2707:
case 2776:
case 323:
case 864:
case 3230:
case 1725:
case 1223:
case 1497:
case 418:
case 2717:
case 3940:
case 1274:
case 1349:
case 3625:
case 2023:
case 501:
case 2086:
case 2430:
case 2579:
case 1807:
case 2074:
case 3969:
case 1163:
case 79:
case 1235:
case 3102:
case 3757:
case 1620:
case 3021:
case 2825:
case 1537:
case 2594:
case 1619:
case 2475:
case 2636:
case 4065:
case 3242:
case 3885:
case 3258:
case 2099:
case 1008:
case 3408:
case 127:
case 831:
case 278:
case 819:
case 3026:
case 3083:
case 3234:
case 723:
case 3395:
case 20:
case 3115:
case 1934:
case 1379:
case 1244:
case 1958:
case 1467:
case 1942:
case 3067:
case 2337:
case 934:
case 397:
case 2178:
case 2822:
case 2746:
case 2472:
case 1356:
case 3935:
case 3245:
case 4062:
case 3882:
case 3743:
case 595:
case 1643:
case 4088:
case 2997:
case 1104:
case 2741:
case 929:
case 1240:
case 480:
case 4095:
case 2682:
case 3923:
case 3339:
case 797:
case 3974:
case 1841:
case 3272:
case 960:
case 453:
case 816:
case 2445:
case 124:
case 465:
case 1110:
case 3362:
case 2032:
case 110:
case 3999:
case 12:
case 1100:
case 1193:
case 613:
case 1313:
case 2549:
case 3388:
case 111:
case 139:
case 2926:
case 2044:
case 848:
case 358:
case 1877:
case 2004:
case 2087:
case 1598:
case 4022:
case 1140:
case 1806:
case 48:
case 2519:
case 1694:
case 507:
case 3828:
case 1816:
case 3172:
case 120:
case 2888:
case 2255:
case 2405:
case 1210:
case 2557:
case 2862:
case 559:
case 1651:
case 3050:
case 1679:
case 1531:
case 484:
case 694:
case 3027:
case 1200:
case 1293:
case 379:
case 3837:
case 1613:
case 3688:
case 3215:
case 1853:
case 3713:
case 2000:
case 169:
case 3322:
case 2895:
case 3507:
case 2711:
case 2966:
case 1491:
case 3455:
case 3091:
case 1603:
case 758:
case 1055:
case 3703:
case 1132:
case 1762:
case 543:
case 1489:
case 2010:
case 2706:
case 2368:
case 1438:
case 3038:
case 930:
case 2573:
case 2524:
case 435:
case 578:
case 919:
case 1739:
case 3096:
case 3559:
case 2382:
case 1496:
case 812:
case 705:
case 1585:
case 1454:
case 3054:
case 1912:
case 3987:
case 3749:
case 3904:
case 50:
case 790:
case 3212:
case 487:
case 1649:
case 3325:
case 556:
case 2892:
case 3665:
case 791:
case 1048:
case 3452:
case 1263:
case 967:
case 1324:
case 1568:
case 3158:
case 1905:
case 295:
case 1373:
case 713:
case 3134:
case 1847:
case 3764:
case 776:
case 829:
case 1170:
case 1582:
case 1915:
case 391:
case 2398:
case 2118:
case 2543:
case 860:
case 390:
case 916:
case 3910:
case 2989:
case 1181:
case 3929:
case 2252:
case 2402:
case 1320:
case 2063:
case 9:
case 2996:
case 132:
case 1174:
case 3061:
case 1660:
case 2412:
case 3130:
case 1186:
case 428:
case 3233:
case 3007:
case 1220:
case 3084:
case 708:
case 250:
case 1484:
case 3943:
case 3165:
case 2830:
case 1635:
case 3589:
case 1257:
case 283:
case 1417:
case 1149:
case 122:
case 2231:
case 2941:
case 2500:
case 3059:
case 3596:
case 3634:
case 1734:
case 2298:
case 1209:
case 1471:
case 755:
case 1085:
case 1670:
case 3818:
case 1758:
case 1826:
case 1883:
case 2073:
case 167:
case 2529:
case 377:
case 3642:
case 3658:
case 1775:
case 1:
case 810:
case 1273:
case 2019:
case 3675:
case 3799:
case 1922:
case 696:
case 2504:
case 2618:
case 811:
case 2587:
case 2009:
case 3498:
case 932:
case 2842:
case 3312:
case 3550:
case 3723:
case 3192:
case 3225:
case 3431:
case 1686:
case 1623:
case 202:
case 1578:
case 363:
case 893:
case 3302:
case 824:
case 116:
case 355:
case 173:
case 2057:
case 2984:
case 2043:
case 164:
case 1156:
case 2268:
case 440:
case 1314:
case 3672:
case 920:
case 1925:
case 91:
case 3740:
case 1304:
case 2845:
case 3315:
case 3561:
case 37:
case 1151:
case 3195:
case 2971:
case 3973:
case 2137:
case 2378:
case 3046:
case 914:
case 3732:
case 506:
case 1103:
case 1310:
case 1548:
case 3162:
case 2355:
case 633:
case 2422:
case 298:
case 1300:
case 3744:
case 119:
case 3909:
case 1669:
case 4015:
case 969:
case 2872:
case 3139:
case 2128:
case 1082:
case 862:
case 699:
case 1243:
case 77:
case 836:
case 3920:
case 4005:
case 1933:
case 3957:
case 3468:
case 1068:
case 1329:
case 554:
case 2790:
case 2703:
case 2205:
case 2576:
case 1410:
case 1611:
case 3895:
case 3711:
case 1851:
case 3966:
case 3278:
case 300:
case 643:
case 984:
case 1493:
case 1400:
case 1227:
case 3000:
case 1601:
case 2322:
case 2517:
case 141:
case 1894:
case 2639:
case 1616:
case 2571:
case 1728:
case 3961:
case 3716:
case 1856:
case 46:
case 2559:
case 2145:
case 752:
case 3524:
case 1606:
case 3777:
case 1677:
case 98:
case 3368:
case 2038:
case 678:
case 3573:
case 3519:
case 2580:
case 935:
case 2172:
case 1414:
case 3014:
case 1952:
case 1238:
case 1254:
case 700:
case 258:
case 1341:
case 3004:
case 431:
case 3087:
case 1296:
case 1015:
case 2027:
case 3862:
case 4082:
case 2050:
case 2695:
case 1803:
case 205:
case 1737:
case 1005:
case 1167:
case 1289:
case 189:
case 523:
case 2478:
case 3520:
case 3888:
case 1813:
case 659:
case 2175:
case 3543:
case 3991:
case 2066:
case 3108:
case 2900:
case 849:
case 138:
case 942:
case 3398:
case 422:
case 1126:
case 3118:
case 3954:
case 1012:
case 2130:
case 3996:
case 4085:
case 3331:
case 467:
case 1002:
case 3063:
case 1849:
case 2929:
case 1121:
case 3252:
case 213:
case 1307:
case 2202:
case 1384:
case 2914:
case 1860:
case 928:
case 2212:
case 448:
case 186:
case 1261:
case 604:
case 1359:
case 880:
case 2134:
case 1371:
case 2764:
case 865:
case 395:
case 853:
case 416:
case 1271:
case 3726:
case 3842:
case 1626:
case 3587:
case 2080:
case 3019:
case 4052:
case 1419:
case 2799:
case 1366:
case 751:
case 3514:
case 3834:
case 2781:
case 783:
case 596:
case 1505:
case 255:
case 3057:
case 417:
case 3721:
case 1276:
case 1420:
case 1207:
case 1621:
case 263:
case 2302:
case 609:
case 1284:
case 2431:
case 2630:
case 1515:
case 142:
case 2527:
case 1835:
case 2774:
case 2312:
case 1217:
case 571:
case 2786:
case 3231:
case 3941:
case 2017:
case 383:
case 3425:
case 1025:
case 3797:
case 1823:
case 1886:
case 3830:
case 2076:
case 2589:
case 2233:
case 1874:
case 2735:
case 2007:
case 2591:
case 844:
case 2165:
case 3236:
case 815:
case 2642:
case 3024:
case 2818:
case 466:
case 1473:
case 3073:
case 2538:
case 3875:
case 3298:
case 1881:
case 84:
case 432:
case 2071:
case 2554:
case 2485:
case 2059:
case 2634:
case 2744:
case 1101:
case 2188:
case 606:
case 1022:
case 398:
case 414:
case 18:
case 1391:
case 2919:
case 3980:
case 533:
case 420:
case 1840:
case 925:
case 1177:
case 2920:
case 803:
case 3872:
case 654:
case 1931:
case 2769:
case 941:
case 292:
case 184:
case 599:
case 1354:
case 2672:
case 274:
case 1869:
case 989:
case 3907:
case 1667:
case 3378:
case 1502:
case 847:
case 3137:
case 135:
case 1844:
case 1350:
case 3971:
case 3959:
case 2222:
case 2195:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758085202/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,];
var gg_b = "1758085202/";

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
