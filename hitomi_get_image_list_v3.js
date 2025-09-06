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
case 1844:
case 2393:
case 0:
case 571:
case 3308:
case 1290:
case 442:
case 2579:
case 1627:
case 367:
case 4054:
case 3952:
case 3253:
case 3502:
case 3536:
case 988:
case 1975:
case 2864:
case 3987:
case 3696:
case 3942:
case 2186:
case 1388:
case 2730:
case 3312:
case 2524:
case 648:
case 2839:
case 1854:
case 1373:
case 1125:
case 118:
case 1664:
case 2205:
case 3980:
case 2948:
case 2560:
case 13:
case 3633:
case 2318:
case 3069:
case 3476:
case 1620:
case 211:
case 1171:
case 2427:
case 1968:
case 961:
case 3324:
case 1297:
case 2302:
case 1249:
case 2464:
case 3367:
case 2958:
case 1794:
case 3766:
case 3379:
case 1921:
case 3226:
case 482:
case 3593:
case 374:
case 2820:
case 2737:
case 2901:
case 1709:
case 1190:
case 2755:
case 539:
case 504:
case 2668:
case 3452:
case 1821:
case 2551:
case 200:
case 3143:
case 3789:
case 3792:
case 2286:
case 2600:
case 1658:
case 460:
case 4000:
case 3880:
case 2848:
case 1765:
case 2621:
case 2541:
case 2170:
case 3617:
case 1225:
case 2495:
case 4021:
case 128:
case 417:
case 1032:
case 1006:
case 1954:
case 1468:
case 2895:
case 1159:
case 2927:
case 3842:
case 2134:
case 3911:
case 1535:
case 1271:
case 3976:
case 1807:
case 4075:
case 2448:
case 3480:
case 821:
case 1197:
case 1149:
case 1421:
case 3610:
case 1944:
case 2458:
case 2169:
case 1778:
case 4007:
case 607:
case 1875:
case 998:
case 3584:
case 774:
case 2071:
case 962:
case 2417:
case 1351:
case 1610:
case 3783:
case 3695:
case 583:
case 199:
case 3778:
case 629:
case 9:
case 2016:
case 1662:
case 557:
case 1911:
case 2719:
case 297:
case 2652:
case 3468:
case 1703:
case 897:
case 4052:
case 2810:
case 775:
case 2687:
case 58:
case 990:
case 1091:
case 4087:
case 3807:
case 1976:
case 2462:
case 1143:
case 2981:
case 1789:
case 1792:
case 1442:
case 441:
case 572:
case 526:
case 3868:
case 2163:
case 2410:
case 3765:
case 1617:
case 3475:
case 1115:
case 3800:
case 808:
case 710:
case 2025:
case 3528:
case 3648:
case 2680:
case 3190:
case 2232:
case 789:
case 2206:
case 767:
case 3821:
case 2817:
case 543:
case 276:
case 3794:
case 1367:
case 149:
case 1681:
case 2746:
case 3138:
case 1005:
case 2347:
case 333:
case 701:
case 2496:
case 1226:
case 1034:
case 1476:
case 3259:
case 2756:
case 33:
case 2382:
case 2573:
case 1980:
case 1077:
case 3968:
case 1411:
case 247:
case 3620:
case 2588:
case 2357:
case 887:
case 2910:
case 3854:
case 1312:
case 3388:
case 1811:
case 269:
case 3664:
case 1518:
case 1876:
case 85:
case 516:
case 3907:
case 919:
case 409:
case 3125:
case 1360:
case 3582:
case 1952:
case 3063:
case 3627:
case 3547:
case 2350:
case 1308:
case 3290:
case 435:
case 3844:
case 4011:
case 3639:
case 2106:
case 4076:
case 2676:
case 189:
case 2528:
case 909:
case 506:
case 2709:
case 3232:
case 308:
case 2800:
case 1755:
case 1384:
case 1713:
case 2322:
case 991:
case 1551:
case 934:
case 2407:
case 3335:
case 1745:
case 4058:
case 3304:
case 3462:
case 2225:
case 935:
case 828:
case 2765:
case 1541:
case 1170:
case 3410:
case 228:
case 1495:
case 2868:
case 537:
case 711:
case 3810:
case 1134:
case 3719:
case 609:
case 1927:
case 3652:
case 1895:
case 2807:
case 3361:
case 3687:
case 691:
case 3996:
case 2149:
case 3522:
case 2783:
case 3185:
case 2944:
case 2421:
case 4095:
case 312:
case 2778:
case 3016:
case 3328:
case 440:
case 2875:
case 635:
case 1654:
case 1393:
case 4027:
case 2639:
case 941:
case 3611:
case 429:
case 4039:
case 2063:
case 1864:
case 3340:
case 1186:
case 1524:
case 1839:
case 3962:
case 4064:
case 681:
case 2125:
case 2373:
case 3481:
case 2907:
case 968:
case 3090:
case 721:
case 23:
case 1560:
case 1948:
case 1205:
case 3573:
case 2116:
case 83:
case 1318:
case 3756:
case 2259:
case 202:
case 2968:
case 3357:
case 347:
case 3588:
case 2297:
case 462:
case 454:
case 1439:
case 3049:
case 3746:
case 2138:
case 3285:
case 1958:
case 2794:
case 322:
case 833:
case 3917:
case 1729:
case 1269:
case 668:
case 233:
case 1820:
case 176:
case 4081:
case 1097:
case 1285:
case 249:
case 2681:
case 3336:
case 3820:
case 274:
case 1496:
case 712:
case 3737:
case 1347:
case 3269:
case 2379:
case 2034:
case 2766:
case 2593:
case 1059:
case 2226:
case 3026:
case 1756:
case 3234:
case 1881:
case 498:
case 4033:
case 2980:
case 3948:
case 2633:
case 1382:
case 1399:
case 797:
case 3439:
case 2324:
case 3512:
case 1357:
case 3427:
case 1588:
case 275:
case 3839:
case 992:
case 514:
case 187:
case 2942:
case 2811:
case 2243:
case 3995:
case 1340:
case 1090:
case 1481:
case 2518:
case 15:
case 3015:
case 1263:
case 917:
case 2952:
case 1106:
case 407:
case 3579:
case 867:
case 960:
case 1433:
case 2536:
case 3864:
case 2351:
case 2610:
case 112:
case 1417:
case 801:
case 1185:
case 2852:
case 4010:
case 3291:
case 956:
case 3964:
case 776:
case 3607:
case 2662:
case 1016:
case 899:
case 56:
case 2126:
case 563:
case 3134:
case 3798:
case 1810:
case 982:
case 747:
case 2703:
case 2091:
case 1687:
case 1038:
case 2976:
case 673:
case 448:
case 321:
case 1304:
case 2880:
case 488:
case 2792:
case 3600:
case 75:
case 1335:
case 2442:
case 1410:
case 3621:
case 3541:
case 942:
case 787:
case 3713:
case 682:
case 927:
case 2115:
case 1933:
case 3901:
case 108:
case 3858:
case 2487:
case 753:
case 2603:
case 3883:
case 573:
case 3022:
case 838:
case 2325:
case 925:
case 1787:
case 3516:
case 238:
case 3306:
case 1193:
case 542:
case 659:
case 1803:
case 66:
case 3150:
case 1284:
case 3831:
case 785:
case 3465:
case 3707:
case 766:
case 1489:
case 1780:
case 1136:
case 150:
case 2956:
case 2061:
case 3655:
case 582:
case 3228:
case 2532:
case 3768:
case 3431:
case 1041:
case 213:
case 896:
case 3700:
case 3645:
case 96:
case 1118:
case 2316:
case 779:
case 624:
case 131:
case 744:
case 3157:
case 3483:
case 3014:
case 2872:
case 3909:
case 3894:
case 286:
case 2288:
case 3240:
case 3597:
case 886:
case 1656:
case 560:
case 1370:
case 2273:
case 3363:
case 2972:
case 184:
case 1008:
case 517:
case 1866:
case 3674:
case 3559:
case 865:
case 1526:
case 2781:
case 1992:
case 1989:
case 166:
case 439:
case 3250:
case 1184:
case 1060:
case 3965:
case 2585:
case 2666:
case 914:
case 2040:
case 185:
case 3637:
case 592:
case 4066:
case 264:
case 252:
case 3385:
case 795:
case 1236:
case 2114:
case 1903:
case 1377:
case 145:
case 3590:
case 1369:
case 2099:
case 1515:
case 1553:
case 970:
case 615:
case 2047:
case 3630:
case 3282:
case 2796:
case 22:
case 3983:
case 2359:
case 82:
case 1079:
case 1334:
case 794:
case 614:
case 3161:
case 3257:
case 1067:
case 1543:
case 1744:
case 3079:
case 3218:
case 457:
case 2570:
case 344:
case 103:
case 2141:
case 2437:
case 978:
case 2036:
case 3623:
case 3711:
case 3377:
case 2267:
case 345:
case 2739:
case 2474:
case 3903:
case 1931:
case 3236:
case 483:
case 1385:
case 2998:
case 10:
case 2326:
case 1128:
case 2279:
case 1590:
case 2315:
case 3060:
case 568:
case 2353:
case 3184:
case 366:
case 2694:
case 2208:
case 2945:
case 4094:
case 3526:
case 3646:
case 2430:
case 443:
case 1965:
case 1629:
case 3656:
case 44:
case 2955:
case 2212:
case 1135:
case 2701:
case 1909:
case 1894:
case 1559:
case 3866:
case 426:
case 541:
case 3008:
case 2829:
case 2534:
case 2505:
case 2720:
case 384:
case 2260:
case 2837:
case 1809:
case 1994:
case 158:
case 1478:
case 637:
case 2813:
case 1645:
case 2124:
case 394:
case 1014:
case 2665:
case 2586:
case 3966:
case 331:
case 70:
case 1655:
case 3892:
case 3889:
case 3391:
case 2748:
case 3780:
case 1147:
case 732:
case 2974:
case 1431:
case 1768:
case 395:
case 1228:
case 2179:
case 1465:
case 4083:
case 493:
case 1150:
case 3284:
case 3803:
case 2108:
case 2795:
case 2930:
case 1332:
case 3742:
case 3193:
case 230:
case 3489:
case 3492:
case 2445:
case 830:
case 2678:
case 3752:
case 1022:
case 4031:
case 2112:
case 851:
case 1235:
case 3386:
case 1409:
case 1516:
case 2413:
case 49:
case 2084:
case 906:
case 1775:
case 1288:
case 186:
case 1733:
case 3701:
case 2656:
case 3913:
case 1846:
case 3955:
case 1050:
case 3505:
case 3837:
case 165:
case 2866:
case 3534:
case 993:
case 3829:
case 3569:
case 3208:
case 2293:
case 2992:
case 2060:
case 916:
case 266:
case 4046:
case 2184:
case 3874:
case 1585:
case 2012:
case 1666:
case 164:
case 152:
case 3577:
case 2236:
case 2202:
case 3998:
case 2711:
case 177:
case 2377:
case 3267:
case 1456:
case 693:
case 1823:
case 2553:
case 2515:
case 123:
case 3141:
case 1796:
case 3570:
case 12:
case 2079:
case 2334:
case 2466:
case 879:
case 2623:
case 2543:
case 1397:
case 4023:
case 3764:
case 796:
case 3036:
case 943:
case 351:
case 1188:
case 765:
case 3631:
case 2386:
case 68:
case 2752:
case 3112:
case 2619:
case 786:
case 3455:
case 1173:
case 3413:
case 657:
case 3108:
case 1819:
case 2742:
case 1710:
case 3898:
case 926:
case 752:
case 1762:
case 3591:
case 1222:
case 1923:
case 683:
case 2489:
case 2492:
case 330:
case 3445:
case 2391:
case 850:
case 3609:
case 2102:
case 3748:
case 1338:
case 1061:
case 643:
case 590:
case 1956:
case 3167:
case 1532:
case 2672:
case 3179:
case 895:
case 2403:
case 3974:
case 113:
case 5:
case 3855:
case 746:
case 11:
case 672:
case 2051:
case 3665:
case 983:
case 1717:
case 894:
case 231:
case 64:
case 831:
case 554:
case 562:
case 598:
case 1758:
case 2994:
case 396:
case 3028:
case 2809:
case 470:
case 2645:
case 2525:
case 2700:
case 858:
case 1855:
case 2014:
case 2483:
case 1937:
case 1124:
case 2261:
case 1665:
case 1586:
case 3717:
case 1251:
case 1845:
case 1167:
case 2613:
case 3338:
case 1748:
case 4055:
case 4013:
case 313:
case 2431:
case 1498:
case 2147:
case 3419:
case 639:
case 3532:
case 2768:
case 2831:
case 2465:
case 3710:
case 1898:
case 2332:
case 507:
case 3035:
case 1591:
case 1678:
case 3004:
case 2538:
case 2204:
case 1112:
case 3472:
case 2022:
case 3603:
case 2698:
case 151:
case 2140:
case 939:
case 536:
case 2775:
case 1455:
case 1084:
case 1413:
case 803:
case 4030:
case 3359:
case 1429:
case 463:
case 2744:
case 2630:
case 3047:
case 1437:
case 3796:
case 203:
case 1764:
case 1002:
case 2257:
case 2161:
case 346:
case 2494:
case 1727:
case 3919:
case 377:
case 561:
case 2385:
case 1998:
case 2931:
case 3099:
case 459:
case 3823:
case 46:
case 1279:
case 2590:
case 1326:
case 2073:
case 730:
case 3423:
case 1315:
case 1945:
case 3856:
case 1208:
case 2088:
case 4029:
case 1430:
case 352:
case 1577:
case 2629:
case 1955:
case 424:
case 386:
case 588:
case 3288:
case 2674:
case 2559:
case 1837:
case 751:
case 971:
case 4074:
case 3050:
case 2363:
case 87:
case 3890:
case 3356:
case 1426:
case 3938:
case 1853:
case 3100:
case 2523:
case 601:
case 27:
case 129:
case 1039:
case 3449:
case 2485:
case 1027:
case 1663:
case 3757:
case 699:
case 2615:
case 3916:
case 227:
case 336:
case 3497:
case 827:
case 3254:
case 4015:
case 1736:
case 1702:
case 920:
case 3971:
case 1276:
case 873:
case 1329:
case 2463:
case 1142:
case 411:
case 1685:
case 596:
case 4026:
case 999:
case 256:
case 1443:
case 3033:
case 1:
case 3669:
case 2162:
case 3925:
case 513:
case 2932:
case 2233:
case 2906:
case 3740:
case 282:
case 3490:
case 190:
case 3081:
case 1453:
case 3175:
case 2773:
case 620:
case 564:
case 292:
case 2068:
case 729:
case 2832:
case 2985:
case 1398:
case 3200:
case 892:
case 3686:
case 2196:
case 3949:
case 119:
case 674:
case 3761:
case 1592:
case 2217:
case 3959:
case 967:
case 2021:
case 3017:
case 817:
case 1280:
case 3154:
case 1606:
case 260:
case 3825:
case 675:
case 2000:
case 3997:
case 3416:
case 1058:
case 1176:
case 400:
case 586:
case 2378:
case 1784:
case 1313:
case 1943:
case 1242:
case 3578:
case 7:
case 949:
case 3207:
case 754:
case 2722:
case 3583:
case 2963:
case 3704:
case 3062:
case 3838:
case 523:
case 667:
case 140:
case 2007:
case 3990:
case 1345:
case 1287:
case 577:
case 2406:
case 2432:
case 1503:
case 3010:
case 755:
case 975:
case 610:
case 93:
case 1990:
case 1735:
case 4016:
case 2101:
case 3252:
case 3915:
case 3953:
case 2616:
case 161:
case 2671:
case 902:
case 2598:
case 1275:
case 2042:
case 3095:
case 412:
case 3287:
case 3943:
case 1578:
case 4038:
case 3784:
case 1425:
case 3355:
case 798:
case 2052:
case 2970:
case 1583:
case 881:
case 497:
case 933:
case 1207:
case 2905:
case 2127:
case 63:
case 2886:
case 2934:
case 241:
case 1471:
case 3111:
case 1268:
case 1728:
case 3058:
case 602:
case 1997:
case 736:
case 2741:
case 2303:
case 1686:
case 3398:
case 1200:
case 1144:
case 2977:
case 3926:
case 1221:
case 3589:
case 633:
case 2969:
case 2080:
case 268:
case 2164:
case 4025:
case 2877:
case 1605:
case 3330:
case 355:
case 761:
case 3152:
case 1849:
case 3453:
case 1323:
case 3415:
case 390:
case 2869:
case 1490:
case 3187:
case 1859:
case 3566:
case 2708:
case 3793:
case 2649:
case 1750:
case 3020:
case 748:
case 3:
case 1897:
case 3001:
case 3443:
case 1594:
case 1346:
case 788:
case 3064:
case 3702:
case 1497:
case 2690:
case 3180:
case 45:
case 1254:
case 3843:
case 136:
case 469:
case 3211:
case 1916:
case 4090:
case 834:
case 1168:
case 3329:
case 291:
case 2779:
case 2366:
case 3276:
case 3337:
case 2991:
case 1799:
case 1782:
case 3815:
case 1938:
case 3853:
case 2076:
case 2158:
case 2469:
case 3426:
case 1356:
case 3718:
case 530:
case 235:
case 2477:
case 3027:
case 2011:
case 2530:
case 928:
case 2264:
case 329:
case 3374:
case 835:
case 585:
case 1832:
case 3977:
case 3741:
case 676:
case 1331:
case 2398:
case 1985:
case 987:
case 622:
case 969:
case 2048:
case 3164:
case 3491:
case 368:
case 1217:
case 819:
case 2589:
case 2926:
case 77:
case 280:
case 773:
case 3886:
case 3127:
case 1021:
case 2606:
case 1383:
case 2632:
case 3139:
case 3248:
case 1000:
case 3555:
case 647:
case 727:
case 160:
case 2176:
case 756:
case 1075:
case 976:
case 2313:
case 922:
case 687:
case 2784:
case 3638:
case 2242:
case 1181:
case 2943:
case 1309:
case 3486:
case 65:
case 1262:
case 3970:
case 1722:
case 2953:
case 2252:
case 1007:
case 240:
case 1133:
case 3389:
case 3392:
case 545:
case 2287:
case 1519:
case 3598:
case 3120:
case 1365:
case 782:
case 947:
case 3469:
case 3076:
case 3158:
case 2718:
case 2426:
case 17:
case 1296:
case 1643:
case 1523:
case 2815:
case 1485:
case 1054:
case 4063:
case 3264:
case 229:
case 2039:
case 3477:
case 829:
case 1117:
case 142:
case 3530:
case 2027:
case 2663:
case 418:
case 127:
case 1394:
case 2843:
case 760:
case 1653:
case 2702:
case 2064:
case 908:
case 3690:
case 3405:
case 2337:
case 3870:
case 717:
case 173:
case 1863:
case 3366:
case 1044:
case 3434:
case 391:
case 3779:
case 262:
case 3470:
case 4085:
case 594:
case 1463:
case 2020:
case 531:
case 2566:
case 2685:
case 402:
case 2142:
case 1281:
case 3834:
case 3986:
case 3529:
case 854:
case 1546:
case 1626:
case 855:
case 3574:
case 1885:
case 2152:
case 3712:
case 1788:
case 3877:
case 595:
case 3201:
case 1906:
case 3869:
case 2826:
case 1773:
case 890:
case 2453:
case 4034:
case 2740:
case 3788:
case 1877:
case 2605:
case 474:
case 2634:
case 1574:
case 1760:
case 921:
case 2175:
case 1220:
case 1649:
case 1986:
case 4077:
case 1195:
case 2859:
case 475:
case 3463:
case 2750:
case 2677:
case 2897:
case 3546:
case 2669:
case 2594:
case 2033:
case 4069:
case 1690:
case 1148:
case 2497:
case 836:
case 1239:
case 109:
case 1767:
case 3394:
case 236:
case 2916:
case 1434:
case 373:
case 2096:
case 621:
case 134:
case 3863:
case 1405:
case 1870:
case 2100:
case 900:
case 1991:
case 2799:
case 3643:
case 2890:
case 2244:
case 1158:
case 1011:
case 2757:
case 3117:
case 342:
case 467:
case 1264:
case 3054:
case 1101:
case 3133:
case 2990:
case 1891:
case 2062:
case 499:
case 2704:
case 50:
case 2838:
case 2010:
case 2275:
case 3365:
case 261:
case 1120:
case 1598:
case 401:
case 3432:
case 532:
case 2816:
case 3309:
case 1295:
case 1638:
case 3210:
case 3722:
case 1970:
case 3262:
case 3963:
case 2871:
case 1486:
case 1248:
case 1139:
case 1751:
case 3021:
case 2959:
case 317:
case 1934:
case 734:
case 288:
case 2268:
case 2825:
case 3000:
case 1555:
case 735:
case 3985:
case 2949:
case 1741:
case 1303:
case 2565:
case 392:
case 3832:
case 4086:
case 1545:
case 2221:
case 168:
case 1080:
case 1835:
case 3918:
case 1507:
case 438:
case 1194:
case 2791:
case 1982:
case 1804:
case 2003:
case 2441:
case 3098:
case 2924:
case 2137:
case 2595:
case 1957:
case 3622:
case 1278:
case 2967:
case 1428:
case 2604:
case 2298:
case 2635:
case 4004:
case 3902:
case 706:
case 3884:
case 2174:
case 1947:
case 2979:
case 2451:
case 315:
case 1950:
case 2352:
case 1641:
case 2786:
case 1521:
case 2245:
case 2558:
case 178:
case 1725:
case 2661:
case 3013:
case 1500:
case 2255:
case 2841:
case 2213:
case 1209:
case 3614:
case 2089:
case 1861:
case 370:
case 1404:
case 41:
case 1362:
case 205:
case 1840:
case 1457:
case 137:
case 1294:
case 658:
case 1749:
case 3074:
case 2941:
case 4050:
case 805:
case 1183:
case 2237:
case 1961:
case 3266:
case 486:
case 2769:
case 500:
case 3418:
case 2808:
case 2734:
case 2479:
case 2066:
case 2198:
case 3688:
case 2640:
case 2520:
case 3037:
case 2705:
case 1447:
case 3103:
case 204:
case 1850:
case 1396:
case 1797:
case 3673:
case 106:
case 1928:
case 1660:
case 325:
case 839:
case 2501:
case 3836:
case 958:
case 423:
case 2564:
case 3189:
case 2699:
case 2682:
case 1333:
case 3301:
case 2867:
case 2145:
case 1624:
case 1847:
case 2770:
case 1450:
case 3320:
case 1904:
case 2113:
case 1023:
case 2460:
case 3715:
case 446:
case 1790:
case 2647:
case 3511:
case 1440:
case 363:
case 1857:
case 42:
case 2412:
case 1818:
case 1576:
case 3109:
case 2602:
case 3381:
case 3667:
case 1715:
case 3882:
case 4036:
case 4002:
case 2172:
case 3679:
case 995:
case 3440:
case 1030:
case 16:
case 1189:
case 1301:
case 3333:
case 1802:
case 2763:
case 3847:
case 2596:
case 931:
case 2922:
case 512:
case 1493:
case 883:
case 3131:
case 2914:
case 1688:
case 2344:
case 3759:
case 1029:
case 125:
case 2094:
case 306:
case 3797:
case 695:
case 1436:
case 3046:
case 1074:
case 3749:
case 872:
case 2693:
case 3608:
case 2785:
case 3457:
case 226:
case 3294:
case 272:
case 1418:
case 2581:
case 1726:
case 694:
case 1266:
case 3961:
case 24:
case 631:
case 124:
case 3940:
case 1395:
case 2988:
case 2065:
case 3651:
case 763:
case 945:
case 3362:
case 170:
case 2307:
case 3435:
case 3641:
case 3521:
case 1292:
case 1289:
case 1993:
case 2422:
case 76:
case 3725:
case 1013:
case 2123:
case 2375:
case 759:
case 1902:
case 3231:
case 1203:
case 3575:
case 725:
case 2300:
case 3716:
case 2219:
case 1587:
case 2156:
case 2321:
case 893:
case 3771:
case 293:
case 553:
case 2083:
case 3982:
case 2146:
case 4084:
case 3283:
case 55:
case 3804:
case 3738:
case 3194:
case 644:
case 724:
case 216:
case 3835:
case 569:
case 2368:
case 3278:
case 3019:
case 679:
case 2031:
case 2510:
case 1650:
case 2294:
case 2457:
case 4008:
case 2840:
case 105:
case 3888:
case 2749:
case 484:
case 3354:
case 3785:
case 2608:
case 1860:
case 2499:
case 3873:
case 3581:
case 1229:
case 2961:
case 1376:
case 1479:
case 3344:
case 1066:
case 3256:
case 2759:
case 951:
case 3914:
case 4012:
case 104:
case 2131:
case 2396:
case 1520:
case 4060:
case 806:
case 2046:
case 466:
case 1467:
case 3533:
case 1501:
case 2660:
case 206:
case 3094:
case 1564:
case 1230:
case 1145:
case 1867:
case 2333:
case 1682:
case 1408:
case 2624:
case 3763:
case 1657:
case 630:
case 2450:
case 383:
case 2165:
case 3596:
case 2847:
case 1460:
case 2667:
case 1155:
case 2899:
case 38:
case 4067:
case 2790:
case 2935:
case 3636:
case 4079:
case 2440:
case 1647:
case 1412:
case 1824:
case 3684:
case 2461:
case 316:
case 2835:
case 2283:
case 39:
case 1791:
case 3146:
case 3562:
case 705:
case 3031:
case 1441:
case 1003:
case 3368:
case 1595:
case 1604:
case 2716:
case 2575:
case 1298:
case 2947:
case 3083:
case 3414:
case 393:
case 2317:
case 1451:
case 3321:
case 704:
case 171:
case 533:
case 4041:
case 2950:
case 3814:
case 495:
case 1245:
case 1130:
case 2521:
case 3009:
case 450:
case 1558:
case 2500:
case 2265:
case 2651:
case 1213:
case 1255:
case 1841:
case 1912:
case 2568:
case 431:
case 502:
case 1089:
case 2861:
case 1548:
case 1628:
case 53:
case 1960:
case 575:
case 2395:
case 686:
case 3912:
case 4014:
case 3841:
case 977:
case 757:
case 3960:
case 1272:
case 3548:
case 1307:
case 2045:
case 3092:
case 78:
case 1517:
case 783:
case 3130:
case 3352:
case 946:
case 2013:
case 664:
case 2484:
case 3558:
case 2884:
case 2936:
case 2203:
case 2902:
case 1078:
case 3604:
case 1219:
case 743:
case 371:
case 965:
case 1321:
case 3451:
case 815:
case 1414:
case 1822:
case 567:
case 2348:
case 3380:
case 3791:
case 116:
case 1684:
case 814:
case 3441:
case 3003:
case 1031:
case 646:
case 726:
case 214:
case 3137:
case 952:
case 4022:
case 772:
case 1636:
case 2818:
case 1473:
case 3113:
case 18:
case 3155:
case 3824:
case 403:
case 3412:
case 1172:
case 638:
case 913:
case 1488:
case 2511:
case 263:
case 3682:
case 2189:
case 2192:
case 91:
case 3145:
case 40:
case 2984:
case 2802:
case 599:
case 1618:
case 259:
case 996:
case 3657:
case 3408:
case 501:
case 432:
case 3879:
case 2037:
case 3520:
case 3198:
case 304:
case 2103:
case 3951:
case 3808:
case 3734:
case 3479:
case 3501:
case 1533:
case 825:
case 4073:
case 2402:
case 2364:
case 3424:
case 1693:
case 3941:
case 1246:
case 172:
case 305:
case 1888:
case 61:
case 3311:
case 2327:
case 3769:
case 3229:
case 2418:
case 3237:
case 3860:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1757160001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,1,];
var gg_b = "1757160001/";

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
