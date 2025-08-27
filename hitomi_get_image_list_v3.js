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
case 1688:
case 3912:
case 3703:
case 2716:
case 3847:
case 258:
case 1702:
case 2950:
case 1945:
case 1108:
case 1:
case 3599:
case 3214:
case 894:
case 2764:
case 338:
case 2454:
case 1124:
case 698:
case 859:
case 2362:
case 2109:
case 195:
case 369:
case 1334:
case 3067:
case 2329:
case 1563:
case 2139:
case 82:
case 1304:
case 1411:
case 163:
case 2627:
case 118:
case 2546:
case 3535:
case 689:
case 3722:
case 615:
case 3308:
case 2219:
case 3082:
case 3873:
case 3505:
case 2335:
case 1083:
case 2125:
case 2440:
case 3587:
case 509:
case 1765:
case 2855:
case 2472:
case 4010:
case 442:
case 1840:
case 2195:
case 144:
case 2600:
case 876:
case 2944:
case 3198:
case 1539:
case 3134:
case 2242:
case 682:
case 91:
case 601:
case 2021:
case 3324:
case 1793:
case 4079:
case 2996:
case 2180:
case 3811:
case 1957:
case 2324:
case 1243:
case 3697:
case 3630:
case 967:
case 3180:
case 3163:
case 2684:
case 1309:
case 2792:
case 2134:
case 2858:
case 3524:
case 3944:
case 1473:
case 1129:
case 3472:
case 306:
case 1339:
case 3781:
case 757:
case 920:
case 3125:
case 2338:
case 3508:
case 2128:
case 1199:
case 2346:
case 2505:
case 2873:
case 1859:
case 2082:
case 2722:
case 477:
case 3270:
case 3387:
case 3538:
case 3926:
case 3305:
case 2562:
case 3689:
case 1001:
case 1534:
case 2067:
case 4074:
case 3329:
case 3109:
case 1504:
case 1971:
case 2949:
case 1277:
case 3454:
case 911:
case 1380:
case 60:
case 1076:
case 2214:
case 2599:
case 1105:
case 905:
case 238:
case 1948:
case 3950:
case 1690:
case 1936:
case 1685:
case 832:
case 2661:
case 358:
case 58:
case 2847:
case 1325:
case 2912:
case 1607:
case 868:
case 1906:
case 3806:
case 863:
case 796:
case 2161:
case 1635:
case 2023:
case 353:
case 3279:
case 488:
case 1185:
case 212:
case 1687:
case 471:
case 1850:
case 2783:
case 3836:
case 1190:
case 2954:
case 1327:
case 3449:
case 350:
case 3356:
case 844:
case 3871:
case 285:
case 1120:
case 2450:
case 1445:
case 3609:
case 1413:
case 1275:
case 614:
case 3412:
case 1584:
case 1561:
case 3127:
case 1016:
case 2496:
case 2585:
case 928:
case 3776:
case 1064:
case 3959:
case 2032:
case 2628:
case 3385:
case 152:
case 492:
case 2972:
case 2388:
case 2537:
case 1389:
case 2604:
case 2940:
case 3731:
case 2698:
case 4014:
case 3100:
case 895:
case 1844:
case 2634:
case 2184:
case 1662:
case 3680:
case 1911:
case 1896:
case 3130:
case 3197:
case 917:
case 73:
case 2857:
case 2663:
case 3426:
case 1767:
case 2130:
case 2197:
case 729:
case 2701:
case 3184:
case 1958:
case 904:
case 75:
case 2695:
case 3940:
case 3972:
case 3537:
case 3590:
case 570:
case 1361:
case 3444:
case 1973:
case 2385:
case 3628:
case 986:
case 2959:
case 3032:
case 110:
case 665:
case 132:
case 2588:
case 3507:
case 3274:
case 3585:
case 3002:
case 3496:
case 113:
case 2412:
case 690:
case 1597:
case 3065:
case 3450:
case 385:
case 607:
case 2609:
case 731:
case 1384:
case 2871:
case 1624:
case 1448:
case 4019:
case 1694:
case 3954:
case 1782:
case 1069:
case 3783:
case 312:
case 3760:
case 426:
case 2836:
case 3845:
case 1527:
case 1646:
case 3161:
case 1253:
case 1241:
case 253:
case 1188:
case 1094:
case 2414:
case 1008:
case 191:
case 1591:
case 1382:
case 620:
case 3623:
case 4026:
case 1622:
case 771:
case 3952:
case 2979:
case 3693:
case 1941:
case 1953:
case 2756:
case 3167:
case 1866:
case 1521:
case 2009:
case 667:
case 4044:
case 2668:
case 788:
case 1814:
case 3254:
case 1477:
case 474:
case 1633:
case 3240:
case 512:
case 2737:
case 172:
case 2025:
case 940:
case 4050:
case 3182:
case 3632:
case 3576:
case 3028:
case 43:
case 1258:
case 1603:
case 605:
case 2707:
case 387:
case 943:
case 3470:
case 2191:
case 2376:
case 2080:
case 2063:
case 2121:
case 792:
case 2331:
case 90:
case 3034:
case 3098:
case 1273:
case 841:
case 1367:
case 2095:
case 3531:
case 216:
case 3301:
case 734:
case 1029:
case 77:
case 2098:
case 3259:
case 2034:
case 3331:
case 2442:
case 998:
case 1789:
case 3063:
case 3080:
case 1567:
case 3785:
case 3191:
case 1211:
case 1917:
case 19:
case 2602:
case 3843:
case 1842:
case 2470:
case 4012:
case 825:
case 1099:
case 2818:
case 550:
case 2576:
case 429:
case 3790:
case 2240:
case 3815:
case 1255:
case 3025:
case 61:
case 2254:
case 3009:
case 1681:
case 3979:
case 2693:
case 3756:
case 1101:
case 84:
case 136:
case 2952:
case 1975:
case 2360:
case 897:
case 1035:
case 273:
case 3466:
case 2623:
case 3560:
case 1391:
case 1582:
case 1005:
case 270:
case 1176:
case 872:
case 965:
case 2564:
case 1977:
case 2249:
case 1271:
case 281:
case 584:
case 446:
case 1725:
case 4072:
case 3533:
case 202:
case 2479:
case 2123:
case 1502:
case 1453:
case 2061:
case 2878:
case 686:
case 2333:
case 3503:
case 3452:
case 604:
case 3089:
case 1763:
case 2853:
case 1478:
case 1236:
case 4040:
case 209:
case 1181:
case 506:
case 1631:
case 2165:
case 141:
case 1020:
case 2914:
case 879:
case 2708:
case 1915:
case 437:
case 2794:
case 3705:
case 891:
case 3244:
case 4054:
case 2682:
case 3942:
case 2738:
case 2746:
case 3735:
case 3474:
case 1943:
case 3691:
case 3817:
case 38:
case 3030:
case 1056:
case 3592:
case 2084:
case 3381:
case 749:
case 3970:
case 993:
case 856:
case 3919:
case 2724:
case 2581:
case 3581:
case 569:
case 2000:
case 3084:
case 2592:
case 661:
case 2970:
case 836:
case 2097:
case 1874:
case 3102:
case 2735:
case 3369:
case 28:
case 2817:
case 2691:
case 2474:
case 2942:
case 948:
case 1103:
case 100:
case 3132:
case 2244:
case 538:
case 3682:
case 1660:
case 3708:
case 2787:
case 1683:
case 562:
case 824:
case 2168:
case 1704:
case 3165:
case 847:
case 3841:
case 3966:
case 3193:
case 1192:
case 2089:
case 1088:
case 89:
case 2452:
case 2875:
case 3878:
case 3410:
case 3303:
case 125:
case 1302:
case 4059:
case 2316:
case 1614:
case 768:
case 4029:
case 3374:
case 2868:
case 2071:
case 2290:
case 2237:
case 2931:
case 687:
case 732:
case 424:
case 305:
case 2285:
case 1666:
case 3893:
case 2574:
case 2901:
case 2492:
case 1822:
case 1012:
case 3013:
case 1517:
case 15:
case 3178:
case 49:
case 3045:
case 129:
case 3772:
case 739:
case 1869:
case 2759:
case 590:
case 1468:
case 3352:
case 3510:
case 2433:
case 1353:
case 2379:
case 984:
case 323:
case 2057:
case 670:
case 1174:
case 4035:
case 3802:
case 1747:
case 21:
case 1284:
case 1982:
case 906:
case 3618:
case 1378:
case 4087:
case 2615:
case 3960:
case 1786:
case 2960:
case 491:
case 2983:
case 1375:
case 4094:
case 2618:
case 2832:
case 837:
case 4038:
case 267:
case 3651:
case 1991:
case 3643:
case 3256:
case 31:
case 1026:
case 3117:
case 1096:
case 1402:
case 3057:
case 1921:
case 1432:
case 4024:
case 1619:
case 456:
case 2510:
case 196:
case 3433:
case 2352:
case 3677:
case 72:
case 3048:
case 13:
case 174:
case 514:
case 211:
case 472:
case 2772:
case 408:
case 616:
case 0:
case 3492:
case 1289:
case 759:
case 3175:
case 752:
case 3901:
case 2288:
case 1423:
case 3285:
case 2893:
case 3931:
case 3290:
case 1110:
case 938:
case 962:
case 3868:
case 2374:
case 68:
case 3205:
case 2294:
case 2476:
case 1968:
case 2208:
case 3287:
case 1831:
case 3981:
case 933:
case 3235:
case 3796:
case 543:
case 1679:
case 44:
case 2867:
case 2238:
case 1801:
case 2570:
case 2401:
case 2542:
case 157:
case 2047:
case 1467:
case 3086:
case 3342:
case 1209:
case 1518:
case 1876:
case 1225:
case 3460:
case 1482:
case 1771:
case 2749:
case 2366:
case 3299:
case 2058:
case 228:
case 3821:
case 3011:
case 36:
case 3617:
case 3143:
case 3916:
case 4088:
case 1142:
case 1706:
case 85:
case 2903:
case 3262:
case 217:
case 1059:
case 2073:
case 1748:
case 304:
case 1736:
case 2933:
case 3750:
case 3115:
case 83:
case 501:
case 4037:
case 1072:
case 1860:
case 2115:
case 3933:
case 146:
case 3073:
case 3882:
case 874:
case 1577:
case 1234:
case 317:
case 609:
case 3903:
case 2617:
case 26:
case 4085:
case 1713:
case 1902:
case 2916:
case 2143:
case 1421:
case 328:
case 1674:
case 3314:
case 602:
case 3058:
case 1228:
case 1040:
case 2483:
case 286:
case 3224:
case 1054:
case 2342:
case 361:
case 1515:
case 3678:
case 3047:
case 1543:
case 1551:
case 744:
case 3992:
case 953:
case 2796:
case 760:
case 3867:
case 4056:
case 3653:
case 1993:
case 2981:
case 2287:
case 1965:
case 2370:
case 950:
case 896:
case 3519:
case 2205:
case 2744:
case 763:
case 718:
case 3222:
case 1052:
case 3485:
case 315:
case 3437:
case 1149:
case 2171:
case 2719:
case 1718:
case 2326:
case 74:
case 1654:
case 2148:
case 826:
case 3420:
case 2686:
case 382:
case 1265:
case 2987:
case 3908:
case 2281:
case 3145:
case 2136:
case 3647:
case 3078:
case 3861:
case 3113:
case 2075:
case 1489:
case 177:
case 1888:
case 3938:
case 517:
case 2742:
case 2106:
case 1074:
case 2157:
case 3349:
case 3766:
case 2216:
case 638:
case 1202:
case 2830:
case 2897:
case 2611:
case 2962:
case 4001:
case 725:
case 2549:
case 2264:
case 2800:
case 1232:
case 1640:
case 2655:
case 3550:
case 561:
case 4076:
case 2999:
case 1400:
case 1313:
case 180:
case 1548:
case 669:
case 1506:
case 834:
case 2017:
case 398:
case 1126:
case 2456:
case 3827:
case 298:
case 1513:
case 3512:
case 1336:
case 854:
case 4:
case 1777:
case 1659:
case 2714:
case 658:
case 3264:
case 3549:
case 899:
case 340:
case 1144:
case 1856:
case 3216:
case 343:
case 1196:
case 3830:
case 1980:
case 3075:
case 3106:
case 606:
case 2938:
case 2292:
case 2526:
case 2861:
case 463:
case 2647:
case 56:
case 2946:
case 3935:
case 418:
case 282:
case 1715:
case 2420:
case 201:
case 2908:
case 1268:
case 3326:
case 3148:
case 2994:
case 871:
case 3905:
case 3719:
case 2544:
case 2269:
case 1010:
case 215:
case 970:
case 1820:
case 289:
case 586:
case 2437:
case 2053:
case 2596:
case 2485:
case 2041:
case 1939:
case 3889:
case 2222:
case 684:
case 3488:
case 2407:
case 978:
case 1355:
case 1989:
case 2774:
case 835:
case 2487:
case 265:
case 1558:
case 3276:
case 2405:
case 3494:
case 902:
case 3671:
case 3648:
case 3424:
case 2559:
case 2645:
case 3636:
case 3572:
case 880:
case 1887:
case 3231:
case 3186:
case 1717:
case 17:
case 468:
case 1835:
case 3359:
case 432:
case 3606:
case 724:
case 4003:
case 3907:
case 3111:
case 1696:
case 3880:
case 1930:
case 1291:
case 3657:
case 3779:
case 348:
case 4092:
case 2158:
case 2499:
case 1900:
case 1019:
case 1829:
case 3710:
case 2260:
case 3895:
case 2804:
case 3015:
case 1404:
case 2018:
case 4069:
case 1159:
case 290:
case 207:
case 4022:
case 2462:
case 1042:
case 1434:
case 1221:
case 3051:
case 2354:
case 877:
case 293:
case 3354:
case 1778:
case 2043:
case 188:
case 1463:
case 1480:
case 3462:
case 619:
case 307:
case 685:
case 756:
case 3018:
case 3828:
case 1347:
case 3429:
case 445:
case 1586:
case 511:
case 214:
case 3260:
case 2710:
case 3283:
case 1425:
case 1140:
case 4081:
case 3499:
case 1282:
case 3898:
case 842:
case 612:
case 98:
case 3834:
case 2956:
case 633:
case 2111:
case 2863:
case 248:
case 2779:
case 2657:
case 2880:
case 3372:
case 2201:
case 1838:
case 3613:
case 4016:
case 3147:
case 452:
case 2572:
case 2186:
case 154:
case 2231:
case 1808:
case 2937:
case 2077:
case 2424:
case 1894:
case 3559:
case 2276:
case 708:
case 2494:
case 1649:
case 3405:
case 855:
case 2920:
case 1555:
case 2540:
case 365:
case 2408:
case 459:
case 42:
case 523:
case 3435:
case 3340:
case 2438:
case 3530:
case 3597:
case 448:
case 2300:
case 957:
case 1093:
case 1556:
case 3406:
case 2584:
case 2275:
case 3624:
case 3448:
case 3849:
case 2445:
case 2081:
case 119:
case 579:
case 1065:
case 767:
case 321:
case 185:
case 572:
case 2137:
case 2190:
case 414:
case 2850:
case 4015:
case 112:
case 1760:
case 2687:
case 3069:
case 3694:
case 723:
case 884:
case 3188:
case 1252:
case 1813:
case 3253:
case 4051:
case 508:
case 720:
case 3646:
case 1184:
case 1634:
case 3589:
case 1426:
case 2156:
case 556:
case 1940:
case 259:
case 2389:
case 2844:
case 3958:
case 1698:
case 1444:
case 310:
case 4077:
case 3361:
case 1388:
case 1537:
case 1590:
case 1585:
case 1002:
case 368:
case 1274:
case 1507:
case 858:
case 1390:
case 232:
case 213:
case 3826:
case 2457:
case 1127:
case 268:
case 1625:
case 1307:
case 2033:
case 838:
case 210:
case 2973:
case 1385:
case 3064:
case 862:
case 2361:
case 946:
case 3844:
case 1100:
case 67:
case 465:
case 1731:
case 3389:
case 3955:
case 634:
case 1130:
case 1197:
case 2767:
case 3156:
case 1680:
case 1857:
case 3217:
case 3911:
case 32:
case 1320:
case 1279:
case 2241:
case 59:
case 153:
case 3185:
case 2253:
case 3791:
case 2646:
case 2638:
case 407:
case 150:
case 490:
case 2782:
case 3605:
case 2471:
case 3327:
case 2694:
case 1836:
case 3986:
case 2608:
case 2436:
case 3445:
case 2384:
case 1609:
case 221:
case 3120:
case 2448:
case 2500:
case 1356:
case 1068:
case 2849:
case 2406:
case 3584:
case 547:
case 626:
case 1412:
case 3413:
case 2278:
case 2398:
case 2580:
case 1329:
case 1689:
case 3001:
case 3534:
case 95:
case 2304:
case 3598:
case 3363:
case 3971:
case 2124:
case 2486:
case 3620:
case 2334:
case 2108:
case 3187:
case 3936:
case 2525:
case 1950:
case 3637:
case 2732:
case 1764:
case 3528:
case 2854:
case 2:
case 2138:
case 655:
case 3325:
case 3607:
case 2688:
case 158:
case 1399:
case 3309:
case 227:
case 3656:
case 4041:
case 1996:
case 1163:
case 2793:
case 1630:
case 1781:
case 244:
case 541:
case 3215:
case 1855:
case 415:
case 3473:
case 1944:
case 885:
case 3129:
case 2218:
case 3768:
case 812:
case 1335:
case 3859:
case 1594:
case 260:
case 2455:
case 2872:
case 2060:
case 482:
case 401:
case 1546:
case 1305:
case 2723:
case 1091:
case 218:
case 4078:
case 263:
case 1926:
case 1538:
case 642:
case 1270:
case 830:
case 1308:
case 853:
case 3723:
case 3083:
case 3060:
case 3872:
case 850:
case 3455:
case 1769:
case 1873:
case 1505:
case 360:
case 1128:
case 2458:
case 2129:
case 3218:
case 3840:
case 344:
case 2215:
case 2243:
case 2957:
case 3793:
case 1792:
case 3539:
case 761:
case 1684:
case 3913:
case 3702:
case 2135:
case 503:
case 3328:
case 4017:
case 3138:
case 597:
case 1703:
case 3194:
case 138:
case 728:
case 3:
case 1214:
case 3854:
case 2528:
case 3945:
case 2936:
case 635:
case 162:
case 3108:
case 2690:
case 464:
case 3525:
case 3486:
case 169:
case 2380:
case 683:
case 974:
case 3124:
case 1949:
case 1562:
case 54:
case 3563:
case 443:
case 3580:
case 3398:
case 680:
case 1067:
case 2810:
case 1165:
case 2631:
case 241:
case 2020:
case 544:
case 2181:
case 3798:
case 816:
case 1212:
case 2601:
case 527:
case 646:
case 1193:
case 4011:
case 2478:
case 1667:
case 1853:
case 1841:
case 2879:
case 2763:
case 1061:
case 1516:
case 1123:
case 46:
case 3122:
case 3088:
case 2007:
case 1564:
case 1249:
case 3302:
case 2532:
case 1410:
case 325:
case 2090:
case 3393:
case 1724:
case 1392:
case 595:
case 2056:
case 3417:
case 3874:
case 3365:
case 397:
case 1738:
case 2951:
case 2116:
case 2943:
case 1369:
case 1102:
case 2523:
case 3133:
case 2164:
case 3918:
case 5:
case 1132:
case 300:
case 1794:
case 3164:
case 2918:
case 200:
case 1569:
case 1244:
case 1705:
case 2133:
case 2683:
case 461:
case 2660:
case 3943:
case 1474:
case 1691:
case 1027:
case 18:
case 1817:
case 3257:
case 3951:
case 4047:
case 203:
case 297:
case 873:
case 1942:
case 2365:
case 3739:
case 988:
case 1381:
case 1592:
case 1226:
case 24:
case 3709:
case 657:
case 2393:
case 1919:
case 1000:
case 3725:
case 3037:
case 1316:
case 743:
case 3271:
case 2728:
case 2169:
case 3676:
case 2302:
case 1875:
case 2088:
case 740:
case 1364:
case 3085:
case 3478:
case 428:
case 1762:
case 2852:
case 1089:
case 3206:
case 2192:
case 4058:
case 1729:
case 70:
case 2798:
case 3020:
case 341:
case 3631:
case 2704:
case 3236:
case 1910:
case 559:
case 3681:
case 3286:
case 2477:
case 3321:
case 2024:
case 420:
case 1039:
case 714:
case 2692:
case 3101:
case 651:
case 2784:
case 2521:
case 1756:
case 3730:
case 2978:
case 1466:
case 2382:
case 3035:
case 3975:
case 2622:
case 467:
case 1877:
case 2669:
case 748:
case 3582:
case 3005:
case 1583:
case 291:
case 1560:
case 594:
case 3418:
case 809:
case 3029:
case 2273:
case 3819:
case 116:
case 1720:
case 2415:
case 324:
case 1301:
case 1095:
case 1121:
case 2451:
case 3567:
case 1063:
case 674:
case 983:
case 3870:
case 3789:
case 347:
case 1331:
case 39:
case 3211:
case 1851:
case 1376:
case 208:
case 3616:
case 935:
case 1815:
case 3255:
case 1790:
case 3099:
case 802:
case 1576:
case 2099:
case 1419:
case 372:
case 2255:
case 4036:
case 1240:
case 3761:
case 2211:
case 2616:
case 765:
case 3603:
case 2842:
case 622:
case 629:
case 1501:
case 1974:
case 1272:
case 3415:
case 1531:
case 224:
case 521:
case 4071:
case 2819:
case 3273:
case 2029:
case 391:
case 3008:
case 2176:
case 510:
case 2582:
case 1383:
case 2975:
case 88:
case 532:
case 41:
case 1623:
case 2727:
case 513:
case 3978:
case 3046:
case 568:
case 3382:
case 3591:
case 3866:
case 4057:
case 1693:
case 2730:
case 3692:
case 236:
case 539:
case 793:
case 3024:
case 866:
case 949:
case 3477:
case 2321:
case 2700:
case 2681:
case 631:
case 707:
case 337:
case 3515:
case 1431:
case 2351:
case 2239:
case 257:
case 81:
case 3543:
case 3318:
case 583:
case 4027:
case 3551:
case 3923:
case 1047:
case 1653:
case 1867:
case 600:
case 2757:
case 1570:
case 2801:
case 535:
case 1238:
case 1992:
case 1476:
case 3114:
case 2968:
case 603:
case 1519:
case 1294:
case 945:
case 4000:
case 3965:
case 2610:
case 697:
case 2831:
case 1208:
case 3577:
case 959:
case 1118:
case 2748:
case 1073:
case 3932:
case 1882:
case 3072:
case 3745:
case 2263:
case 3713:
case 2280:
case 117:
case 1712:
case 1903:
case 2142:
case 769:
case 4089:
case 762:
case 2170:
case 1314:
case 3674:
case 3491:
case 375:
case 2225:
case 3040:
case 994:
case 1058:
case 1366:
case 2228:
case 3771:
case 1299:
case 758:
case 3482:
case 3225:
case 910:
case 1055:
case 1460:
case 542:
case 2040:
case 409:
case 1821:
case 1011:
case 932:
case 2491:
case 2674:
case 3170:
case 968:
case 3706:
case 2234:
case 3142:
case 2421:
case 1151:
case 939:
case 1916:
case 4061:
case 2713:
case 16:
case 1115:
case 549:
case 2883:
case 246:
case 1750:
case 3736:
case 2204:
case 2745:
case 2577:
case 2298:
case 3748:
case 1229:
case 820:
case 2965:
case 555:
case 3610:
case 3968:
case 2114:
case 1205:
case 823:
case 2652:
case 3679:
case 1796:
case 2551:
case 2318:
case 3467:
case 1726:
case 2543:
case 3315:
case 357:
case 706:
case 3518:
case 3343:
case 2515:
case 237:
case 1086:
case 1342:
case 1036:
case 374:
case 1976:
case 33:
case 3317:
case 1677:
case 1048:
case 2869:
case 995:
case 3289:
case 487:
case 2822:
case 1175:
case 1006:
case 2517:
case 3493:
case 25:
case 2967:
case 2261:
case 1574:
case 3711:
case 3179:
case 1285:
case 828:
case 1422:
case 1207:
case 2892:
case 1868:
case 1071:
case 2049:
case 2758:
case 69:
case 222:
case 3110:
case 4004:
case 3881:
case 9:
case 944:
case 2378:
case 3864:
case 2982:
case 470:
case 3200:
case 351:
case 3375:
case 3786:
case 636:
case 3816:
case 1117:
case 3578:
case 11:
case 1651:
case 3991:
case 1643:
case 473:
case 3230:
case 3642:
case 1310:
case 1552:
case 1403:
case 963:
case 1057:
case 2174:
case 3096:
case 396:
case 1379:
case 2353:
case 1464:
case 730:
case 3353:
case 2044:
case 296:
case 2227:
case 733:
case 2096:
case 2402:
case 4039:
case 691:
case 712:
case 2670:
case 2642:
case 785:
case 3284:
case 2578:
case 2816:
case 1802:
case 2230:
case 2991:
case 1983:
case 2375:
case 251:
case 592:
case 2786:
case 2864:
case 3378:
case 1754:
case 2200:
case 1832:
case 105:
case 1865:
case 3758:
case 886:
case 3892:
case 1288:
case 2711:
case 1893:
case 2423:
case 4080:
case 3666:
case 1141:
case 588:
case 1178:
case 2493:
case 3517:
case 1823:
case 3822:
case 2289:
case 679:
case 2317:
case 23:
case 804:
case 3869:
case 4025:
case 2465:
case 3846:
case 3961:
case 1613:
case 27:
case 3612:
case 80:
case 3838:
case 1988:
case 3154:
case 2887:
case 354:
case 639:
case 392:
case 632:
case 165:
case 840:
case 3649:
case 1405:
case 668:
case 3824:
case 613:
case 2311:
case 1340:
case 1435:
case 3066:
case 3511:
case 3358:
case 2386:
case 621:
case 2042:
case 1462:
case 107:
case 2547:
case 3463:
case 3480:
case 453:
case 1354:
case 2927:
case 371:
case 226:
case 1173:
case 2498:
case 450:
case 1828:
case 2900:
case 2019:
case 1898:
case 1499:
case 2644:
case 2428:
case 3140:
case 522:
case 1260:
case 3741:
case 3753:
case 2696:
case 3984:
case 2070:
case 2984:
case 3997:
case 1880:
case 3930:
case 3291:
case 148:
case 2741:
case 1657:
case 1111:
case 4093:
case 1956:
case 1895:
case 419:
case 2140:
case 1710:
case 485:
case 1155:
case 2425:
case 3019:
case 3428:
case 3644:
case 3498:
case 882:
case 801:
case 2495:
case 2586:
case 3404:
case 412:
case 326:
case 2172:
case 271:
case 1015:
case 4023:
case 3626:
case 288:
case 3547:
case 1043:
case 3221:
case 3042:
case 3434:
case 3775:
case 2358:
case 2511:
case 2066:
case 1438:
case 652:
case 694:
case 3355:
case 3989:
case 1494:
case 2649:
case 3311:
case 3558:
case 1276:
case 2824:
case 1408:
case 299:
case 2555:
case 1809:
case 254:
case 551:
case 2808:
case 3887:
case 1231:
case 292:
case 2409:
case 62:
case 4032:
case 3573:
case 2894:
case 1424:
case 2154:
case 334:
case 1201:
case 2612:
case 1606:
case 2373:
case 4002:
case 1985:
case 3835:
case 2846:
case 3717:
case 2961:
case 2267:
case 2293:
case 1742:
case 1106:
case 3807:
case 766:
case 2112:
case 893:
case 2654:
case 1905:
case 1326:
case 349:
case 3890:
case 3837:
case 2265:
case 890:
case 3909:
case 342:
case 3010:
case 1719:
case 1396:
case 991:
case 2149:
case 1488:
case 2052:
case 3939:
case 2223:
case 3079:
case 2557:
case 3484:
case 557:
case 1512:
case 3348:
case 2430:
case 3126:
case 1017:
case 462:
case 2536:
case 164:
case 3925:
case 2548:
case 2400:
case 2313:
case 3777:
case 979:
case 2928:
case 140:
case 972:
case 2998:
case 1549:
case 1264:
case 1655:
case 355:
case 3963:
case 1897:
case 3980:
case 2202:
case 1830:
case 4067:
case 2934:
case 1962:
case 908:
case 235:
case 3934:
case 781:
case 1203:
case 335:
case 2980:
case 3427:
case 1349:
case 1766:
case 3074:
case 2856:
case 2995:
case 255:
case 3998:
case 3571:
case 1714:
case 3313:
case 3400:
case 3548:
case 2659:
case 1673:
case 924:
case 537:
case 3672:
case 2545:
case 2306:
case 1312:
case 2925:
case 947:
case 2513:
case 3497:
case 198:
case 2348:
case 2126:
case 2336:
case 695:
case 3345:
case 1485:
case 660:
case 1053:
case 3557:
case 4021:
case 2461:
case 1269:
case 2357:
case 618:
case 1437:
case 189:
case 2820:
case 242:
case 2909:
case 1908:
case 2837:
case 627:
case 249:
case 546:
case 2715:
case 2150:
case 3265:
case 182:
case 3654:
case 1994:
case 814:
case 3888:
case 3112:
case 644:
case 3489:
case 1946:
case 4091:
case 1113:
case 936:
case 3293:
case 1647:
case 2751:
case 1861:
case 1078:
case 2743:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1756267201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,];
var gg_b = "1756267201/";

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
