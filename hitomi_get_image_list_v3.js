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
case 362:
case 659:
case 2490:
case 784:
case 3422:
case 663:
case 4000:
case 949:
case 837:
case 2555:
case 152:
case 1002:
case 1675:
case 3609:
case 2603:
case 2993:
case 3286:
case 1387:
case 1408:
case 454:
case 58:
case 1178:
case 3119:
case 2091:
case 2113:
case 3028:
case 3385:
case 3006:
case 1261:
case 1750:
case 2774:
case 1633:
case 4022:
case 3400:
case 1955:
case 539:
case 1444:
case 196:
case 493:
case 1593:
case 2872:
case 2778:
case 268:
case 3262:
case 2060:
case 2539:
case 2482:
case 1290:
case 3170:
case 3693:
case 3046:
case 95:
case 2084:
case 780:
case 718:
case 1365:
case 2226:
case 281:
case 1266:
case 1856:
case 2204:
case 2434:
case 2096:
case 2643:
case 1849:
case 4:
case 3656:
case 676:
case 549:
case 2382:
case 2416:
case 1893:
case 480:
case 1652:
case 1321:
case 2079:
case 98:
case 814:
case 2338:
case 2163:
case 2723:
case 3322:
case 3729:
case 484:
case 1763:
case 847:
case 2390:
case 3976:
case 810:
case 506:
case 1308:
case 3227:
case 1326:
case 119:
case 327:
case 1189:
case 3035:
case 754:
case 3485:
case 1037:
case 225:
case 2265:
case 1877:
case 2736:
case 257:
case 1567:
case 165:
case 87:
case 2616:
case 2141:
case 2625:
case 3667:
case 1800:
case 3349:
case 2343:
case 3742:
case 355:
case 3565:
case 836:
case 590:
case 1333:
case 4051:
case 702:
case 1164:
case 3013:
case 1131:
case 3720:
case 895:
case 3393:
case 2399:
case 1746:
case 1192:
case 594:
case 2611:
case 2830:
case 907:
case 2731:
case 1585:
case 3916:
case 2967:
case 1724:
case 197:
case 1927:
case 1728:
case 1706:
case 3685:
case 841:
case 2862:
case 3050:
case 332:
case 1276:
case 2881:
case 1912:
case 978:
case 3188:
case 1840:
case 3804:
case 3808:
case 2303:
case 321:
case 809:
case 1608:
case 2666:
case 1994:
case 1604:
case 1517:
case 475:
case 1986:
case 831:
case 3515:
case 3526:
case 3934:
case 3938:
case 4049:
case 2530:
case 1114:
case 1885:
case 3063:
case 953:
case 2690:
case 342:
case 1299:
case 3179:
case 1118:
case 1522:
case 3107:
case 2159:
case 2403:
case 2233:
case 2562:
case 2371:
case 3887:
case 583:
case 3110:
case 1145:
case 1352:
case 507:
case 1621:
case 2940:
case 2705:
case 2598:
case 2718:
case 2634:
case 2714:
case 3521:
case 104:
case 2594:
case 203:
case 4077:
case 2827:
case 3990:
case 1644:
case 429:
case 1867:
case 1433:
case 1203:
case 1257:
case 3548:
case 326:
case 1930:
case 3865:
case 3544:
case 1683:
case 4041:
case 946:
case 2082:
case 770:
case 656:
case 1420:
case 541:
case 263:
case 1923:
case 1048:
case 3583:
case 2589:
case 1756:
case 2202:
case 3373:
case 4024:
case 2496:
case 1442:
case 2038:
case 3231:
case 164:
case 727:
case 3264:
case 2488:
case 2484:
case 354:
case 3268:
case 2061:
case 3752:
case 2353:
case 3858:
case 3359:
case 2307:
case 1563:
case 2523:
case 1402:
case 668:
case 4046:
case 24:
case 3441:
case 2310:
case 199:
case 393:
case 1260:
case 1850:
case 1629:
case 1751:
case 2220:
case 3022:
case 350:
case 57:
case 1172:
case 922:
case 3406:
case 2156:
case 111:
case 1284:
case 1395:
case 3428:
case 595:
case 3424:
case 1008:
case 3335:
case 3040:
case 1004:
case 3397:
case 651:
case 679:
case 2410:
case 1709:
case 1302:
case 941:
case 172:
case 276:
case 2447:
case 3919:
case 1978:
case 3324:
case 4073:
case 2391:
case 474:
case 3306:
case 1863:
case 3650:
case 318:
case 1658:
case 2574:
case 531:
case 2360:
case 1247:
case 470:
case 3346:
case 936:
case 1793:
case 3733:
case 2739:
case 3245:
case 509:
case 762:
case 522:
case 2619:
case 3067:
case 212:
case 2479:
case 2950:
case 1342:
case 2384:
case 3970:
case 2237:
case 3103:
case 2109:
case 3157:
case 2407:
case 105:
case 1065:
case 2016:
case 2889:
case 2388:
case 3450:
case 910:
case 1717:
case 455:
case 2781:
case 2880:
case 1597:
case 3726:
case 3802:
case 3907:
case 657:
case 1740:
case 41:
case 3704:
case 3182:
case 2470:
case 1194:
case 726:
case 785:
case 3161:
case 2831:
case 2730:
case 2610:
case 1198:
case 1219:
case 1806:
case 3138:
case 2762:
case 3363:
case 3051:
case 2369:
case 2545:
case 1722:
case 1828:
case 1186:
case 2254:
case 1270:
case 2786:
case 3673:
case 134:
case 1573:
case 2997:
case 3659:
case 2607:
case 3721:
case 2794:
case 2514:
case 2935:
case 1130:
case 1052:
case 1383:
case 88:
case 2836:
case 3166:
case 432:
case 2117:
case 742:
case 1964:
case 144:
case 3601:
case 2924:
case 2928:
case 806:
case 2043:
case 1501:
case 375:
case 2688:
case 815:
case 561:
case 2229:
case 3223:
case 208:
case 39:
case 1358:
case 1620:
case 2941:
case 966:
case 721:
case 1483:
case 3646:
case 2099:
case 3093:
case 3520:
case 1033:
case 732:
case 4063:
case 2185:
case 2814:
case 3313:
case 2818:
case 442:
case 220:
case 2805:
case 2592:
case 1112:
case 2901:
case 2691:
case 3624:
case 755:
case 3628:
case 3996:
case 3984:
case 71:
case 3960:
case 123:
case 2580:
case 485:
case 648:
case 3116:
case 1897:
case 3125:
case 26:
case 514:
case 1602:
case 2946:
case 3009:
case 2057:
case 1541:
case 687:
case 3077:
case 3463:
case 3895:
case 3502:
case 4039:
case 3662:
case 2029:
case 1530:
case 2114:
case 2299:
case 1173:
case 1690:
case 346:
case 3944:
case 449:
case 1562:
case 2475:
case 1159:
case 2522:
case 1403:
case 3590:
case 739:
case 5:
case 3710:
case 2626:
case 2517:
case 2797:
case 3921:
case 885:
case 518:
case 3566:
case 2986:
case 2540:
case 580:
case 3681:
case 2648:
case 1922:
case 4055:
case 3582:
case 2433:
case 3137:
case 2203:
case 2257:
case 1827:
case 187:
case 2644:
case 331:
case 1682:
case 2930:
case 1135:
case 3825:
case 3277:
case 1197:
case 322:
case 2083:
case 148:
case 2500:
case 584:
case 623:
case 640:
case 1586:
case 3698:
case 3534:
case 3926:
case 3915:
case 3538:
case 2352:
case 2759:
case 1940:
case 1812:
case 1718:
case 3372:
case 3779:
case 842:
case 3686:
case 1443:
case 2981:
case 1638:
case 1917:
case 2168:
case 3732:
case 1106:
case 3074:
case 341:
case 1128:
case 1019:
case 3078:
case 1886:
case 2164:
case 3834:
case 3612:
case 715:
case 1894:
case 3251:
case 2131:
case 2058:
case 3760:
case 630:
case 3861:
case 9:
case 2567:
case 157:
case 1616:
case 1625:
case 265:
case 3882:
case 367:
case 918:
case 3627:
case 2701:
case 2800:
case 554:
case 2180:
case 3472:
case 980:
case 1343:
case 2276:
case 1780:
case 336:
case 855:
case 3142:
case 2840:
case 2741:
case 550:
case 593:
case 439:
case 3866:
case 1357:
case 1303:
case 2687:
case 1146:
case 1611:
case 2192:
case 3120:
case 1731:
case 3965:
case 2585:
case 395:
case 2724:
case 2927:
case 1764:
case 2706:
case 1252:
case 1768:
case 1572:
case 2465:
case 245:
case 1416:
case 870:
case 2893:
case 3398:
case 2652:
case 2321:
case 3394:
case 1053:
case 3018:
case 3386:
case 575:
case 1334:
case 1163:
case 1839:
case 3014:
case 3427:
case 2123:
case 3843:
case 3576:
case 373:
case 2344:
case 361:
case 179:
case 151:
case 219:
case 1366:
case 3857:
case 2308:
case 605:
case 3267:
case 2304:
case 3183:
case 1411:
case 4027:
case 2225:
case 2877:
case 2216:
case 186:
case 125:
case 1265:
case 2763:
case 3362:
case 3769:
case 874:
case 291:
case 1390:
case 3571:
case 1956:
case 529:
case 3330:
case 753:
case 3045:
case 502:
case 1671:
case 2404:
case 1311:
case 3871:
case 2387:
case 2426:
case 2415:
case 3158:
case 3031:
case 1466:
case 975:
case 2178:
case 1091:
case 1113:
case 3064:
case 3068:
case 1949:
case 2851:
case 1221:
case 2174:
case 3655:
case 1490:
case 366:
case 3080:
case 2939:
case 3462:
case 99:
case 3557:
case 3503:
case 10:
case 1248:
case 156:
case 1657:
case 1244:
case 2002:
case 3494:
case 1084:
case 3036:
case 235:
case 2549:
case 3543:
case 1325:
case 1208:
case 3327:
case 1215:
case 337:
case 1096:
case 1643:
case 3240:
case 4062:
case 296:
case 1774:
case 1977:
case 3639:
case 2713:
case 699:
case 3222:
case 660:
case 168:
case 929:
case 1909:
case 1699:
case 1482:
case 3975:
case 3092:
case 2269:
case 600:
case 2859:
case 1941:
case 2620:
case 2358:
case 1229:
case 108:
case 3532:
case 1660:
case 962:
case 1099:
case 3692:
case 2980:
case 3560:
case 4023:
case 3039:
case 2033:
case 998:
case 143:
case 1592:
case 1805:
case 1319:
case 2546:
case 628:
case 1536:
case 2964:
case 3584:
case 2968:
case 1043:
case 1696:
case 1928:
case 3636:
case 3596:
case 1688:
case 16:
case 3920:
case 875:
case 223:
case 1580:
case 1003:
case 2602:
case 2075:
case 409:
case 306:
case 3055:
case 570:
case 35:
case 1283:
case 3423:
case 2429:
case 1469:
case 1901:
case 3847:
case 1691:
case 767:
case 2112:
case 3942:
case 3810:
case 1370:
case 513:
case 2936:
case 2524:
case 2528:
case 1845:
case 89:
case 1568:
case 3631:
case 2194:
case 2198:
case 2219:
case 1610:
case 1545:
case 2722:
case 2329:
case 2828:
case 4074:
case 441:
case 2806:
case 1258:
case 1762:
case 1254:
case 598:
case 2824:
case 2186:
case 2918:
case 2695:
case 3144:
case 2717:
case 2535:
case 1880:
case 665:
case 974:
case 38:
case 2841:
case 3782:
case 2383:
case 2454:
case 3104:
case 47:
case 1140:
case 2458:
case 1836:
case 339:
case 3126:
case 3115:
case 436:
case 3896:
case 1419:
case 3478:
case 970:
case 3474:
case 301:
case 3734:
case 3618:
case 3605:
case 3072:
case 3553:
case 1122:
case 697:
case 2559:
case 3507:
case 3832:
case 2162:
case 927:
case 3614:
case 913:
case 1798:
case 2573:
case 3579:
case 2130:
case 3761:
case 1653:
case 737:
case 3364:
case 4018:
case 1391:
case 3259:
case 2207:
case 2253:
case 2437:
case 2139:
case 3869:
case 2279:
case 2550:
case 488:
case 542:
case 3954:
case 3757:
case 2302:
case 2974:
case 3380:
case 2978:
case 307:
case 3414:
case 2155:
case 2749:
case 1950:
case 3743:
case 2342:
case 216:
case 1479:
case 1177:
case 1237:
case 1453:
case 1109:
case 1407:
case 3336:
case 189:
case 3175:
case 1295:
case 619:
case 1016:
case 205:
case 2065:
case 818:
case 1574:
case 1360:
case 2320:
case 2793:
case 932:
case 2513:
case 3519:
case 1332:
case 921:
case 766:
case 1619:
case 526:
case 585:
case 4064:
case 3305:
case 2813:
case 3318:
case 3819:
case 1772:
case 1878:
case 3086:
case 1874:
case 3314:
case 893:
case 3224:
case 2291:
case 3436:
case 3206:
case 1353:
case 1484:
case 2021:
case 3776:
case 2683:
case 942:
case 1460:
case 390:
case 1963:
case 1589:
case 4080:
case 171:
case 2044:
case 1432:
case 1202:
case 437:
case 2284:
case 3468:
case 3464:
case 747:
case 4036:
case 2008:
case 2015:
case 710:
case 2296:
case 3030:
case 1523:
case 3345:
case 2989:
case 2563:
case 3569:
case 4092:
case 3771:
case 3870:
case 299:
case 260:
case 532:
case 773:
case 1669:
case 3623:
case 2629:
case 521:
case 2850:
case 3062:
case 1347:
case 761:
case 985:
case 1090:
case 926:
case 959:
case 3475:
case 1982:
case 1239:
case 971:
case 963:
case 2590:
case 1887:
case 649:
case 2811:
case 2710:
case 1622:
case 1063:
case 2948:
case 3885:
case 3029:
case 2662:
case 3118:
case 53:
case 142:
case 2944:
case 3105:
case 2455:
case 1737:
case 3986:
case 1795:
case 1504:
case 3540:
case 1938:
case 3615:
case 3626:
case 848:
case 1961:
case 3243:
case 1640:
case 3604:
case 1865:
case 1255:
case 440:
case 126:
case 423:
case 222:
case 3083:
case 2816:
case 1493:
case 1548:
case 4075:
case 615:
case 3648:
case 2582:
case 3203:
case 2209:
case 2137:
case 2439:
case 65:
case 2372:
case 2779:
case 1147:
case 2686:
case 1449:
case 2561:
case 3981:
case 2908:
case 1110:
case 2915:
case 2534:
case 2538:
case 3621:
case 3759:
case 3145:
case 2904:
case 1821:
case 1720:
case 3131:
case 2760:
case 430:
case 3054:
case 563:
case 1393:
case 976:
case 1456:
case 3168:
case 93:
case 3271:
case 1191:
case 1013:
case 2612:
case 717:
case 3164:
case 2834:
case 3800:
case 267:
case 2796:
case 155:
case 2516:
case 1848:
case 2525:
case 3567:
case 2784:
case 2102:
case 2788:
case 3665:
case 3741:
case 3840:
case 639:
case 1188:
case 1184:
case 3375:
case 1815:
case 54:
case 132:
case 3276:
case 1377:
case 236:
case 1451:
case 744:
case 397:
case 1587:
case 1132:
case 989:
case 3706:
case 3728:
case 912:
case 1916:
case 838:
case 3585:
case 2965:
case 1073:
case 2018:
case 711:
case 2005:
case 174:
case 1467:
case 2014:
case 247:
case 210:
case 2899:
case 4087:
case 2285:
case 2394:
case 3321:
case 577:
case 1059:
case 1783:
case 543:
case 1971:
case 3556:
case 799:
case 886:
case 273:
case 2576:
case 3348:
case 508:
case 3344:
case 1656:
case 683:
case 3037:
case 3095:
case 3216:
case 2381:
case 382:
case 1317:
case 3225:
case 764:
case 113:
case 319:
case 2857:
case 2803:
case 4065:
case 1097:
case 3487:
case 2183:
case 1976:
case 170:
case 678:
case 933:
case 1212:
case 3763:
case 391:
case 56:
case 2571:
case 1417:
case 2481:
case 1024:
case 2068:
case 3750:
case 3261:
case 1006:
case 1294:
case 3174:
case 2871:
case 1286:
case 4021:
case 2031:
case 3408:
case 2158:
case 352:
case 1999:
case 653:
case 3002:
case 2080:
case 4048:
case 1677:
case 3939:
case 162:
case 4044:
case 2462:
case 881:
case 1575:
case 2557:
case 2503:
case 3266:
case 237:
case 2327:
case 2486:
case 3042:
case 3421:
case 4026:
case 2036:
case 856:
case 1281:
case 2498:
case 3549:
case 2543:
case 3020:
case 1533:
case 1262:
case 1046:
case 1754:
case 1903:
case 2975:
case 533:
case 1230:
case 3713:
case 2719:
case 3448:
case 96:
case 428:
case 4029:
case 2560:
case 3980:
case 646:
case 3033:
case 1520:
case 3546:
case 2879:
case 3358:
case 3620:
case 19:
case 2532:
case 824:
case 1223:
case 1111:
case 400:
case 3354:
case 2692:
case 2902:
case 2636:
case 2725:
case 1542:
case 1765:
case 3931:
case 86:
case 175:
case 1991:
case 1601:
case 2584:
case 3964:
case 1049:
case 3642:
case 2680:
case 206:
case 1289:
case 631:
case 3541:
case 1077:
case 2423:
case 1502:
case 3429:
case 3127:
case 317:
case 2920:
case 3897:
case 609:
case 4083:
case 1116:
case 340:
case 215:
case 323:
case 1960:
case 2165:
case 3835:
case 992:
case 3992:
case 1787:
case 586:
case 1984:
case 2810:
case 2591:
case 3936:
case 765:
case 981:
case 3506:
case 2847:
case 820:
case 2664:
case 2668:
case 404:
case 3828:
case 1051:
case 1363:
case 3806:
case 1134:
case 2510:
case 3186:
case 50:
case 2121:
case 1274:
case 3194:
case 2213:
case 2547:
case 1726:
case 1537:
case 1704:
case 1907:
case 3841:
case 3637:
case 3918:
case 1450:
case 3905:
case 3597:
case 667:
case 2148:
case 1748:
case 2478:
case 2896:
case 3181:
case 2474:
case 3700:
case 3801:
case 1056:
case 1744:
case 2389:
case 2104:
case 67:
case 2115:
case 1910:
case 700:
case 3846:
case 3573:
case 2860:
case 3052:
case 2761:
case 1659:
case 1721:
case 1673:
case 2618:
case 2734:
case 497:
case 2072:
case 3270:
case 2605:
case 1190:
case 2507:
case 334:
case 3162:
case 2738:
case 1205:
case 445:
case 118:
case 3550:
case 1085:
case 1328:
case 1650:
case 1829:
case 3437:
case 2869:
case 2133:
case 2368:
case 2259:
case 812:
case 1:
case 2380:
case 3974:
case 796:
case 3978:
case 1919:
case 673:
case 1341:
case 889:
case 2445:
case 3709:
case 3302:
case 2954:
case 1157:
case 1970:
case 2175:
case 1883:
case 3065:
case 305:
case 207:
case 4095:
case 1067:
case 283:
case 2235:
case 2405:
case 876:
case 2418:
case 482:
case 1558:
case 548:
case 184:
case 1733:
case 1245:
case 2678:
case 491:
case 587:
case 3658:
case 3320:
case 278:
case 3793:
case 2392:
case 1346:
case 3247:
case 2519:
case 1171:
case 1854:
case 1858:
case 2206:
case 2436:
case 154:
case 3021:
case 3442:
case 1373:
case 2086:
case 3813:
case 2318:
case 557:
case 1231:
case 782:
case 1969:
case 3048:
case 2241:
case 2929:
case 3923:
case 1000:
case 791:
case 538:
case 3044:
case 1280:
case 253:
case 2689:
case 290:
case 4002:
case 3420:
case 3008:
case 2431:
case 3015:
case 1176:
case 3296:
case 435:
case 1040:
case 1335:
case 3284:
case 3395:
case 311:
case 1236:
case 1406:
case 3337:
case 2081:
case 1022:
case 3629:
case 3260:
case 948:
case 496:
case 658:
case 2246:
case 3172:
case 1292:
case 2030:
case 2152:
case 1529:
case 4020:
case 3563:
case 2569:
case 399:
case 2870:
case 3555:
case 298:
case 3248:
case 1430:
case 3244:
case 2999:
case 3993:
case 2609:
case 1080:
case 463:
case 1655:
case 3490:
case 530:
case 1557:
case 471:
case 459:
case 1462:
case 2575:
case 1064:
case 3091:
case 2024:
case 2385:
case 896:
case 1068:
case 4038:
case 2006:
case 1871:
case 1770:
case 654:
case 2286:
case 3311:
case 2440:
case 1154:
case 3466:
case 4061:
case 1158:
case 1031:
case 944:
case 368:
case 2262:
case 2533:
case 3539:
case 1975:
case 3482:
case 2046:
case 3699:
case 44:
case 2903:
case 3909:
case 650:
case 392:
case 2400:
case 3150:
case 693:
case 3872:
case 4090:
case 3778:
case 923:
case 381:
case 137:
case 3215:
case 3208:
case 3438:
case 3434:
case 3204:
case 1240:
case 1486:
case 3096:
case 4066:
case 1036:
case 3461:
case 534:
case 3084:
case 1876:
case 3088:
case 3316:
case 3325:
case 1498:
case 2783:
case 43:
case 2971:
case 379:
case 476:
case 882:
case 3951:
case 930:
case 2656:
case 6:
case 161:
case 1672:
case 3287:
case 1386:
case 3079:
case 1129:
case 1427:
case 147:
case 2169:
case 3839:
case 3163:
case 3425:
case 1398:
case 4011:
case 3416:
case 3572:
case 2059:
case 3007:
case 680:
case 1285:
case 1394:
case 188:
case 1330:
case 845:
case 3671:
case 270:
case 3723:
case 2651:
case 2729:
case 3047:
case 771:
case 1571:
case 684:
case 3390:
case 759:
case 3265:
case 386:
case 213:
case 1381:
case 1857:
case 227:
case 489:
case 934:
case 4025:
case 2097:
case 4016:
case 1183:
case 1952:
case 2035:
case 2844:
case 1516:
case 2565:
case 255:
case 1796:
case 357:
case 3736:
case 564:
case 1784:
case 1987:
case 21:
case 1861:
case 3894:
case 2393:
case 4071:
case 972:
case 141:
case 1074:
case 3106:
case 1732:
case 1838:
case 1612:
case 1834:
case 1078:
case 3886:
case 3019:
case 2013:
case 777:
case 1511:
case 905:
case 2132:
case 3768:
case 3252:
case 2685:
case 3070:
case 3611:
case 3146:
case 195:
case 511:
case 2925:
case 2916:
case 3471:
case 4076:
case 2188:
case 17:
case 2309:
case 3303:
case 2702:
case 1866:
case 2826:
case 560:
case 433:
case 136:
case 3881:
case 3780:
case 2196:
case 2377:
case 2508:
case 1566:
case 2934:
case 2737:
case 2515:
case 2617:
case 2938:
case 1681:
case 2640:
case 1249:
case 2239:
case 3745:
case 2107:
case 3457:
case 3403:
case 408:
case 1630:
case 92:
case 2887:
case 1811:
case 572:
case 69:
case 804:
case 1023:
case 3530:
case 733:
case 3069:
case 2063:
case 443:
case 146:
case 1944:
case 1747:
case 3900:
case 2179:
case 2477:
case 3173:
case 1293:
case 242:
case 1686:
case 3598:
case 3634:
case 505:
case 1779:
case 3812:
case 3718:
case 3917:
case 3638:
case 1561:
case 3594:
case 2110:
case 800:
case 1926:
case 1534:
case 1698:
case 1753:
case 1707:
case 1538:
case 1089:
case 2493:
case 3499:
case 2548:
case 3135:
case 2865:
case 285:
case 348:
case 109:
case 3922:
case 629:
case 131:
case 387:
case 2990:
case 3827:
case 1439:
case 900:
case 363:
case 3589:
case 3202:
case 811:
case 662:
case 3432:
case 1689:
case 2446:
case 1776:
case 2280:
case 153:
case 1492:
case 169:
case 3460:
case 2264:
case 899:
case 860:
case 1098:
case 254:
case 1228:
case 2752:
case 3353:
case 2268:
case 1206:
case 1436:
case 3496:
case 3772:
case 2373:
case 3878:
case 1318:
case 565:
case 1305:
case 3034:
case 2231:
case 725:
case 3874:
case 1623:
case 293:
case 2022:
case 3220:
case 2292:
case 1480:
case 250:
case 3347:
case 1983:
case 1345:
case 4060:
case 1030:
case 468:
case 2529:
case 2441:
case 751:
case 1870:
case 3310:
case 3242:
case 2397:
case 3156:
case 2428:
case 1081:
case 82:
case 2424:
case 2017:
case 1464:
case 816:
case 792:
case 3755:
case 2341:
case 33:
case 805:
case 3410:
case 479:
case 2775:
case 1757:
case 1703:
case 451:
case 528:
case 3670:
case 2218:
case 2497:
case 1273:
case 4053:
case 1364:
case 965:
case 781:
case 1570:
case 674:
case 1869:
case 1368:
case 1259:
case 2650:
case 1674:
case 3332:
case 3739:
case 2245:
case 2554:
case 1012:
case 2613:
case 3619:
case 4047:
case 70:
case 3360:
case 1519:
case 3578:
case 1799:
case 4010:
case 2970:
case 3295:
case 3384:
case 389:
case 3109:
case 2157:
case 3237:
case 997:
case 2883:
case 3016:
case 2301:
case 2067:
case 613:
case 1414:
case 107:
case 1027:
case 2473:
case 3479:
case 3396:
case 312:
case 183:
case 1235:
case 1405:
case 2726:
case 2802:
case 2953:
case 2697:
case 18:
case 3470:
case 2635:
case 2363:
case 3258:
case 1323:
case 834:
case 3545:
case 552:
case 4019:
case 3647:
case 3254:
case 2134:
case 3864:
case 787:
case 1121:
case 438:
case 2161:
case 3831:
case 3730:
case 1547:
case 1213:
case 982:
case 1579:
case 3798:
case 830:
case 2659:
case 2820:
case 1860:
case 1250:
case 3935:
case 3786:
case 1605:
case 1937:
case 3679:
case 919:
case 1832:
case 1553:
case 3122:
case 2413:
case 3419:
case 1896:
case 2748:
case 2947:
case 2744:
case 1474:
case 991:
case 3140:
case 1888:
case 1115:
case 596:
case 1884:
case 139:
case 1126:
case 2166:
case 1636:
case 2765:
case 3688:
case 275:
case 1716:
case 817:
case 3536:
case 377:
case 3924:
case 3727:
case 2601:
case 545:
case 3043:
case 4069:
case 2520:
case 3632:
case 1378:
case 2313:
case 149:
case 1532:
case 3660:
case 2223:
case 308:
case 1853:
case 3941:
case 1807:
case 1692:
case 1902:
case 2111:
case 2093:
case 1187:
case 2787:
case 3370:
case 1631:
case 3845:
case 2624:
case 3691:
case 1847:
case 2350:
case 519:
case 2996:
case 3531:
case 1668:
case 2289:
case 3283:
case 15:
case 2077:
case 1055:
case 2932:
case 403:
case 1680:
case 2837:
case 2463:
case 3469:
case 1423:
case 2502:
case 2895:
case 229:
case 738:
case 115:
case 2960:
case 2641:
case 2125:
case 3946:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758603601/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,];
var gg_b = "1758603601/";

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
