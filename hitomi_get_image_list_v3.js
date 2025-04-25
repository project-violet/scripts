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
case 4088:
case 2363:
case 257:
case 2458:
case 2518:
case 4064:
case 911:
case 1335:
case 145:
case 1277:
case 372:
case 2217:
case 1634:
case 832:
case 3426:
case 3364:
case 1348:
case 2041:
case 2747:
case 1250:
case 3327:
case 2989:
case 184:
case 3590:
case 3754:
case 4027:
case 3619:
case 1863:
case 569:
case 2523:
case 3542:
case 1659:
case 1582:
case 3925:
case 2901:
case 2774:
case 1179:
case 3372:
case 856:
case 2408:
case 1706:
case 3210:
case 1079:
case 3524:
case 2065:
case 2298:
case 3567:
case 3704:
case 3971:
case 1780:
case 129:
case 3740:
case 1033:
case 341:
case 3284:
case 3716:
case 2165:
case 1200:
case 2597:
case 608:
case 2302:
case 3641:
case 1622:
case 1345:
case 424:
case 754:
case 1701:
case 2131:
case 169:
case 2683:
case 540:
case 2515:
case 3684:
case 1575:
case 1644:
case 233:
case 3913:
case 3668:
case 4085:
case 3646:
case 529:
case 2838:
case 2980:
case 57:
case 811:
case 471:
case 3599:
case 1007:
case 3976:
case 3610:
case 2956:
case 489:
case 2861:
case 1499:
case 1170:
case 3236:
case 2110:
case 72:
case 551:
case 45:
case 442:
case 1751:
case 2146:
case 1070:
case 2010:
case 1789:
case 116:
case 1043:
case 3987:
case 3265:
case 3730:
case 2168:
case 956:
case 1947:
case 463:
case 2329:
case 3083:
case 2617:
case 2084:
case 106:
case 1677:
case 1143:
case 2295:
case 1157:
case 748:
case 1361:
case 2740:
case 1257:
case 2971:
case 1109:
case 3298:
case 2704:
case 1243:
case 2478:
case 3302:
case 147:
case 2284:
case 126:
case 1034:
case 1009:
case 70:
case 859:
case 3774:
case 3119:
case 3901:
case 3036:
case 88:
case 1460:
case 3136:
case 2210:
case 2372:
case 1713:
case 2773:
case 490:
case 3408:
case 3560:
case 1888:
case 3753:
case 3352:
case 2636:
case 821:
case 288:
case 1949:
case 2327:
case 973:
case 3848:
case 2482:
case 1679:
case 1396:
case 2619:
case 1207:
case 4052:
case 2754:
case 1159:
case 2590:
case 3835:
case 3141:
case 3518:
case 1633:
case 3394:
case 2896:
case 3458:
case 1181:
case 3762:
case 3695:
case 1728:
case 3866:
case 272:
case 1081:
case 414:
case 4063:
case 4094:
case 2426:
case 334:
case 670:
case 3168:
case 109:
case 1144:
case 1022:
case 2475:
case 1100:
case 2265:
case 1391:
case 1415:
case 628:
case 1044:
case 1954:
case 3068:
case 2198:
case 2631:
case 959:
case 3110:
case 2421:
case 3405:
case 861:
case 3861:
case 192:
case 1607:
case 1469:
case 1279:
case 1992:
case 652:
case 538:
case 974:
case 1771:
case 3838:
case 3737:
case 3980:
case 2646:
case 1940:
case 675:
case 730:
case 3845:
case 526:
case 1916:
case 2610:
case 547:
case 2976:
case 1885:
case 403:
case 1657:
case 3683:
case 1177:
case 1643:
case 1725:
case 3698:
case 921:
case 2241:
case 2913:
case 1077:
case 3515:
case 166:
case 465:
case 3318:
case 908:
case 877:
case 417:
case 3750:
case 3171:
case 4018:
case 2593:
case 1137:
case 2564:
case 3651:
case 354:
case 180:
case 918:
case 3995:
case 230:
case 3360:
case 3025:
case 1630:
case 2936:
case 2527:
case 3412:
case 2228:
case 3777:
case 3125:
case 2858:
case 1240:
case 2342:
case 1204:
case 2625:
case 1239:
case 3323:
case 3280:
case 2089:
case 3826:
case 32:
case 1867:
case 3744:
case 4023:
case 1784:
case 2189:
case 1216:
case 2466:
case 2448:
case 3786:
case 2671:
case 2151:
case 1710:
case 235:
case 1842:
case 3502:
case 2770:
case 3397:
case 1358:
case 2051:
case 2941:
case 1463:
case 2461:
case 1211:
case 3087:
case 2585:
case 3998:
case 1053:
case 3759:
case 4015:
case 3983:
case 772:
case 1957:
case 2805:
case 196:
case 1153:
case 1429:
case 353:
case 3606:
case 3187:
case 3315:
case 478:
case 1640:
case 2056:
case 1062:
case 3201:
case 1639:
case 4069:
case 977:
case 36:
case 750:
case 420:
case 2676:
case 3781:
case 3656:
case 2332:
case 21:
case 3289:
case 20:
case 1692:
case 2628:
case 580:
case 632:
case 2180:
case 1907:
case 1736:
case 2014:
case 425:
case 143:
case 3113:
case 2779:
case 2006:
case 2931:
case 1719:
case 3013:
case 1832:
case 2445:
case 968:
case 1488:
case 9:
case 3448:
case 405:
case 2520:
case 2786:
case 1637:
case 248:
case 1464:
case 1493:
case 3671:
case 1274:
case 512:
case 3051:
case 467:
case 4067:
case 1823:
case 335:
case 1981:
case 415:
case 2397:
case 2323:
case 1030:
case 2280:
case 3089:
case 2722:
case 3743:
case 1897:
case 1049:
case 3858:
case 599:
case 3757:
case 3276:
case 3572:
case 2700:
case 1130:
case 836:
case 673:
case 3324:
case 1149:
case 22:
case 2025:
case 3001:
case 3936:
case 3527:
case 1566:
case 1262:
case 79:
case 2689:
case 2256:
case 2360:
case 410:
case 3390:
case 1818:
case 3101:
case 2878:
case 400:
case 828:
case 187:
case 661:
case 1247:
case 2594:
case 2563:
case 237:
case 1535:
case 733:
case 2071:
case 2318:
case 3965:
case 84:
case 1378:
case 3287:
case 2651:
case 852:
case 3588:
case 2995:
case 1860:
case 1548:
case 3808:
case 1934:
case 1111:
case 1909:
case 3593:
case 3564:
case 3438:
case 2113:
case 3687:
case 1073:
case 2917:
case 1662:
case 2289:
case 3080:
case 1039:
case 1116:
case 1004:
case 2176:
case 3733:
case 43:
case 3332:
case 1950:
case 2734:
case 1016:
case 1104:
case 2709:
case 1139:
case 2076:
case 674:
case 3855:
case 3180:
case 1140:
case 868:
case 8:
case 2680:
case 112:
case 2201:
case 952:
case 2875:
case 3910:
case 3676:
case 1092:
case 26:
case 3156:
case 1321:
case 2028:
case 1603:
case 199:
case 68:
case 3805:
case 734:
case 3585:
case 3271:
case 1674:
case 1922:
case 1237:
case 1869:
case 2315:
case 3613:
case 3968:
case 427:
case 1375:
case 1538:
case 970:
case 1054:
case 3984:
case 1900:
case 253:
case 2606:
case 2188:
case 434:
case 958:
case 314:
case 3063:
case 2164:
case 1769:
case 2193:
case 2620:
case 4041:
case 3571:
case 3285:
case 980:
case 395:
case 3163:
case 2997:
case 457:
case 1381:
case 746:
case 727:
case 3341:
case 223:
case 2859:
case 3705:
case 108:
case 2064:
case 1359:
case 2501:
case 2027:
case 1982:
case 3052:
case 1196:
case 2923:
case 922:
case 2881:
case 3924:
case 2430:
case 2775:
case 2127:
case 1096:
case 2172:
case 3627:
case 1112:
case 2589:
case 3336:
case 2652:
case 4019:
case 73:
case 3755:
case 3833:
case 1425:
case 2072:
case 1012:
case 985:
case 3319:
case 3990:
case 793:
case 1978:
case 2663:
case 2918:
case 3879:
case 2694:
case 3020:
case 577:
case 645:
case 3102:
case 191:
case 264:
case 862:
case 1334:
case 1309:
case 3688:
case 4065:
case 3437:
case 3002:
case 1261:
case 3664:
case 3693:
case 1471:
case 2411:
case 944:
case 2395:
case 3708:
case 2473:
case 1413:
case 4031:
case 313:
case 2085:
case 1553:
case 433:
case 3288:
case 1377:
case 606:
case 3264:
case 3293:
case 2185:
case 1248:
case 2416:
case 1266:
case 591:
case 271:
case 710:
case 2877:
case 1718:
case 3403:
case 2439:
case 880:
case 700:
case 2580:
case 3346:
case 518:
case 242:
case 1386:
case 962:
case 2492:
case 2800:
case 508:
case 289:
case 3462:
case 1883:
case 3272:
case 4046:
case 3857:
case 1921:
case 3999:
case 3310:
case 1898:
case 2822:
case 1503:
case 3843:
case 1091:
case 1723:
case 4084:
case 2398:
case 1645:
case 1322:
case 3685:
case 2383:
case 1574:
case 139:
case 2782:
case 2220:
case 3384:
case 767:
case 943:
case 3513:
case 1638:
case 3447:
case 3129:
case 2020:
case 455:
case 2102:
case 397:
case 441:
case 2879:
case 1291:
case 54:
case 552:
case 638:
case 3411:
case 168:
case 3834:
case 3652:
case 2755:
case 1530:
case 3172:
case 570:
case 2990:
case 1865:
case 1401:
case 528:
case 778:
case 3923:
case 2942:
case 3881:
case 3027:
case 899:
case 1066:
case 450:
case 720:
case 3449:
case 536:
case 2152:
case 2924:
case 3127:
case 2672:
case 1489:
case 3193:
case 1035:
case 1148:
case 749:
case 1451:
case 2094:
case 2063:
case 214:
case 812:
case 2341:
case 323:
case 1048:
case 1958:
case 2705:
case 3064:
case 647:
case 626:
case 802:
case 295:
case 3997:
case 3088:
case 3383:
case 2685:
case 3782:
case 1161:
case 1357:
case 1742:
case 3398:
case 3915:
case 363:
case 1846:
case 3202:
case 2453:
case 136:
case 2384:
case 3886:
case 666:
case 1884:
case 3492:
case 3800:
case 3969:
case 3580:
case 1868:
case 342:
case 1539:
case 2346:
case 1767:
case 3844:
case 175:
case 35:
case 1370:
case 1456:
case 3822:
case 2462:
case 2272:
case 2758:
case 1516:
case 2857:
case 3877:
case 902:
case 3556:
case 1831:
case 831:
case 3416:
case 1296:
case 1592:
case 3440:
case 1480:
case 568:
case 5:
case 3439:
case 213:
case 3085:
case 3629:
case 609:
case 765:
case 4017:
case 3263:
case 1138:
case 3294:
case 2807:
case 1955:
case 1045:
case 619:
case 128:
case 1414:
case 999:
case 3850:
case 3185:
case 203:
case 2288:
case 707:
case 324:
case 1554:
case 1038:
case 1078:
case 2018:
case 2667:
case 101:
case 644:
case 3920:
case 2434:
case 3697:
case 713:
case 3433:
case 1825:
case 2118:
case 3215:
case 945:
case 1658:
case 217:
case 685:
case 2325:
case 2642:
case 3190:
case 2972:
case 556:
case 1205:
case 430:
case 2160:
case 984:
case 3738:
case 3837:
case 1349:
case 2927:
case 260:
case 940:
case 3042:
case 3952:
case 476:
case 1608:
case 1579:
case 786:
case 2519:
case 806:
case 3142:
case 2123:
case 1996:
case 622:
case 3618:
case 1533:
case 1255:
case 97:
case 2481:
case 4051:
case 2097:
case 2988:
case 198:
case 1126:
case 2964:
case 680:
case 929:
case 3167:
case 2849:
case 282:
case 2444:
case 3218:
case 643:
case 795:
case 1828:
case 3766:
case 3929:
case 1727:
case 346:
case 2796:
case 1483:
case 1354:
case 969:
case 2422:
case 1075:
case 3517:
case 2632:
case 3356:
case 2854:
case 845:
case 3260:
case 2069:
case 1208:
case 851:
case 2169:
case 1764:
case 3847:
case 983:
case 1392:
case 2486:
case 132:
case 3853:
case 3099:
case 1813:
case 40:
case 3669:
case 2873:
case 501:
case 3223:
case 1304:
case 3380:
case 3132:
case 1570:
case 2450:
case 3874:
case 2376:
case 1316:
case 1557:
case 1876:
case 2816:
case 3314:
case 3803:
case 840:
case 3306:
case 4014:
case 916:
case 3297:
case 393:
case 2712:
case 1258:
case 2313:
case 1373:
case 3615:
case 3565:
case 161:
case 1158:
case 267:
case 3481:
case 631:
case 1935:
case 2994:
case 2618:
case 947:
case 926:
case 763:
case 3993:
case 2167:
case 2351:
case 1058:
case 3097:
case 3988:
case 2595:
case 294:
case 205:
case 2389:
case 3023:
case 2952:
case 2124:
case 1966:
case 1729:
case 0:
case 3123:
case 2142:
case 3519:
case 819:
case 687:
case 2745:
case 1008:
case 2623:
case 3325:
case 3642:
case 2301:
case 58:
case 2269:
case 2479:
case 200:
case 2738:
case 3811:
case 866:
case 210:
case 3972:
case 3160:
case 3667:
case 307:
case 3409:
case 938:
case 1626:
case 3018:
case 1337:
case 1275:
case 437:
case 2215:
case 2902:
case 2697:
case 3118:
case 1801:
case 365:
case 2433:
case 699:
case 1522:
case 1226:
case 1431:
case 919:
case 4013:
case 3477:
case 2598:
case 1945:
case 909:
case 1500:
case 293:
case 3712:
case 3584:
case 3313:
case 325:
case 3804:
case 1938:
case 3568:
case 1155:
case 3242:
case 1806:
case 3546:
case 2223:
case 612:
case 992:
case 2380:
case 2407:
case 1720:
case 3873:
case 1586:
case 3450:
case 1814:
case 847:
case 3699:
case 2874:
case 1621:
case 1303:
case 3510:
case 1794:
case 2199:
case 1763:
case 1362:
case 3632:
case 2356:
case 3854:
case 561:
case 3069:
case 2853:
case 3290:
case 378:
case 3486:
case 838:
case 2766:
case 1347:
case 3115:
case 227:
case 1484:
case 246:
case 121:
case 723:
case 3444:
case 382:
case 3387:
case 1752:
case 1278:
case 1468:
case 3422:
case 3531:
case 1961:
case 3796:
case 2862:
case 349:
case 3741:
case 16:
case 2321:
case 63:
case 3305:
case 3616:
case 804:
case 202:
case 895:
case 1128:
case 1875:
case 3062:
case 814:
case 2986:
case 474:
case 548:
case 3639:
case 3153:
case 3429:
case 1606:
case 2900:
case 693:
case 751:
case 2375:
case 3673:
case 1491:
case 1315:
case 913:
case 3899:
case 1614:
case 3211:
case 2922:
case 3943:
case 3053:
case 903:
case 1759:
case 1983:
case 579:
case 3047:
case 3957:
case 729:
case 1917:
case 2485:
case 2977:
case 3719:
case 48:
case 581:
case 2073:
case 3654:
case 1251:
case 3832:
case 1529:
case 77:
case 2653:
case 2647:
case 646:
case 2140:
case 3692:
case 1076:
case 2139:
case 1734:
case 2016:
case 986:
case 3907:
case 362:
case 537:
case 3103:
case 2040:
case 2950:
case 740:
case 1656:
case 1176:
case 2116:
case 3765:
case 803:
case 3292:
case 287:
case 4008:
case 783:
case 1777:
case 2717:
case 1125:
case 3731:
case 2818:
case 3649:
case 1025:
case 3630:
case 3308:
case 2909:
case 2934:
case 2548:
case 694:
case 605:
case 3137:
case 769:
case 358:
case 3254:
case 2860:
case 1995:
case 3037:
case 1318:
case 3890:
case 2247:
case 667:
case 3933:
case 1563:
case 137:
case 1594:
case 1750:
case 231:
case 3710:
case 2823:
case 1397:
case 2981:
case 716:
case 3494:
case 461:
case 2637:
case 1520:
case 3611:
case 2274:
case 2464:
case 148:
case 3824:
case 2488:
case 1826:
case 3768:
case 2203:
case 1744:
case 553:
case 3784:
case 2130:
case 1700:
case 179:
case 2049:
case 2959:
case 2382:
case 1496:
case 600:
case 2030:
case 385:
case 3204:
case 1323:
case 1722:
case 1280:
case 3139:
case 3104:
case 262:
case 2907:
case 1180:
case 1855:
case 942:
case 678:
case 2003:
case 3795:
case 1080:
case 95:
case 620:
case 1733:
case 897:
case 989:
case 3040:
case 1332:
case 3977:
case 1931:
case 2174:
case 649:
case 747:
case 456:
case 963:
case 1438:
case 1687:
case 1106:
case 243:
case 2147:
case 2673:
case 3869:
case 3375:
case 1613:
case 3538:
case 3944:
case 2153:
case 296:
case 1984:
case 576:
case 3900:
case 4075:
case 2047:
case 2211:
case 1271:
case 2899:
case 1461:
case 3922:
case 2616:
case 1910:
case 1399:
case 1676:
case 2162:
case 535:
case 302:
case 3092:
case 971:
case 3321:
case 3603:
case 3986:
case 2062:
case 1225:
case 2604:
case 1056:
case 4021:
case 1466:
case 2216:
case 3130:
case 2452:
case 2768:
case 3203:
case 1324:
case 863:
case 3149:
case 4082:
case 2867:
case 3798:
case 1625:
case 285:
case 1342:
case 1089:
case 1743:
case 792:
case 1858:
case 1757:
case 4026:
case 1051:
case 997:
case 2273:
case 617:
case 1770:
case 1435:
case 2710:
case 709:
case 665:
case 842:
case 244:
case 1151:
case 498:
case 1448:
case 1671:
case 3464:
case 2254:
case 401:
case 3860:
case 1808:
case 2420:
case 3548:
case 3909:
case 2137:
case 1707:
case 4078:
case 1593:
case 51:
case 871:
case 923:
case 766:
case 3535:
case 3253:
case 2402:
case 2890:
case 3378:
case 3818:
case 1390:
case 2979:
case 1919:
case 2308:
case 1527:
case 1001:
case 3472:
case 3566:
case 2649:
case 130:
case 555:
case 2885:
case 1599:
case 3007:
case 541:
case 2670:
case 44:
case 2916:
case 2940:
case 2050:
case 383:
case 722:
case 2771:
case 2904:
case 2939:
case 3686:
case 3107:
case 3600:
case 4045:
case 266:
case 1017:
case 1684:
case 1241:
case 946:
case 927:
case 1668:
case 1913:
case 470:
case 1117:
case 3622:
case 2643:
case 3974:
case 2725:
case 2657:
case 800:
case 1385:
case 428:
case 1631:
case 3234:
case 744:
case 2000:
case 3143:
case 3677:
case 219:
case 3157:
case 316:
case 550:
case 2022:
case 2415:
case 1730:
case 1098:
case 436:
case 1265:
case 1475:
case 2233:
case 2555:
case 3057:
case 993:
case 2144:
case 1749:
case 4061:
case 1928:
case 3829:
case 2186:
case 894:
case 292:
case 805:
case 2279:
case 3070:
case 2469:
case 572:
case 1219:
case 93:
case 867:
case 3499:
case 1421:
case 1754:
case 2423:
case 1619:
case 3894:
case 2396:
case 2679:
case 1482:
case 2893:
case 3366:
case 188:
case 846:
case 690:
case 2508:
case 1327:
case 910:
case 2949:
case 3250:
case 2888:
case 150:
case 2787:
case 1636:
case 1388:
case 3467:
case 2081:
case 172:
case 1231:
case 3852:
case 1364:
case 1393:
case 3348:
case 4035:
case 351:
case 1896:
case 2181:
case 3578:
case 2497:
case 3335:
case 2633:
case 695:
case 3681:
case 226:
case 1284:
case 247:
case 2009:
case 915:
case 2776:
case 1268:
case 3133:
case 83:
case 1095:
case 37:
case 967:
case 155:
case 1641:
case 994:
case 1704:
case 905:
case 2134:
case 1739:
case 2109:
case 614:
case 3780:
case 3526:
case 2872:
case 1812:
case 4:
case 3033:
case 1195:
case 2312:
case 3706:
case 2460:
case 2270:
case 3079:
case 1524:
case 762:
case 3582:
case 3714:
case 1925:
case 3179:
case 3186:
case 392:
case 1010:
case 2070:
case 3469:
case 3992:
case 1146:
case 1110:
case 1405:
case 2170:
case 2962:
case 1046:
case 1956:
case 2499:
case 671:
case 3044:
case 1068:
case 1295:
case 439:
case 2234:
case 3000:
case 1617:
case 1084:
case 860:
case 309:
case 2953:
case 2789:
case 3100:
case 1455:
case 133:
case 2644:
case 663:
case 1906:
case 2338:
case 366:
case 3643:
case 3177:
case 2345:
case 2622:
case 949:
case 1914:
case 1131:
case 2701:
case 1698:
case 2974:
case 865:
case 3505:
case 3916:
case 3670:
case 817:
case 477:
case 920:
case 3885:
case 3904:
case 1980:
case 1737:
case 2686:
case 2107:
case 3050:
case 2259:
case 283:
case 978:
case 642:
case 3460:
case 1019:
case 1136:
case 2706:
case 240:
case 3312:
case 3713:
case 533:
case 2582:
case 2714:
case 1901:
case 1119:
case 2490:
case 1523:
case 59:
case 1703:
case 623:
case 3418:
case 1302:
case 2244:
case 27:
case 3872:
case 229:
case 2033:
case 1320:
case 3134:
case 3911:
case 1298:
case 2937:
case 2222:
case 3243:
case 1695:
case 338:
case 418:
case 3827:
case 878:
case 2348:
case 907:
case 3081:
case 664:
case 2467:
case 2634:
case 2609:
case 1141:
case 2578:
case 2756:
case 408:
case 917:
case 3633:
case 245:
case 2335:
case 697:
case 820:
case 1363:
case 157:
case 251:
case 965:
case 2894:
case 849:
case 3207:
case 712:
case 1835:
case 1989:
case 3930:
case 3787:
case 1352:
case 2366:
case 1747:
case 3864:
case 3059:
case 3508:
case 3507:
case 3793:
case 2005:
case 1748:
case 594:
case 505:
case 1853:
case 2446:
case 1099:
case 872:
case 274:
case 412:
case 1735:
case 1260:
case 1470:
case 2763:
case 1199:
case 2794:
case 515:
case 1457:
case 3483:
case 1443:
case 499:
case 3498:
case 2577:
case 2353:
case 1218:
case 708:
case 2468:
case 2752:
case 3828:
case 3175:
case 888:
case 127:
case 1306:
case 2544:
case 2880:
case 791:
case 1297:
case 193:
case 3772:
case 2675:
case 3557:
case 259:
case 3876:
case 1314:
case 2431:
case 3543:
case 500:
case 4073:
case 28:
case 2303:
case 4040:
case 2621:
case 2702:
case 4039:
case 1874:
case 3340:
case 3813:
case 3304:
case 2806:
case 62:
case 988:
case 593:
case 2108:
case 1738:
case 1090:
case 679:
case 2682:
case 487:
case 3785:
case 100:
case 1745:
case 1301:
case 2008:
case 1623:
case 1190:
case 1697:
case 4011:
case 1433:
case 1215:
case 2581:
case 2275:
case 3495:
case 972:
case 648:
case 2337:
case 1920:
case 2889:
case 3126:
case 654:
case 2058:
case 2948:
case 1351:
case 2534:
case 1167:
case 1618:
case 1963:
case 941:
case 261:
case 1067:
case 955:
case 2935:
case 3026:
case 3579:
case 3182:
case 1761:
case 1024:
case 1660:
case 2966:
case 1124:
case 3349:
case 1042:
case 1699:
case 2605:
case 3621:
case 3303:
case 517:
case 1510:
case 462:
case 4003:
case 3586:
case 1873:
case 2813:
case 2772:
case 1712:
case 2373:
case 1584:
case 1313:
case 1839:
case 1804:
case 3544:
case 443:
case 4074:
case 3880:
case 1985:
case 1477:
case 3055:
case 359:
case 1422:
case 1531:
case 3856:
case 3961:
case 2498:
case 1400:
case 2727:
case 3353:
case 182:
case 496:
case 1387:
case 2788:
case 3446:
case 232:
case 4062:
case 1290:
case 2021:
case 178:
case 1328:
case 1486:
case 857:
case 1854:
case 120:
case 3105:
case 2121:
case 2996:
case 1123:
case 1690:
case 549:
case 1459:
case 2182:
case 2608:
case 1023:
case 1791:
case 2330:
case 582:
case 775:
case 630:
case 2082:
case 1927:
case 1232:
case 3851:
case 2349:
case 2126:
case 3509:
case 578:
case 3889:
case 1988:
case 1097:
case 1481:
case 736:
case 3158:
case 2255:
case 1197:
case 3465:
case 3581:
case 211:
case 117:
case 2658:
case 635:
case 770:
case 1118:
case 957:
case 4037:
case 2825:
case 165:
case 201:
case 1667:
case 107:
case 1434:
case 3626:
case 480:
case 728:
case 1371:
case 934:
case 458:
case 2871:
case 1299:
case 1811:
case 373:
case 1972:
case 74:
case 1160:
case 2205:
case 752:
case 3008:
case 1642:
case 1325:
case 422:
case 3559:
case 3419:
case 2480:
case 854:
case 4050:
case 2592:
case 3562:
case 1932:
case 24:
case 3718:
case 2831:
case 2145:
case 701:
case 1288:
case 2790:
case 2414:
case 1293:
case 1264:
case 881:
case 3248:
case 4077:
case 1708:
case 466:
case 2045:
case 1807:
case 1587:
case 270:
case 3553:
case 590:
case 1384:
case 236:
case 1447:
case 3638:
case 3300:
case 3487:
case 3975:
case 1368:
case 2724:
case 2061:
case 2846:
case 3344:
case 798:
case 4000:
case 2343:
case 339:
case 3574:
case 419:
case 879:
case 1029:
case 2161:
case 2212:
case 1758:
case 1272:
case 1576:
case 1462:
case 2370:
case 275:
case 3898:
case 1310:
case 595:
case 1843:
case 3503:
case 2456:
case 2504:
case 2539:
case 186:
case 2884:
case 3428:
case 1924:
case 2489:
case 2612:
case 3096:
case 732:
case 1525:
case 3982:
case 1052:
case 1942:
case 104:
case 3381:
case 2958:
case 2048:
case 1341:
case 308:
case 2135:
case 1705:
case 655:
case 86:
case 2451:
case 114:
case 586:
case 1063:
case 3769:
case 2148:
case 2511:
case 438:
case 2836:
case 2:
case 1120:
case 1693:
case 3471:
case 268:
case 4009:
case 1365:
case 2819:
case 1879:
case 3635:
case 391:
case 1102:
case 1833:
case 3425:
case 2401:
case 979:
case 3012:
case 2865:
case 688:
case 2530:
case 1627:
case 513:
case 3895:
case 2908:
case 650:
case 1755:
case 375:
case 3370:
case 3456:
case 835:
case 1822:
case 91:
case 189:
case 3212:
case 3516:
case 69:
case 3905:
case 3884:
case 2386:
case 1800:
case 1969:
case 1726:
case 3868:
case 142:
case 90:
case 3504:
case 3767:
case 3724:
case 2975:
case 633:
case 4057:
case 3846:
case 1202:
case 2344:
case 163:
case 1886:
case 3573:
case 336:
case 876:
case 2638:
case 239:
case 2574:
case 1383:
case 1514:
case 1220:
case 1782:
case 3161:
case 1398:
case 3742:
case 2723:
case 2091:
case 1454:
case 3343:
case 2322:
case 2645:
case 328:
case 2661:
case 2248:
case 2377:
case 1317:
case 3145:
case 3790:
case 3038:
case 1085:
case 830:
case 1629:
case 2760:
case 3406:
case 2553:
case 1294:
case 3691:
case 1473:
case 3592:
case 3296:
case 3480:
case 483:
case 34:
case 1556:
case 4007:
case 2718:
case 2266:
case 2476:
case 1416:
case 597:
case 524:
case 2425:
case 3401:
case 440:
case 1652:
case 3549:
case 1809:
case 4079:
case 3530:
case 2112:
case 2895:
case 1589:
case 2648:
case 1395:
case 429:
case 80:
case 2471:
case 3836:
case 164:
case 1551:
case 78:
case 634:
case 3333:
case 81:
case 571:
case 291:
case 3732:
case 657:
case 1694:
case 1663:
case 2978:
case 1602:
case 3958:
case 208:
case 3135:
case 3799:
case 451:
case 55:
case 1088:
case 1997:
case 542:
case 1620:
case 2769:
case 1164:
case 2926:
case 218:
case 3511:
case 3148:
case 2245:
case 3451:
case 484:
case 1449:
case 1775:
case 563:
case 3612:
case 930:
case 3489:
case 1923:
case 3841:
case 774:
case 3066:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1745546401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,1,];
var gg_b = "1745546401/";

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
