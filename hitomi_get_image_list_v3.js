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
case 47:
case 1757:
case 1383:
case 2481:
case 4035:
case 1970:
case 2694:
case 1184:
case 379:
case 2405:
case 3498:
case 3521:
case 3147:
case 316:
case 497:
case 558:
case 4044:
case 2646:
case 1372:
case 2915:
case 3400:
case 1670:
case 1441:
case 1124:
case 2343:
case 2766:
case 2994:
case 2298:
case 2738:
case 504:
case 3870:
case 944:
case 3560:
case 3706:
case 2144:
case 3505:
case 2771:
case 2739:
case 3281:
case 3593:
case 1810:
case 893:
case 1098:
case 3293:
case 3610:
case 1099:
case 2792:
case 1065:
case 1355:
case 3348:
case 1926:
case 126:
case 3375:
case 658:
case 1247:
case 2623:
case 1462:
case 2141:
case 770:
case 628:
case 187:
case 2991:
case 1444:
case 2227:
case 9:
case 2370:
case 2386:
case 2047:
case 3584:
case 2849:
case 3989:
case 788:
case 3629:
case 161:
case 3284:
case 1496:
case 300:
case 1315:
case 113:
case 3628:
case 1027:
case 3988:
case 1717:
case 622:
case 1181:
case 3062:
case 1943:
case 1530:
case 1394:
case 652:
case 918:
case 2683:
case 2923:
case 2002:
case 397:
case 3044:
case 1230:
case 3224:
case 1763:
case 423:
case 3950:
case 3928:
case 3688:
case 1087:
case 3427:
case 37:
case 2955:
case 3777:
case 604:
case 453:
case 3096:
case 2791:
case 85:
case 2279:
case 1608:
case 3007:
case 3809:
case 2578:
case 884:
case 1617:
case 3018:
case 1513:
case 102:
case 3582:
case 1137:
case 3890:
case 2836:
case 2067:
case 82:
case 2895:
case 2579:
case 3808:
case 348:
case 1609:
case 1213:
case 3282:
case 741:
case 2180:
case 1877:
case 18:
case 2422:
case 1464:
case 3788:
case 531:
case 4059:
case 2803:
case 222:
case 3677:
case 543:
case 1267:
case 2161:
case 252:
case 4020:
case 3789:
case 2723:
case 377:
case 1371:
case 1909:
case 4061:
case 1418:
case 635:
case 606:
case 1504:
case 3125:
case 1140:
case 1338:
case 937:
case 2159:
case 1419:
case 1204:
case 3522:
case 1366:
case 3977:
case 414:
case 707:
case 2755:
case 3479:
case 3431:
case 3354:
case 3064:
case 3729:
case 4080:
case 510:
case 3311:
case 3042:
case 1963:
case 2256:
case 3728:
case 3478:
case 2107:
case 2085:
case 1420:
case 631:
case 1806:
case 1770:
case 1173:
case 950:
case 1201:
case 2638:
case 3606:
case 3167:
case 1374:
case 1016:
case 920:
case 4064:
case 1501:
case 1957:
case 3080:
case 3314:
case 1833:
case 1285:
case 3237:
case 2001:
case 3710:
case 3633:
case 3537:
case 1182:
case 2692:
case 175:
case 2811:
case 2534:
case 46:
case 2309:
case 3020:
case 3368:
case 2794:
case 2025:
case 745:
case 3059:
case 3369:
case 1525:
case 2164:
case 2992:
case 1122:
case 1476:
case 1461:
case 1034:
case 2053:
case 2363:
case 2746:
case 4018:
case 2142:
case 2545:
case 3104:
case 829:
case 505:
case 536:
case 3682:
case 1290:
case 1730:
case 1133:
case 1508:
case 1209:
case 1590:
case 1334:
case 647:
case 1208:
case 2679:
case 1217:
case 3036:
case 459:
case 848:
case 3277:
case 1106:
case 3358:
case 3320:
case 1345:
case 1667:
case 429:
case 1263:
case 2956:
case 2325:
case 262:
case 3673:
case 3474:
case 2008:
case 35:
case 2864:
case 24:
case 2931:
case 2301:
case 678:
case 2274:
case 1913:
case 3804:
case 3622:
case 3051:
case 3361:
case 89:
case 176:
case 2656:
case 601:
case 1468:
case 119:
case 3784:
case 1436:
case 1469:
case 1316:
case 680:
case 1967:
case 877:
case 2799:
case 2239:
case 3801:
case 2538:
case 2566:
case 11:
case 3054:
case 3011:
case 2571:
case 1601:
case 3342:
case 2798:
case 2934:
case 3760:
case 3506:
case 2945:
case 1039:
case 3109:
case 249:
case 2168:
case 3637:
case 547:
case 907:
case 572:
case 899:
case 138:
case 2169:
case 2195:
case 1356:
case 1066:
case 1925:
case 373:
case 2114:
case 1557:
case 3492:
case 501:
case 1653:
case 941:
case 2634:
case 4095:
case 359:
case 1257:
case 2151:
case 3853:
case 42:
case 2313:
case 580:
case 1411:
case 4068:
case 2820:
case 3937:
case 703:
case 3318:
case 578:
case 132:
case 1985:
case 3319:
case 2057:
case 3466:
case 2859:
case 4003:
case 1840:
case 3825:
case 1150:
case 363:
case 2294:
case 2734:
case 311:
case 1046:
case 3960:
case 2965:
case 1129:
case 3415:
case 2148:
case 4012:
case 2594:
case 3396:
case 568:
case 823:
case 2246:
case 3981:
case 3740:
case 3621:
case 853:
case 2302:
case 73:
case 3993:
case 2347:
case 2086:
case 1805:
case 970:
case 7:
case 1570:
case 2698:
case 1701:
case 393:
case 1270:
case 3660:
case 1327:
case 125:
case 3075:
case 2632:
case 3494:
case 1286:
case 427:
case 3210:
case 2112:
case 4048:
case 2215:
case 562:
case 3737:
case 3297:
case 3681:
case 3921:
case 486:
case 1893:
case 988:
case 2070:
case 386:
case 668:
case 3847:
case 201:
case 2523:
case 1930:
case 4075:
case 3472:
case 166:
case 280:
case 327:
case 3048:
case 1647:
case 278:
case 1412:
case 3529:
case 2043:
case 493:
case 430:
case 2756:
case 121:
case 64:
case 3684:
case 534:
case 3491:
case 151:
case 867:
case 2255:
case 1884:
case 1332:
case 3782:
case 1449:
case 1713:
case 196:
case 2778:
case 2283:
case 87:
case 2450:
case 2687:
case 2896:
case 1197:
case 3455:
case 3830:
case 2429:
case 1072:
case 739:
case 2779:
case 2291:
case 3289:
case 1824:
case 1083:
case 3012:
case 909:
case 3589:
case 3773:
case 247:
case 3288:
case 3624:
case 411:
case 2272:
case 751:
case 1748:
case 29:
case 3755:
case 1651:
case 2977:
case 516:
case 3814:
case 2729:
case 667:
case 2479:
case 1022:
case 3556:
case 1903:
case 2042:
case 1134:
case 3482:
case 2153:
case 1413:
case 965:
case 2750:
case 84:
case 242:
case 277:
case 1145:
case 3120:
case 2222:
case 2125:
case 1995:
case 1242:
case 1564:
case 579:
case 868:
case 3422:
case 3176:
case 995:
case 4025:
case 322:
case 2788:
case 26:
case 1951:
case 1404:
case 1219:
case 2789:
case 697:
case 4053:
case 3578:
case 3231:
case 1695:
case 2185:
case 898:
case 862:
case 248:
case 304:
case 796:
case 3895:
case 2019:
case 3067:
case 1668:
case 2456:
case 3579:
case 2808:
case 3180:
case 1636:
case 3974:
case 717:
case 581:
case 1954:
case 1401:
case 4067:
case 1559:
case 3164:
case 1220:
case 1258:
case 13:
case 3363:
case 3746:
case 623:
case 1259:
case 1520:
case 2906:
case 3437:
case 3390:
case 567:
case 1485:
case 4013:
case 2368:
case 2058:
case 616:
case 834:
case 3309:
case 3966:
case 3025:
case 3308:
case 1752:
case 422:
case 2395:
case 269:
case 3317:
case 2416:
case 1131:
case 3516:
case 2797:
case 3001:
case 57:
case 1654:
case 725:
case 1453:
case 961:
case 2061:
case 2351:
case 1280:
case 3085:
case 1561:
case 112:
case 1871:
case 1:
case 849:
case 1866:
case 2080:
case 1838:
case 3440:
case 738:
case 699:
case 2281:
case 1328:
case 2593:
case 3135:
case 1350:
case 1187:
case 2886:
case 3615:
case 285:
case 1329:
case 2610:
case 2581:
case 2733:
case 2293:
case 1754:
case 56:
case 3196:
case 971:
case 1815:
case 3343:
case 3162:
case 1081:
case 3994:
case 3766:
case 3500:
case 3875:
case 3599:
case 1093:
case 71:
case 2706:
case 2102:
case 435:
case 4047:
case 908:
case 1675:
case 3299:
case 3144:
case 3421:
case 137:
case 2505:
case 216:
case 4002:
case 2521:
case 2147:
case 2498:
case 98:
case 3460:
case 2499:
case 669:
case 310:
case 3646:
case 2221:
case 2465:
case 2400:
case 2997:
case 924:
case 103:
case 3915:
case 1894:
case 902:
case 4030:
case 1975:
case 3852:
case 3481:
case 3694:
case 1021:
case 2432:
case 279:
case 223:
case 3493:
case 1652:
case 1949:
case 3672:
case 2035:
case 1198:
case 1447:
case 2688:
case 2928:
case 146:
case 2777:
case 1872:
case 2524:
case 3326:
case 1562:
case 3955:
case 1100:
case 3030:
case 1244:
case 1165:
case 1703:
case 2929:
case 2689:
case 2352:
case 2062:
case 1024:
case 1769:
case 3812:
case 599:
case 1596:
case 3683:
case 3002:
case 297:
case 1132:
case 3484:
case 3587:
case 335:
case 1751:
case 3047:
case 281:
case 2487:
case 677:
case 2629:
case 200:
case 1649:
case 975:
case 1397:
case 2284:
case 2628:
case 2650:
case 267:
case 3623:
case 3983:
case 150:
case 2375:
case 3774:
case 69:
case 3141:
case 3424:
case 3527:
case 2843:
case 1084:
case 569:
case 3370:
case 1780:
case 1941:
case 3632:
case 2494:
case 2597:
case 2075:
case 775:
case 2210:
case 3716:
case 3112:
case 52:
case 3070:
case 2921:
case 3699:
case 305:
case 336:
case 3347:
case 1898:
case 1761:
case 1010:
case 293:
case 976:
case 1097:
case 3698:
case 831:
case 2660:
case 1800:
case 1426:
case 2362:
case 3841:
case 629:
case 673:
case 3246:
case 2981:
case 1641:
case 1720:
case 3932:
case 1470:
case 1123:
case 2344:
case 2905:
case 2335:
case 472:
case 211:
case 3294:
case 2960:
case 3149:
case 3999:
case 3965:
case 3026:
case 3497:
case 3148:
case 2289:
case 3175:
case 4026:
case 3572:
case 1719:
case 2341:
case 3862:
case 2423:
case 347:
case 2288:
case 2589:
case 372:
case 754:
case 2170:
case 1718:
case 2984:
case 2802:
case 215:
case 62:
case 1696:
case 141:
case 3450:
case 3591:
case 1212:
case 3778:
case 702:
case 3896:
case 3927:
case 1088:
case 3731:
case 1512:
case 2228:
case 3043:
case 2483:
case 378:
case 1249:
case 1194:
case 3555:
case 2684:
case 2924:
case 771:
case 2550:
case 1944:
case 2229:
case 1248:
case 708:
case 529:
case 573:
case 1360:
case 1935:
case 1742:
case 3523:
case 2847:
case 160:
case 3489:
case 2472:
case 1029:
case 2126:
case 1764:
case 1996:
case 1827:
case 3488:
case 227:
case 835:
case 380:
case 1214:
case 2973:
case 713:
case 761:
case 2784:
case 1907:
case 1918:
case 188:
case 1919:
case 3864:
case 3727:
case 34:
case 3574:
case 2014:
case 787:
case 3931:
case 511:
case 726:
case 2361:
case 1463:
case 3842:
case 449:
case 182:
case 1139:
case 1203:
case 3090:
case 1744:
case 2068:
case 2358:
case 2320:
case 804:
case 2673:
case 1503:
case 1138:
case 3956:
case 25:
case 1166:
case 2095:
case 1618:
case 284:
case 2359:
case 2474:
case 2577:
case 1236:
case 1964:
case 852:
case 1077:
case 1569:
case 1595:
case 1879:
case 10:
case 3063:
case 3787:
case 2813:
case 530:
case 1735:
case 1295:
case 1568:
case 3679:
case 4063:
case 611:
case 1845:
case 2307:
case 2721:
case 2471:
case 1174:
case 795:
case 334:
case 3057:
case 3367:
case 2319:
case 2466:
case 2825:
case 462:
case 996:
case 4008:
case 1976:
case 557:
case 4090:
case 3313:
case 4009:
case 1834:
case 1382:
case 765:
case 921:
case 1920:
case 3732:
case 3292:
case 3136:
case 1680:
case 3616:
case 2109:
case 349:
case 1211:
case 44:
case 951:
case 1457:
case 2533:
case 3195:
case 2940:
case 1816:
case 2117:
case 3538:
case 3239:
case 515:
case 3876:
case 1033:
case 2206:
case 2705:
case 468:
case 3238:
case 966:
case 3571:
case 2760:
case 3881:
case 3452:
case 968:
case 992:
case 582:
case 1494:
case 2780:
case 2941:
case 2191:
case 1921:
case 3785:
case 355:
case 1737:
case 2384:
case 2010:
case 3570:
case 4023:
case 3860:
case 3805:
case 1446:
case 2898:
case 865:
case 3189:
case 2776:
case 2172:
case 2426:
case 3327:
case 3701:
case 3188:
case 3015:
case 2899:
case 193:
case 2575:
case 1621:
case 3094:
case 1740:
case 4072:
case 3475:
case 2759:
case 1143:
case 1362:
case 3526:
case 2123:
case 1344:
case 496:
case 3821:
case 317:
case 1993:
case 2641:
case 2720:
case 245:
case 1960:
case 3387:
case 111:
case 3753:
case 2252:
case 3150:
case 163:
case 1415:
case 4083:
case 474:
case 1396:
case 2155:
case 2552:
case 895:
case 383:
case 2719:
case 3602:
case 374:
case 1289:
case 1588:
case 2644:
case 2662:
case 1984:
case 934:
case 1170:
case 722:
case 1423:
case 704:
case 2212:
case 417:
case 3110:
case 3947:
case 1186:
case 2887:
case 2089:
case 3713:
case 3449:
case 2512:
case 891:
case 3448:
case 1924:
case 2548:
case 887:
case 2249:
case 1483:
case 2381:
case 1250:
case 3332:
case 3884:
case 2248:
case 351:
case 3023:
case 2549:
case 826:
case 758:
case 1229:
case 2944:
case 1491:
case 1847:
case 861:
case 2360:
case 2028:
case 813:
case 3055:
case 3647:
case 3543:
case 2764:
case 2996:
case 1126:
case 1722:
case 425:
case 2490:
case 2551:
case 3436:
case 660:
case 2409:
case 319:
case 808:
case 1973:
case 394:
case 41:
case 3967:
case 1380:
case 2408:
case 2514:
case 2417:
case 2642:
case 3403:
case 871:
case 438:
case 936:
case 545:
case 1014:
case 1376:
case 4038:
case 3604:
case 1361:
case 3747:
case 1622:
case 1982:
case 607:
case 3702:
case 1358:
case 641:
case 3106:
case 3563:
case 2744:
case 3873:
case 282:
case 1474:
case 2618:
case 1069:
case 1095:
case 1867:
case 2607:
case 2340:
case 2138:
case 2503:
case 802:
case 1673:
case 690:
case 2879:
case 3508:
case 2268:
case 2831:
case 3133:
case 2569:
case 3613:
case 2192:
case 3730:
case 2295:
case 3904:
case 3882:
case 3590:
case 1439:
case 332:
case 1471:
case 2373:
case 3625:
case 3985:
case 1307:
case 2845:
case 1318:
case 209:
case 2659:
case 972:
case 1825:
case 1438:
case 3840:
case 2658:
case 2620:
case 2980:
case 1319:
case 2174:
case 889:
case 3653:
case 1492:
case 129:
case 3331:
case 3557:
case 3454:
case 2382:
case 464:
case 3378:
case 159:
case 3257:
case 743:
case 1233:
case 2680:
case 3837:
case 3039:
case 1117:
case 2816:
case 1108:
case 1940:
case 3066:
case 3356:
case 2457:
case 731:
case 3038:
case 1637:
case 1206:
case 494:
case 31:
case 3177:
case 2661:
case 901:
case 541:
case 1760:
case 3953:
case 590:
case 533:
case 1011:
case 1163:
case 1342:
case 419:
case 3601:
case 1431:
case 2903:
case 2022:
case 19:
case 2748:
case 4016:
case 2651:
case 3963:
case 503:
case 620:
case 943:
case 778:
case 1311:
case 2134:
case 3407:
case 3504:
case 475:
case 3990:
case 2264:
case 2145:
case 2306:
case 177:
case 142:
case 780:
case 244:
case 819:
case 308:
case 3204:
case 3419:
case 3743:
case 2564:
case 2467:
case 701:
case 2242:
case 1125:
case 3908:
case 3917:
case 3663:
case 1101:
case 1788:
case 772:
case 3877:
case 354:
case 2218:
case 3567:
case 3031:
case 3079:
case 2082:
case 1789:
case 1573:
case 1677:
case 3078:
case 324:
case 2219:
case 3267:
case 16:
case 2951:
case 2404:
case 2507:
case 302:
case 2073:
case 1890:
case 3137:
case 1007:
case 1185:
case 2669:
case 239:
case 3617:
case 1456:
case 1019:
case 1817:
case 2712:
case 864:
case 2116:
case 3609:
case 3122:
case 3726:
case 2220:
case 2258:
case 2559:
case 2954:
case 2401:
case 1933:
case 1303:
case 1540:
case 2520:
case 2259:
case 1240:
case 3225:
case 3034:
case 3657:
case 3045:
case 1058:
case 1368:
case 4078:
case 3553:
case 424:
case 1336:
case 1906:
case 218:
case 1416:
case 1369:
case 1059:
case 169:
case 1395:
case 2156:
case 3253:
case 2892:
case 1797:
case 408:
case 906:
case 4056:
case 1314:
case 2453:
case 3786:
case 1434:
case 1537:
case 3182:
case 375:
case 1710:
case 637:
case 3585:
case 81:
case 2654:
case 1633:
case 2871:
case 2561:
case 3201:
case 3806:
case 3458:
case 3770:
case 838:
case 736:
case 2425:
case 3501:
case 3016:
case 3459:
case 2:
case 2711:
case 3098:
case 1697:
case 2005:
case 2328:
case 2060:
case 456:
case 958:
case 3810:
case 612:
case 487:
case 365:
case 3099:
case 3897:
case 1130:
case 3355:
case 3065:
case 1348:
case 1293:
case 1733:
case 426:
case 1581:
case 2329:
case 1205:
case 855:
case 539:
case 3441:
case 1260:
case 3124:
case 3032:
case 825:
case 2675:
case 2093:
case 1560:
case 395:
case 734:
case 883:
case 2241:
case 3986:
case 1147:
case 1498:
case 1910:
case 922:
case 116:
case 2541:
case 1400:
case 1997:
case 1826:
case 2388:
case 618:
case 3383:
case 3757:
case 440:
case 153:
case 2975:
case 1312:
case 2894:
case 3391:
case 123:
case 491:
case 3970:
case 3184:
case 2021:
case 3889:
case 762:
case 1688:
case 3087:
case 1950:
case 1928:
case 2544:
case 1224:
case 1035:
case 3160:
case 3502:
case 1929:
case 340:
case 1096:
case 2703:
case 2165:
case 2562:
case 1427:
case 3394:
case 3943:
case 2596:
case 512:
case 2883:
case 1062:
case 3708:
case 495:
case 3790:
case 2132:
case 3709:
case 874:
case 5:
case 197:
case 2535:
case 3193:
case 4032:
case 1989:
case 2310:
case 3850:
case 3435:
case 1487:
case 2648:
case 181:
case 866:
case 768:
case 313:
case 2714:
case 3829:
case 792:
case 1284:
case 2430:
case 361:
case 2855:
case 644:
case 1843:
case 4065:
case 250:
case 1375:
case 3247:
case 3643:
case 74:
case 518:
case 220:
case 3547:
case 2084:
case 2414:
case 2517:
case 3569:
case 1678:
case 3077:
case 3879:
case 3268:
case 1154:
case 3236:
case 3796:
case 911:
case 2208:
case 1631:
case 3735:
case 3295:
case 3536:
case 1787:
case 1353:
case 1111:
case 2106:
case 77:
case 3619:
case 2702:
case 2345:
case 3171:
case 525:
case 1090:
case 1819:
case 1008:
case 839:
case 1017:
case 555:
case 162:
case 198:
case 2263:
case 1956:
case 1325:
case 3503:
case 1931:
case 2403:
case 14:
case 621:
case 1574:
case 1477:
case 1978:
case 767:
case 3664:
case 3337:
case 3490:
case 3918:
case 192:
case 844:
case 168:
case 3214:
case 219:
case 2468:
case 1656:
case 517:
case 294:
case 4033:
case 2074:
case 2495:
case 1876:
case 1700:
case 1538:
case 1271:
case 986:
case 1799:
case 1239:
case 1934:
case 1238:
case 1798:
case 1571:
case 1539:
case 3254:
case 3006:
case 149:
case 8:
case 1945:
case 1292:
case 2356:
case 2066:
case 2925:
case 1195:
case 470:
case 1169:
case 238:
case 3816:
case 3211:
case 3959:
case 812:
case 785:
case 2038:
case 915:
case 2653:
case 1634:
case 2901:
case 1433:
case 779:
case 566:
case 1313:
case 3834:
case 2257:
case 753:
case 2625:
case 232:
case 3373:
case 309:
case 3659:
case 818:
case 1820:
case 1858:
case 551:
case 1916:
case 134:
case 1859:
case 3174:
case 3980:
case 3741:
case 3658:
case 1057:
case 1645:
case 2387:
case 1294:
case 3486:
case 345:
case 1149:
case 803:
case 769:
case 1998:
case 2128:
case 2150:
case 1330:
case 1900:
case 1148:
case 1497:
case 1594:
case 576:
case 283:
case 2129:
case 1999:
case 3552:
case 1026:
case 1246:
case 433:
case 490:
case 1841:
case 4088:
case 3123:
case 217:
case 1546:
case 1745:
case 3720:
case 3641:
case 95:
case 441:
case 3470:
case 984:
case 2860:
case 3010:
case 714:
case 3275:
case 2805:
case 3761:
case 1665:
case 1086:
case 3426:
case 3800:
case 2327:
case 2270:
case 799:
case 2015:
case 3899:
case 3865:
case 3097:
case 2881:
case 2452:
case 2286:
case 4029:
case 1632:
case 61:
case 225:
case 1070:
case 3191:
case 2893:
case 460:
case 2785:
case 3832:
case 4050:
case 1215:
case 2398:
case 3935:
case 3305:
case 3742:
case 3146:
case 360:
case 1489:
case 2243:
case 1987:
case 3050:
case 3360:
case 3028:
case 2055:
case 2365:
case 1488:
case 180:
case 2399:
case 266:
case 694:
case 3029:
case 3827:
case 3764:
case 820:
case 221:
case 3194:
case 3962:
case 3381:
case 1756:
case 1043:
case 178:
case 2412:
case 850:
case 3549:
case 2884:
case 2023:
case 1255:
case 251:
case 3393:
case 51:
case 1428:
case 296:
case 3212:
case 748:
case 973:
case 3089:
case 2449:
case 664:
case 2713:
case 341:
case 3696:
case 3887:
case 1731:
case 1583:
case 1779:
case 3512:
case 333:
case 2197:
case 2083:
case 3719:
case 1272:
case 3662:
case 3707:
case 147:
case 3321:
case 3975:
case 759:
case 2383:
case 3894:
case 508:
case 729:
case 2970:
case 3241:
case 2986:
case 2626:
case 295:
case 689:
case 3846:
case 1405:
case 3127:
case 96:
case 2372:
case 110:
case 4024:
case 1646:
case 1599:
case 942:
case 3952:
case 1565:
case 1500:
case 3081:
case 1162:
case 1299:
case 3675:
case 1771:
case 337:
case 1265:
case 1421:
case 2323:
case 3093:
case 675:
case 2098:
case 99:
case 1615:
case 3711:
case 554:
case 2810:
case 3350:
case 58:
case 2065:
case 2686:
case 1196:
case 1792:
case 1232:
case 265:
case 1141:
case 1424:
case 2462:
case 2247:
case 807:
case 1983:
case 1623:
case 350:
case 226:
case 4005:
case 671:
case 2643:
case 2547:
case 3084:
case 320:
case 256:
case 2828:
case 3310:
case 437:
case 4093:
case 1655:
case 1386:
case 2027:
case 2829:
case 3714:
case 213:
case 2315:
case 4081:
case 860:
case 1972:
case 2496:
case 1848:
case 654:
case 3596:
case 68:
case 2943:
case 1287:
case 1691:
case 3795:
case 2181:
case 1812:
case 3769:
case 2717:
case 624:
case 1484:
case 3535:
case 2193:
case 1002:
case 3768:
case 3612:
case 2709:
case 2105:
case 2763:
case 3544:
case 346:
case 2889:
case 1672:
case 602:
case 833:
case 2160:
case 75:
case 1030:
case 3165:
case 3872:
case 3100:
case 1955:
case 1326:
case 2202:
case 1836:
case 691:
case 2513:
case 202:
case 3073:
case 1578:
case 2608:
case 1791:
case 1231:
case 3636:
case 1180:
case 2690:
case 1974:
case 2213:
case 43:
case 1869:
case 923:
case 3116:
case 640:
case 1278:
case 3712:
case 1357:
case 1067:
case 1895:
case 3914:
case 122:
case 2663:
case 1803:
case 3519:
case 2031:
case 1422:
case 2079:
case 2877:
case 254:
case 1176:
case 3218:
case 1013:
case 2267:
case 80:
case 3507:
case 3404:
case 2078:
case 2990:
case 2504:
case 2407:
case 3936:
case 1120:
case 3264:
case 888:
case 2418:
case 1674:
case 3968:
case 1723:
case 2056:
case 3564:
case 661:
case 344:
case 786:
case 3969:
case 626:
case 3333:
case 1556:
case 2392:
case 2963:
case 3413:
case 2201:
case 967:
case 2770:
case 3276:
case 2458:
case 2420:
case 1107:
case 1666:
case 3838:
case 3425:
case 3261:
case 2501:
case 2957:
case 1671:
case 3775:
case 1639:
case 2016:
case 3576:
case 2459:
case 1119:
case 3866:
case 3611:
case 1001:
case 3892:
case 981:
case 3179:
case 1854:
case 2833:
case 275:
case 1811:
case 900:
case 2182:
case 2585:
case 3178:
case 1216:
case 2657:
case 2045:
case 3485:
case 1939:
case 1971:
case 526:
case 695:
case 3752:
case 809:
case 763:
case 1317:
case 1234:
case 1794:
case 3040:
case 1966:
case 711:
case 3559:
case 2476:
case 33:
case 2122:
case 3220:
case 1245:
case 3258:
case 3954:
case 3911:
case 3520:
case 4073:
case 1746:
case 561:
case 2461:
case 2225:
case 2034:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1754082002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,];
var gg_b = "1754082002/";

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
